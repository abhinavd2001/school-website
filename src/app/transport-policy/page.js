'use client';

import React from 'react';
import { Bus, AlertCircle } from 'lucide-react';
import FinalFooter from '@/components/finalfooter/Finalfooter';
import Header from '@/components/header/Header';
import Image from 'next/image';

export default function TransportPolicy() {
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
        <h1 className="text-2xl md:text-5xl font-bold text-white tracking-wide leading-tight text-center px-4 py-2">
          Transport<span className="text-[#e36c28]"> Policy</span>
        </h1>
      </div>
      <div>
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <div className="grid md:grid-cols-3 gap-8 m-4">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To continuously evolve and innovate, adhering to the highest standards of compliance
                and safety, while striving for excellence in providing seamless transportation
                solutions for our school community in Dehradun and surrounding areas.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To ensure the safe and dependable transportation of students, enabling them to access
                quality education at Himalayan Torch Bearers without worries about their commute,
                connecting families across the beautiful city of Dehradun.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing the best school transport service with the highest
                safety measures and comfort to each student. Our transport team continuously
                researches and implements the best practices in the industry.
              </p>
            </div>
          </div>

          <section className="m-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-8 my-10">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Guidelines</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• <strong>Unauthorized Transport:</strong> Parents are strongly advised against using unauthorized private transport services for their children's safety.</p>
                    <p>• <strong>Punctuality:</strong> Late arrival at pickup points will result in parents being responsible for dropping children to school.</p>
                    <p>• <strong>Emergency Contact:</strong> Lady attendants have dedicated mobile numbers for emergency communication with parents.</p>
                    <p>• <strong>Uncollected Students:</strong> Students will be returned to school if no guardian is present at drop-off time.</p>
                    <p>• <strong>Route Coverage:</strong> Our transport services cover major areas of Dehradun including residential localities and nearby townships.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        <section className="bg-slate-900 my-5 py-16 width-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Bus className="w-20 h-20 mx-auto mb-6 text-white" />
              <h2 className="text-4xl font-bold mb-4">Safe & Reliable Transport</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Ensuring the safest journey for our students with modern fleet, experienced drivers,
                and comprehensive safety measures across Dehradun and surrounding areas.
              </p>
            </div>
          </div>
        </section>
      </div>
      <FinalFooter />
    </div>
  );
}