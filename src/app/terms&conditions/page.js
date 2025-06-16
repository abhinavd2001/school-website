'use client';

import { useState } from 'react'
import { ChevronDown, ChevronRight, Mail } from 'lucide-react'
import Header from "@/components/header/Header";
import Image from 'next/image';
import FinalFooter from '@/components/finalfooter/Finalfooter';

export default function TermsAndConditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const termsSections = [
    {
      id: 'agreement',
      title: 'User Agreement',
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: `Your use of this website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.`,
    },
    {
      id: 'modifications',
      title: 'Changes to Terms',
      content: `We reserve the right to change these terms at any time. Any changes will be posted on this page and your continued use of the site constitutes your acceptance of those changes.`,
    },
    {
      id: 'external-links',
      title: 'Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.`,
    },
    {
      id: 'security',
      title: 'Security',
      content: `We take reasonable precautions to protect your data, but we cannot guarantee absolute security. By using this site, you acknowledge and accept this risk.`,
    },
    {
      id: 'jurisdiction',
      title: 'Jurisdiction',
      content: `These terms and conditions are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts located within India.`,
    },
  ];


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
          Terms &<span className="text-[#e36c28]"> Conditions</span>
        </h1>
      </div>

      <div className="w-full h-fit px-5 md:px-30 pt-5 md:pt-10">
        <p className="text-3xl text-slate-900 text-bold uppercase mb-2">Overview</p>
        <div className="relative mb-3 flex justify-center before:content-[''] before:absolute before:left-0 before:w-full before:h-px before:bg-slate-900">
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          This website and all its sub-domains are owned and operated by the Himalayan Torchbearers
          School administration and staff. It is designed to provide information related to the school,
          its programs, and activities, and reflects the official policies and procedures established by the
          school management. Himalayan Torchbearers School reserves the right, at any time, to modify, update, or
          discontinue any part of the website or its features, including but not limited to content availability or
          technical requirements for access and usage.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-5 md:py-12 space-y-8">
        <div className="space-y-4">
          {termsSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 text-slate-900">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {section.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 text-slate-500">
                  {openSections[section.id] ? (
                    <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="w-5 h-5 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {openSections[section.id] && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-slate-900 p-2 md:p-8 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Questions About Our Terms & conditions?</h3>
        <p className="text-blue-100 mb-6 text-lg">
          We're here to help! If you have any questions about the above specified Terms and conditions,
          please don't hesitate to reach out to us.
        </p>
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-2 md:px-6 py-3 text-[#e36c28]">
          <Mail className="w-5 h-5" />
          <span className="font-light md:font-medium">hello@htbacademy.org</span>
        </div>
      </div>
      <FinalFooter />
    </div>
  );
}
