'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeftLong, FaArrowRightLong, FaMobileScreenButton } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = ({ prevSlide, nextSlide }) => {
  return (
    <div className="w-full h-auto absolute bottom-0 bg-linear-to-t from-slate-900 to-transparent">
      <h1 className="hidden sm:inline-block text-white mx-16 my-8 text-5xl uppercase font-medium text-shadow-lg text-shadow-black font-open-sans">
        First Futuristic CBSE School
      </h1>
      <div className="flex mx-6 md:mx-16 mb-24 md:mb-15 justify-end md:justify-between">

        <div className="hidden sm:inline-flex flex items-center space-x-4 ">

          <Link
            href="tel:8755735050"
            className="inline-flex items-center text-lg font-bold justify-center text-center no-underline px-4 py-3 bg-[#e36c28] text-white uppercase tracking-wider font-medium"
          >            
            <FaMobileScreenButton className='mr-1'/>
            Call Now +91 87557 35050
          </Link>

          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 ml-8 text-3xl bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 text-3xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://api.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 text-3xl bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <FaWhatsapp />
          </Link>
        </div>
        <div className="text-2xl flex place-content-center space-x-2 mx-4">
          <button
            onClick={prevSlide}
            className="text-white"
            aria-label="Previous image"
          >
            <FaArrowLeftLong  />
          </button>
          <button
            onClick={nextSlide}
            className="text-white"
            aria-label="Next image"
          >
            <FaArrowRightLong  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
