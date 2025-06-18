'use client';

import FinalFooter from "@/components/finalfooter/Finalfooter";
import Header from "@/components/header/Header";
import Image from 'next/image';
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef } from "react";

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState('');
  const [error, setError] = useState('');
  const captchaRef = useRef(null);
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    // Trigger invisible captcha
    const captchaToken = await captchaRef.current.execute();
    if (!captchaToken) {
      setError('Captcha verification failed');
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('formType', 'admission');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('class', formData.class);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('token', captchaToken); // ✅ REQUIRED

    const res = await fetch('/api/forms', {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || result.message);

    // Success
    alert('Form submitted successfully!');
    setFormData({ name: '', class: '', phone: '', message: '' });
  } catch (err) {
    setError(err.message || 'An error occurred');
  } finally {
    setLoading(false);
    captchaRef.current.resetCaptcha(); // Reset for another try
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
          Join<span className="text-[#e36c28]"> Himalyan </span>Torchbearers
        </h1>
      </div>
      <section className="py-14">
        <div className="w-full h-full px-4 md:px-10">
          <p className="text-3xl text-slate-900 text-center md:text-start px-4 md:px-15 text-bold uppercase">List Of required Documents</p>
          <div className="relative my-2 mx-15 flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-slate-900">
          </div>
          <div className="px-10 md:px-20 py-9 md:py-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white">
            <div className="p-4 border bg-slate-900 text-white">Student’s Birth Certificate</div>
            <div className="p-4 border bg-slate-900 text-white">Student’s Aadhaar Card</div>
            <div className="p-4 border bg-slate-900 text-white">
              School Leaving Certificate
            </div>
            <div className="p-4 border bg-slate-900 text-white">
              UDISE Number from current school
            </div>
            <div className="p-4 border bg-slate-900 text-white">
              Student's Report Card
            </div>
            <div className="p-4 border bg-slate-900 text-white">Aadhar card of any one parent/guardian</div>
            <div className="p-4 border bg-slate-900 text-white">Pan Card of any one parent/guardian</div>
            <div className="p-4 border bg-slate-900 text-white">Passport size photograph of the student</div>
            <div className="p-4 border bg-slate-900 text-white">Caste Certificate (if applicable)</div>
          </div>
          <div className="bg-gradient-to-r mx-5 md:mx-19 from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <h3 className="text-2xl font-bold text-text-slate-900 mb-4">Note</h3>
              <div className="space-y-3 text-slate-900">
                <p>Admissions are on a first come first served basis and seats are limited. Admissions will only be confirmed once
                  the necessary documents and the first term fees payment is made. Fees once paid will be strictly non-refundable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 lg:py-10 px-5 lg:px-25 mx-5 lg:mx-50 mb-7">
        <div className="py-8 md:py-12 px-8 md:px-12 border-2 border-slate-900">
          <div className="bg-slate-900 flex flex-col mb-4">
            <div className="flex flex-row px-5 py-4 justify-between">
              <div className="flex-1 text-white text-center text-2xl uppercase">
                Admission Enquiry
              </div>
            </div>
            <div className="relative w-0 left-0 right-0 mx-auto z-40 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
          </div>
          <div className={`transition-visibility duration-500 ${submitted ? 'hidden' : 'block'}`}>
            <form onSubmit={handleSubmit} >
              {error && <p className="text-red-500">{error}</p>}
              <label className="block mb-2 font-lg">Student's Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border px-4 py-2 mb-4 focus:outline-none focus:border-orange-500" />
              <label className="block mb-2 font-lg">Class Applying For</label>
              <select type="text" id="class" name="class" value={formData.class} onChange={handleChange} required className="w-full border px-4 py-2 mb-4 focus:outline-none focus:border-orange-500">
                <option value="">Select Class*</option>
                {[
                  'PG', 'Nursery', 'LKG', 'UKG',
                  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                  '11th Commerce', '11th Science', '11th Humanities',
                  '12th Commerce', '12th Science', '12th Humanities',
                ].map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>

              <label className="block mb-2 font-lg">Parent's Mobile Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border px-4 py-2 mb-4 focus:outline-none focus:border-orange-500" />
              <label className="block mb-2 font-lg">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full border px-4 py-2 mb-4 h-24 min-h-11 focus:outline-none focus:border-orange-500" ></textarea>
              <HCaptcha
                ref={captchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                size="invisible"
                onVerify={(token) => setToken(token)}
                onError={() => setError("Captcha error")}
                onExpire={() => setError("Captcha expired, please try again")}
              />
              <div className="text-center mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#e36c28] text-white px-6 py-2 cursor-pointer hover:bg-orange-400"
                >
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
      </div >
      <div className="bg-slate-900 text-center p-10 mb-5">
        <h2 className="text-3xl text-[#e36c28] font-semibold mb-4">Steps to Apply</h2>
        <div className="max-w-lg mx-auto space-y-4 text-white text-start">
          <div className="flex gap-4">
            <span className="text-orange-400 font-bold text-xl">1.</span>
            <p>Fill out the admission inquiry form above.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-orange-400 font-bold text-xl">2.</span>
            <p>Our counselor will contact you to schedule a campus visit or online orientation.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-orange-400 font-bold text-xl">3.</span>
            <p>Complete the application with required documents and submit fees.</p>
          </div>
        </div>
      </div>
      <FinalFooter />
    </div>
  )
}
