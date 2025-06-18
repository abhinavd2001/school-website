import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const getEmailTemplate = (formType, data, file = null) => {
  const templates = {
    admission: {
      subject: `New Admission Application from ${data.name}`,
      html: `
        <!-- Admission email template HTML here -->
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Class:</strong> ${data.class}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    },
    callback: {
      subject: `Callback Request from ${data.name}`,
      html: `
        <!-- Callback email template HTML here -->
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Class:</strong> ${data.class}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      `,
    },
    career: {
      subject: `Job Application from ${data.name} - ${data.position}`,
      html: `
        <!-- Career email template HTML here -->
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Resume:</strong> ${file ? 'Attached' : 'Not provided'}</p>
      `,
    },
  };

  return templates[formType];
};

export async function POST(request) {
  let filePath = null;

  try {
    const formData = await request.formData();

    const token = formData.get('token');
    if (!token) {
      return NextResponse.json({ error: 'hCaptcha token is required' }, { status: 400 });
    }

    const hcaptchaResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const hcaptchaData = await hcaptchaResponse.json();

    if (!hcaptchaData.success) {
      return NextResponse.json(
        {
          error: 'hCaptcha verification failed',
          details: hcaptchaData['error-codes'],
        },
        { status: 400 }
      );
    }

    const formType = formData.get('formType');
    let data = {};
    let resumeFile = null;

    switch (formType) {
      case 'admission':
        data = {
          name: formData.get('name'),
          class: formData.get('class'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        };
        break;

      case 'callback':
        data = {
          name: formData.get('name'),
          class: formData.get('class'),
          phone: formData.get('phone'),
        };
        break;

      case 'career':
        data = {
          name: formData.get('name'),
          position: formData.get('position'),
          email: formData.get('email'),
        };

        const file = formData.get('resume');
        if (file && file instanceof File) {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          const uploadsDir = path.join(process.cwd(), 'uploads');
          const timestamp = Date.now();
          const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
          const fileName = `${timestamp}_${originalName}`;
          filePath = path.join(uploadsDir, fileName);

          await writeFile(filePath, buffer);
          resumeFile = {
            originalFilename: file.name,
            filepath: filePath,
          };
        }
        break;

      default:
        return NextResponse.json({ message: 'Invalid form type' }, { status: 400 });
    }

    const requiredFields = {
      admission: ['name', 'class', 'phone', 'message'],
      callback: ['name', 'class', 'phone'],
      career: ['name', 'position', 'email'],
    };

    const missing = requiredFields[formType].filter(field => !data[field] || data[field].trim() === '');
    if (missing.length > 0) {
      if (filePath) {
        try {
          await unlink(filePath);
        } catch (error) {
          console.error('Error cleaning up file:', error);
        }
      }
      return NextResponse.json(
        { message: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    const emailTemplate = getEmailTemplate(formType, data, resumeFile);
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    };

    if (resumeFile) {
      mailOptions.attachments = [
        {
          filename: resumeFile.originalFilename,
          path: resumeFile.filepath,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    if (filePath) {
      try {
        await unlink(filePath);
      } catch (error) {
        console.error('Error cleaning up file:', error);
      }
    }

    return NextResponse.json({
      message: 'Form submitted successfully!',
      formType,
      data,
    });

  } catch (error) {
    console.error('Error processing form:', error);

    if (filePath) {
      try {
        await unlink(filePath);
      } catch (cleanupError) {
        console.error('Error cleaning up file:', cleanupError);
      }
    }

    return NextResponse.json(
      {
        message: 'Error processing form submission',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
