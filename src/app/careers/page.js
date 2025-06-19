'use client';

import FinalFooter from "@/components/finalfooter/Finalfooter";
import Header from "@/components/header/Header";
import Image from 'next/image';
import { useState,useRef } from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState('');
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setResumeFile(file);
      } else {
        alert('Please select a PDF, DOC, or DOCX file');
        e.target.value = '';
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaToken) {
    // Trigger invisible captcha manually
    captchaRef.current.execute();
    return;
    }
    await handleVerifiedSubmit(captchaToken);
  };

   const handleVerifiedSubmit = async (captchaToken) => {
   setLoading(true);
   setError('');

    try {
      const submitData = new FormData();
      submitData.append('formType', 'career');
      submitData.append('name', formData.name);
      submitData.append('position', formData.position);
      submitData.append('email', formData.email);
      if (resumeFile) {
        submitData.append('resume', resumeFile);
      }
      submitData.append('hcaptchaToken', captchaToken);

      const response = await fetch('/api/forms', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', position: '', email: '' });
        setResumeFile(null);
        document.getElementById('resume').value = '';
        captchaRef.current.resetCaptcha(); // reset after submit
        setCaptchaToken('');
      } else {
        setError(result.error || 'Failed to submit.');
      }
    } catch (error) {
      setError('An error occurred while submitting.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-w-full overflow-x-hidden scroll-smooth mb-18 md:mb-0">
      <div className='min-h-screen min-w-screen'>
        <Image
          src="/image1.jpg"
          alt="Image not found"
          layout="fill"
          objectFit="cover"
          className=" h-full w-full"
        />
      </div>
      <Header />
      <div className="absolute bottom-0 w-full h-30 md:h-40 flex items-center justify-center bg-slate-900">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight text-center px-4 py-2">
          Make<span className="text-[#e36c28]"> Your </span>Career
        </h1>
      </div>
      <section className="py-6 md:py-15 px-6 md:px-20">
        <p className="text-4xl text-slate-900 px-15 text-bold uppercase">Open Positions</p>
        <div className="relative mb-8 mt-4 mx-15 flex justify-center before:content-[''] before:absolute before:left-0 before:w-full before:h-px before:bg-slate-900">
        </div>
        <div className="space-y-8 max-w-4xl mx-auto my-4 md:my-10">
          {[
            {
              title: "Primary School Teacher",
              location: "Shimla Campus",
              type: "Full-time",
              description: "Energetic and passionate individuals with experience in early education.",
            },
            {
              title: "Science Lab Assistant",
              location: "Dharamshala Campus",
              type: "Part-time",
              description: "Assist in practical science sessions for classes 6 to 10.",
            },
            {
              title: "Admissions Counselor",
              location: "Remote",
              type: "Full-time",
              description: "Handle inquiries, counseling, and enrollment operations.",
            },
          ].map((job, index) => (
            <div key={index} className="p-6 bg-slate-900 shadow-sm hover:shadow-md transition text-white">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{job.location} • {job.type}</p>
              <p className="mb-4">{job.description}</p>
              <a
                href="#apply"
                className="text-[#e36c28] hover:underline font-medium"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="py-7 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Work with Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Purposeful Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              Make a difference by mentoring young leaders and fostering holistic growth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Collaborative Culture</h3>
            <p className="text-gray-700 leading-relaxed">
              Join a vibrant, inclusive team driven by innovation and empathy.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth & Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              Regular training, workshops, and career advancement opportunities.
            </p>
          </div>
        </div>
      </div>

      <div id="apply" className="py-5 lg:py-10 px-5 lg:px-25 mx-5 lg:mx-50 mb-7">
        <div className="py-4 md:py-8 px-4 md:px-8  border-2 border-slate-900">
          <div className="bg-slate-900 flex flex-col mb-4">
            <div className="flex flex-row px-5 py-4 justify-between">
              <div className="flex-1 text-white text-center text-2xl uppercase">
                Submit Your Application
              </div>
            </div>
            <div className="relative w-0 left-0 right-0 mx-auto z-40 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
          </div>
          <div className={`transition-visibility duration-500 ${submitted ? 'hidden' : 'block'}`} >
            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              <label className="block mb-2 text-lg">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
              <label className="block mb-2 text-lg">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
              <label className="block mb-2 text-lg">Position Applied For</label>
              <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
              <label className="block mb-2 text-lg">Upload Resume (PDF/DOC)</label>
              <input type="file" id="resume" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="block w-full border text-sm focus:z-10 focus:border-orange-500 disabled:opacity-50 disabled:pointer-events-none file:bg-slate-900 file:border-r-1 file:me-4 file:py-3 file:px-4 file:text-white" />
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                onVerify={token => {
                  setCaptchaToken(token);
                  handleVerifiedSubmit(token);
                }}
                size="invisible"
                ref={captchaRef}
                onError={() => setError("Captcha failed, please try again.")}
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#e36c28] text-white px-6 py-2 cursor-pointer hover:bg-orange-400 mt-4 md:mt-9"
                  disabled={loading}>
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
          <div
            className={`transition-visibility duration-500 text-slate-900 bg-white ${submitted ? 'flex' : 'hidden'} justify-center items-center w-full h-full`} >
            <div className="w-full h-fit bg-white py-10 ">
              <h2 className="text-xl my-2 font-semibold text-center">Form submitted successfully!</h2>
              <p className="text-center my-2" >Thanks for your Response</p>
              <p className="text-center my-2" >We’ll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-center p-8 md:p-15 text-white">
        <h2 className="text-3xl font-semibold mb-4">Build the Future With Us</h2>
        <p className="mb-6">Join our team and help ignite the torch of learning in young minds.</p>
        <a
          href="#apply"
          className="bg-[#e36c28] px-6 py-3 rounded font-semibold"
        >
          Apply Today
        </a>
      </div>
      <FinalFooter />
    </div>
  )
}
