'use client';

import { React, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuRightAlt } from "react-icons/cg";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Input, TransitionChild } from '@headlessui/react'
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
        <Link href="#" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={300}
            height={30}
            priority
          />
        </Link>
        <Link href="#" className="block md:hidden">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={170}
            height={100}
            priority
          />
        </Link>
        <div className="flex flex-row items-center">
          <button onClick={() => setOpenMod2(true)} className="flex cursor-pointer uppercase text-shadow-xs text-shadow-black text-lg font-normal tracking-normal content-center hidden lg:flex px-4">
            Request A Callback
          </button>
          <Link href="/admissions" className="flex content-center uppercase text-shadow-xs text-shadow-black text-lg font-normal tracking-normal hidden lg:flex px-4">
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
                              target="_blank"
                              rel="noopener noreferrer"
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
                            className="inline-flex items-center uppercase cursor-pointer mt-12 mb-2 text-lg font-bold justify-center text-center no-underline px-4 py-3 bg-[#e36c28] text-white uppercase tracking-wider font-medium"
                          >
                            Admissions {new Date().getFullYear()}-{new Date().getFullYear() + 1}
                          </button>
                          <Link
                            href="tel:09290097"
                            className="inline-flex items-center text-lg my-2 font-bold justify-center no-underline px-4 py-3 bg-[#e36c28] text-white uppercase tracking-wider font-medium"
                          >
                            <FaMobileScreenButton className='mr-1' />
                            +91 XXXXX XXXXX
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
        <Link href="#" className="block xl:hidden col-span-2 md:col-span-1">
          <Image
            src="/logo.png"
            alt="School Logo"
            width={200}
            height={150}
            priority
          />
        </Link>
        <Link href="#" className="text-center hidden xl:block text-xl font-semibold tracking-wider leading-10">
          Himalyan Torchbearers
        </Link>
        <div className="col-span-2 md:col-span-3 flex flex-basis-100% font-medium tracking-wider justify-end-safe">
          <Link href="/about" className="hidden xl:block content-center w-fit px-4 text-lg">
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
                <form id="enquiryform">
                  <div className="row h-full">
                    <Input type="text" required="" className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" defaultValue="" id="child_name1" name="child_name" placeholder="Student Name*"></Input>
                    <select className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" id="admclass1" name="admclass" aria-label="Default select example" required="">
                      <option defaultValue="">Select Class*</option>
                      <option defaultValue="PG">PG</option>
                      <option defaultValue="Nursery">Nursery</option>
                      <option defaultValue="LKG">LKG</option>
                      <option defaultValue="UKG">UKG</option>
                      <option defaultValue="1">1</option>
                      <option defaultValue="2">2</option>
                      <option defaultValue="3">3</option>
                      <option defaultValue="4">4</option>
                      <option defaultValue="5">5</option>
                      <option defaultValue="6">6</option>
                      <option defaultValue="7">7</option>
                      <option defaultValue="8">8</option>
                      <option defaultValue="9">9</option>
                      <option defaultValue="10">10</option>
                      <option defaultValue="11th Commerce">11th Commerce</option>
                      <option defaultValue="11th Science">11th Science</option>
                      <option defaultValue="11th Humanities">11th Humanities</option>
                      <option defaultValue="12th Commerce">12th Commerce</option>
                      <option defaultValue="12th Science">12th Science</option>
                      <option defaultValue="12th Humanities">12th Humanities</option>
                    </select>
                    <Input type="text" className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none mb-2" defaultValue="" id="mobile1" name="mobile" placeholder="Mobile No.*" required=""></Input>
                    <textarea required="" className="w-full h-18 min-h-11 border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none mb-2" name="message" id="message1" rows="3" placeholder="Write Message"></textarea>
                    <button type="submit" className="bg-[#e36c28] w-full cursor-pointer text-white py-3 px-4 text-xl text-black placeholder:text-black outline-none">Submit</button>
                  </div>
                </form>
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
              <div className="bg-white px-5 py-4">
                <form id="enquiryform">
                  <div className="row h-full">
                    <Input type="text" required="" className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" defaultValue="" id="child_name1" name="child_name" placeholder="Student Name*"></Input>
                    <select className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" id="admclass1" name="admclass" aria-label="Default select example" required="">
                      <option defaultValue="">Select Class*</option>
                      <option defaultValue="PG">PG</option>
                      <option defaultValue="Nursery">Nursery</option>
                      <option defaultValue="LKG">LKG</option>
                      <option defaultValue="UKG">UKG</option>
                      <option defaultValue="1">1</option>
                      <option defaultValue="2">2</option>
                      <option defaultValue="3">3</option>
                      <option defaultValue="4">4</option>
                      <option defaultValue="5">5</option>
                      <option defaultValue="6">6</option>
                      <option defaultValue="7">7</option>
                      <option defaultValue="8">8</option>
                      <option defaultValue="9">9</option>
                      <option defaultValue="10">10</option>
                      <option defaultValue="11th Commerce">11th Commerce</option>
                      <option defaultValue="11th Science">11th Science</option>
                      <option defaultValue="11th Humanities">11th Humanities</option>
                      <option defaultValue="12th Commerce">12th Commerce</option>
                      <option defaultValue="12th Science">12th Science</option>
                      <option defaultValue="12th Humanities">12th Humanities</option>
                    </select>
                    <Input type="text" className="w-full border-1 border-gray-300 py-3 px-4 text-lg text-black placeholder:text-black outline-none  mb-2" defaultValue="" id="mobile1" name="mobile" placeholder="Mobile No.*" required=""></Input>
                    <button type="submit" className="bg-[#e36c28] my-3 w-full cursor-pointer text-white py-3 px-4 text-xl text-black placeholder:text-black outline-none">Submit</button>
                  </div>
                </form>
                <div className="relative flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-black">
                  <span className="flex text-black text-lg bg-white z-50 px-3">OR</span>
                </div>
                <button
                  href="tel:09290097"
                  className="w-full inline-flex items-center my-3 text-xl justify-between font-bold cursor-pointer text-center px-6 py-2 bg-white text-slate-950 border-1 border-slate-950 uppercase font-bold"
                >
                  <FaMobileScreenButton size={25} />
                  <span className="flex-1">+91 XXXXX XXXXX</span>
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <footer className="block md:hidden grid grid-cols-2 fixed bottom-0 z-50 w-screen items-center text-white text-md
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
