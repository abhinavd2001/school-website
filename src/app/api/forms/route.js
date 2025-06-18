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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center; margin-bottom: 30px;">New Admission Application</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Student Information</h3>
            <p style="margin: 8px 0;"><strong>Student's name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Class applied for:</strong> ${data.class}</p>
            <p style="margin: 8px 0;"><strong>Parent's phone:</strong> ${data.phone}</p>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Message</h3>
            <p style="margin: 0; line-height: 1.6;">${data.message}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <em>Received at: ${new Date().toLocaleString()}</em>
            </p>
          </div>
        </div>
      `,
    },
    callback: {
      subject: `Callback Request from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #059669; text-align: center; margin-bottom: 30px;">Callback Request</h2>
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Student's name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Class applied for:</strong> ${data.class}</p>
            <p style="margin: 8px 0;"><strong>Parent's phone:</strong> ${data.phone}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <em>Received at: ${new Date().toLocaleString()}</em>
            </p>
          </div>
        </div>
      `,
    },
    career: {
      subject: `Job Application from ${data.name} - ${data.position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #7c3aed; text-align: center; margin-bottom: 30px;">New Job Application</h2>
          <div style="background-color: #faf5ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Applicant Information</h3>
            <p style="margin: 8px 0;"><strong>Candidate's name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Position applied for:</strong> ${data.position}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 8px 0;"><strong>Resume:</strong> ${file ? 'Attached' : 'Not provided'}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <em>Received at: ${new Date().toLocaleString()}</em>
            </p>
          </div>
        </div>
      `,
    },
  };

  return templates[formType];
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    const formType = formData.get('formType');

    let data = {};
    let resumeFile = null;
    let filePath = null;

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
      return NextResponse.json({
        message: `Missing required fields: ${missing.join(', ')}`
      }, { status: 400 });
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
      data
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

    return NextResponse.json({
      message: 'Error processing form submission',
      error: error.message
    }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}