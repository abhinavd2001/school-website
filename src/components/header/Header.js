'use client';

import { React, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuRightAlt } from "react-icons/cg";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { IoClose } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openMod, setOpenMod] = useState(false)
  const [openMod2, setOpenMod2] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState('');
  const [submitted2, setSubmitted2] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted('');
    setSubmitted2('');
    setError('');

    const form = e.target;
    const formType = form.getAttribute('id');

    const submitData = new FormData();
    submitData.append('formType', formType);

    if (formType === 'admission') {
      submitData.append('name', formData.name);
      submitData.append('class', formData.class);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
    } else if (formType === 'callback') {
      submitData.append('name', formData.name);
      submitData.append('class', formData.class);
      submitData.append('phone', formData.phone);
    }

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ name: '', class: '', phone: '', message: '' });
        if(formType === 'admission'){
          setSubmitted(true);
        }
        else if(formType === 'callback'){
          setSubmitted2(true);
        }
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showFirst = scrollY === 0;
  const showSecond = scrollY > 0;


  return (
    <header className="fixed w-full top-0 z-50">
      <nav className={`flex flex-row px-4 pt-8 md:pt-8 md:px-10 justify-between items-center lg:space-x-4 text-white font-open-sans 
         bg-linear-to-b from-slate-900 to-transparent transition-opacity transition-discrete duration-700 ease-in-out ${showFirst ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <Link href="/" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={300}
            height={30}
            priority
          />
        </Link>
        <Link href="/" className="block md:hidden">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={170}
            height={100}
            priority
          />
        </Link>
        <div className="flex flex-row items-center">
          <button onClick={() => setOpenMod2(true)} className="cursor-pointer uppercase text-shadow-xs text-shadow-black text-lg font-normal tracking-normal content-center hidden lg:flex px-4">
            Request A Callback
          </button>
          <Link href="/admissions" className="content-center uppercase text-shadow-xs text-shadow-black text-lg font-normal tracking-normal hidden lg:flex px-4">
            Admissions {new Date().getFullYear()}-{new Date().getFullYear() + 1}
          </Link>
          <button onClick={() => setOpen(true)} className='flex flex-col md:flex-row uppercase text-shadow-xs text-shadow-black text-lg font-normal tracking-normal items-center px-0 md:px-4'>
            <CgMenuRightAlt className="size-10 md:size-11" />
            <span className="text-base/2 md:text-lg">More</span>
          </button>
        </div>

        {/* side menu */}
        <Dialog open={open} onClose={setOpen} className="relative z-50">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <IoClose aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-scroll bg-slate-900 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="text-4xl text-[#e36c28]">Menu</DialogTitle>
                    </div>
                    <div className="relative my-4 flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-white">
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex flex-col gap-3 flex-1 justify-center md:justify-around mt-4 lg-mt-0 max-h-fit">
                        <div className="flex flex-col space-y-2 h-fit">
                          <div className="flex flex-col gap-3 flex-1 px-2 text-2xl">
                            <Link
                              href="/about"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              About Us
                            </Link>
                            <Link
                              href="/why"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Why HTB
                            </Link>
                            <a
                              href="/gallery2.jpg"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Download Brochure
                            </a>
                            <Link
                              href="/admissions"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Admissions
                            </Link>
                            <Link
                              href="/careers"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Careers
                            </Link>
                            <Link
                              href="/transport-policy"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Transport Policy
                            </Link>
                            <Link
                              href="/refund-policy"
                              className="text-white hover:text-blue-600 transition-colors"
                            >
                              Refund Policy
                            </Link>
                          </div>

                          <button
                            onClick={() => setOpenMod1(true)}
                            className="inline-flex items-center uppercase cursor-pointer mt-12 mb-2 text-lg justify-center text-center no-underline px-4 py-3 bg-[#e36c28] text-white tracking-wider font-medium"
                          >
                            Admissions {new Date().getFullYear()}-{new Date().getFullYear() + 1}
                          </button>
                          <Link
                            href="tel:8755735050"
                            className="inline-flex items-center text-lg my-2 justify-center no-underline px-4 py-3 bg-[#e36c28] text-white uppercase tracking-wider font-medium"
                          >
                            <FaMobileScreenButton className='mr-1' />
                            +91 87557 35050
                          </Link>
                          <div className="relative my-4 flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-white">
                          </div>
                          <div className="flex flex-row justify-center pt-5 mt-4">
                            <span className="flex text-lg text-white items-center mx-2">
                              Follow us on
                            </span>
                            <Link
                              href="https://www.facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 mx-2 text-2xl bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                              <FaFacebookF />
                            </Link>
                            <Link
                              href="https://api.whatsapp.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 mx-2 text-2xl bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                              <FaWhatsapp />
                            </Link>
                            <Link
                              href="https://www.instagram.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 mx-2 text-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300"
                            >
                              <FaInstagram />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </nav>

      <nav className={`grid grid-cols-4 absolute top-0 w-screen px-3 md:px-4 py-2 items-center justify-between text-white 
          font-normal font-open-sans uppercase bg-slate-900 transition-opacity transition-discrete duration-700 ease-in-out ${showSecond ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <Link href="/" className="block xl:hidden col-span-2 md:col-span-1">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={200}
            height={150}
            priority
          />
        </Link>
        <Link href="/" className="text-center hidden xl:block text-xl font-semibold tracking-wider leading-10">
          Himalyan Torchbearers
        </Link>
        <div className="col-span-2 md:col-span-3 flex flex-basis-100% font-medium tracking-wider justify-end-safe">
          <Link href="/new" className="hidden xl:block content-center w-fit px-4 text-lg">
            About Us
          </Link>
          <Link href="/careers" className="hidden xl:block content-center w-fit px-4 text-lg">
            Careers
          </Link>
          <button onClick={() => setOpenMod2(true)} className="hidden md:block cursor-pointer content-center uppercase w-fit px-4 text-lg">
            Request A Callback
          </button>
          <Link href="/admissions" className="hidden md:block content-center w-fit px-4 text-lg">
            Admissions {new Date().getFullYear()}-{new Date().getFullYear() + 1}
          </Link>
          <button onClick={() => setOpen(true)} className="flex flex-col md:flex-row items-center w-fit px-4">
            <CgMenuRightAlt className="size-10 md:size-11" />
            <span className="text-base/2 md:text-lg">More</span>
          </button>
        </div>
      </nav>

      {/* admission-modal */}
      <button onClick={() => setOpenMod(true)} className="fixed top-1/2 -right-[115px] z-50 cursor-pointer bg-[#e36c28] border-[#e36c28] rounded border-0 rounded-br-none rounded-bl-none p-2 px-4 text-lg text-white leading-[1.33] rotate-[270deg] origin-center">ADMISSION ENQUIRY {new Date().getFullYear()}</button>
      <Dialog open={openMod} onClose={setOpenMod} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-0 z-50 min-w-full font-open-sans">
          <div className="flex items-center justify-center min-h-screen p-4 sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden bg-white outline-6 outline-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-full sm:max-w-md data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-slate-900 flex flex-col">
                <div className="flex flex-row px-5 py-4 justify-between">
                  <DialogTitle as="div" className="flex-1 text-white text-center text-2xl uppercase">
                    Admission Enquiry
                  </DialogTitle>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpenMod(false)}
                    className="flex justify-center align-item-center text-white"
                  >
                    <IoClose aria-hidden="true" className="size-8" />
                  </button>
                </div>
                <div className="relative w-0 left-0 right-0 mx-auto z-50 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
              </div>
              <div className="bg-white px-5 py-4">
                <form onSubmit={handleSubmit} id='admission'>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className={`row h-full transition-visibility duration-500 ${submitted ? 'hidden' : 'block'}`}>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" placeholder="Student Name*"></input>
                    <select type="text" id="class" name="class" value={formData.class} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2">
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
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none mb-2" placeholder="Mobile No.*"></input>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full h-18 min-h-11 border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none mb-2" rows="3" placeholder="Write Message"></textarea>
                    <button type="submit" disabled={loading} className="bg-[#e36c28] w-full cursor-pointer text-white py-3 px-4 text-xl placeholder:text-black outline-none">{loading ? 'Sending...' : 'Submit Inquiry'}</button>
                  </div>
                </form>
                <div
                  className={`transition-visibility duration-500 text-slate-900 bg-white 
                       ${submitted ? 'flex' : 'hidden'} 
                       justify-center items-center w-full h-full`} >
                  <div className="w-full h-fit bg-white py-10 ">
                    <h2 className="text-xl my-2 font-semibold text-center">Form submitted successfully!</h2>
                    <p className="text-center my-2" >Thanks for your Response</p>
                    <p className="text-center my-2" >We’ll get back to you soon.</p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* Call back modal */}
      <Dialog open={openMod2} onClose={setOpenMod2} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-0 z-50 min-w-full font-open-sans">
          <div className="flex items-center justify-center min-h-screen p-4 sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden bg-white outline-6 outline-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-md data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-slate-900 flex flex-col">
                <div className="flex flex-row px-5 py-4 justify-between">
                  <DialogTitle as="div" className="flex-1 text-white text-2xl text-center uppercase">
                    Request a Callback
                  </DialogTitle>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpenMod2(false)}
                    className="flex justify-center align-item-center text-white"
                  >
                    <IoClose aria-hidden="true" className="size-8" />
                  </button>
                </div>
                <div className="relative w-0 left-0 right-0 mx-auto z-50 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
              </div>
              <div className={`bg-white px-5 py-4 transition-visibility duration-500 ${submitted2 ? 'hidden' : 'block'}`}>
                <form onSubmit={handleSubmit} id='callback'>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="row h-full">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" placeholder="Student Name*"></input>
                    <select type="text" id="class" name="class" value={formData.class} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2">
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
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" placeholder="Mobile No.*"></input>
                    <button type="submit" disabled={loading} className="bg-[#e36c28] my-3 w-full cursor-pointer text-white py-3 px-4 text-xl placeholder:text-black outline-none">{loading ? 'Sending...' : 'Submit Inquiry'}</button>
                  </div>
                </form>
                <div className="relative flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-black">
                  <span className="flex text-black text-lg bg-white z-50 px-3">OR</span>
                </div>
                <button className="w-full">
                  <a href="tel:8755735050" className="w-full inline-flex items-center my-3 text-xl justify-between cursor-pointer text-center px-6 py-2 bg-white text-slate-950 border-1 border-slate-950 uppercase font-bold">
                    <FaMobileScreenButton size={25} />
                    <span className="flex-1">+91 87557 35050</span>
                  </a>
                </button>
              </div>
              <div className={`px-5 py-4 transition-visibility duration-500 text-slate-900 bg-white ${submitted2 ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}>
                <div className="w-full h-fit bg-white py-10 ">
                  <h2 className="text-xl my-2 font-semibold text-center">Form submitted successfully!</h2>
                  <p className="text-center my-2" >Thanks for your Response</p>
                  <p className="text-center my-2" >We’ll get back to you soon.</p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <footer className="md:hidden grid grid-cols-2 fixed bottom-0 z-50 w-screen items-center text-white text-md
          font-semibold font-open-sans uppercase bg-slate-800">
        <Link href="/admissions" className="text-center block md:hidden bg-[#e36c28] px-6 py-3 text-wrap">
          Admissions <br />{new Date().getFullYear()}-{new Date().getFullYear() + 1}
        </Link>
        <button onClick={() => setOpenMod2(true)} className="cursor-pointer uppercase content-center block md:hidden px-2 bg-slate-800">
          Request A<br />Callback
        </button>
      </footer>
    </header>
  );
};

export default Header;
