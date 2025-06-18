'use client';

import { useState } from 'react'
import { ChevronDown, ChevronRight, Shield, Eye, Server, Link, Lock, MessageCircle, Mail } from 'lucide-react'
import Header from "@/components/header/Header";
import Image from 'next/image';
import FinalFooter from '@/components/finalfooter/Finalfooter';

export default function Privacypolicy() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const privacySections = [
    {
      id: 'personal-info',
      title: 'Use of Personal Information',
      icon: <Shield className="w-5 h-5" />,
      content: `We do not collect any personal information unless you voluntarily provide it by sending us e-mail, participating in a survey, or completing an on-line form. Personal information submitted will not be transferred to any non-affiliated third parties unless otherwise stated at the time of collection. When a user submits personally identifiable information it is used only for the purpose stated at the time of collection.`
    },
    {
      id: 'consent',
      title: 'Consent',
      icon: <Eye className="w-5 h-5" />,
      content: `Where consent for the use and disclosure of personal information is required, the school will seek consent from the appropriate person. In the case of a student's personal information, the school will seek the consent from the parent or guardian before using/disclosing any personal student information.`
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <Server className="w-5 h-5" />,
      content: `A cookie is a small text file stored by your browser that allows the website to "remember" your preferences (such as calendar settings and site bookmarks) on the site from visit to visit, or to maintain your "logged in" status when visiting protected areas. Usage of a cookie is in no way linked to any personally identifiable information while on our site. Web browsers have settings allowing you to reject cookies, or selectively accept cookies, or delete cookies previously accepted. Please be aware that rejecting or deleting cookies from our website may make certain functions unavailable to you.`
    },
    {
      id: 'log-files',
      title: 'Log Files',
      icon: <Server className="w-5 h-5" />,
      content: `Like most standard website servers, we use website statistic packages such as Google Analytics to analyze trends in how our website is accessed and utilized. Information monitored includes internet protocol (IP) addresses, geographic location of visitors (country, city), browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, time spent on pages, and keywords used to find our site via search engines. This information is anonymous and cannot be directly linked to individual users. We may use it to identify high-use or low-use areas of the site, pinpoint problem areas of the site, analyze broad demographic trends in our visitors, and make decisions about how to make it easier for people to find and navigate our website.`
    },
    {
      id: 'links',
      title: 'Links',
      icon: <Link className="w-5 h-5" />,
      content: `This website may contain links to other sites. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every website that collects personally identifiable information. This privacy statement applies solely to information collected by this website.`
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Lock className="w-5 h-5" />,
      content: `This website takes every precaution to protect our users' personal information. Whenever users submit personal information (such as contact info or credit card info) via online forms, registration, or online purchase, upon submission that information is encrypted via the highest level of SSL (Secured Sockets Layer) available. Servers that store personally identifiable information are in a secure environment. Under no circumstances are credit card numbers permanently stored on our website servers.`
    },
    {
      id: 'non-secured',
      title: 'Non-secured Communications',
      icon: <MessageCircle className="w-5 h-5" />,
      content: `Posts to discussion forums, discussion boards, comments to blogs, and Alumni Class Notes are viewable by other users. When these areas are not in a password protected area, they may be viewable by the general public. Please be aware of this when posting personal information in these areas.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <Mail className="w-5 h-5" />,
      content: `If users have any questions or suggestions regarding our privacy policy, please contact us at: hello@htbacademy.org`
    }
  ]

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
          Privacy<span className="text-[#e36c28]"> Policy</span>
        </h1>
      </div>

      <div className="w-full h-fit px-5 md:px-30 pt-10 md:pt-18">
        <p className="text-3xl text-slate-900 text-bold uppercase">Our Commitment to Privacy</p>
        <div className="relative my-5 flex justify-center before:content-[''] before:absolute before:left-0 before:w-full before:h-px before:bg-slate-900">
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Himalayan Torchbearers School, we understand the importance of privacy, especially when it comes to
          our students and their families. This privacy policy outlines how we handle personal information on our
          website and in our digital communications. We are committed to transparency and protecting the privacy
          of all our website visitors, students, parents, and staff members.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-5 space-y-8">

        <div className="space-y-4">
          {privacySections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md border border-gray-100 my-3 md:my-8 overflow-hidden">
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

      <div className="mt-8 bg-slate-900 p-6 md:p-10 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Questions About Our Privacy Policy?</h3>
        <p className="text-blue-100 mb-6 text-lg">
          We're here to help! If you have any questions about how we handle your personal information,
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
