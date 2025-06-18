'use client';

import { Link, Mail } from 'lucide-react'
import FinalFooter from '@/components/finalfooter/Finalfooter';
import Header from '@/components/header/Header';
import Image from 'next/image';

export default function Home() {
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
          About<span className="text-[#e36c28]"> Us </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-5 md:mx-18 my-6 md:my-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading mountain education organization in the Himalayas,
            inspiring people to connect with nature while promoting sustainable environmental conservation.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Purpose</h3>
          <p className="text-gray-700 leading-relaxed">
            To nurture brave, responsible, and environmentally conscious adventurers
            who respect the mountains and local communities.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Learnings</h3>
          <p className="text-gray-700 leading-relaxed">
            Education here goes beyond memorizing facts—it is about understanding deeply.
             We promote inquiry, creativity, and lifelong learning.
          </p>
        </div>
      </div>
      <div className="bg-white/95 px-6 md:px-12 py-6 md:py-10 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/about.jpg"
              alt="Himalayan Torchbearers School Building"
              width={400}
              height={300}
              className="w-full h-80 object-cover hover:-translate-y-2 transition-all duration-300"
              priority
            />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Nurturing Tomorrow's Leaders
              </h2>
              <p className="text-md text-gray-700 leading-relaxed">
                Himalayan Torchbearers is a premier CBSE affiliated co-educational institution nestled
                in the serene foothills of the Himalayas, powered by our innovative. Himalayan Learning Excellence System™.
                Our educational philosophy draws inspiration from the timeless wisdom of the Himalayas, combining
                deep-rooted Indian values and rich cultural heritage with a progressive global outlook.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Holistic Development</h3>
              <p className="text-md text-gray-700 leading-relaxed">
                While academic excellence forms our foundation, Himalayan Torchbearers elevates
                your child's educational journey by providing exceptional opportunities in
                co-scholastic areas. We recognize that every child is unique and possesses immense
                inherent talent that requires careful nurturing and abundant opportunities for expression.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-8 bg-slate-900 px-7 md:px-8 py-7 md:py-14 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Want to Learn More About Us?</h3>
        <p className="text-blue-100 mb-6 text-lg">
          Have questions about our mission, programs, or how you can get involved?
          We'd love to hear from you and share more about our story.
        </p>
        <button className="space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-2 md:px-6 py-3 text-[#e36c28]">
          <a href='mailto:hello@htbacademy.org' className="inline-flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span className="font-light md:font-medium">hello@htbacademy.org</span>
          </a>
        </button>
      </div>
      <FinalFooter />
    </div>
  );
}
