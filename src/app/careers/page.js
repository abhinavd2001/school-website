'use client';

import FinalFooter from "@/components/finalfooter/Finalfooter";
import Header from "@/components/header/Header";
import Image from 'next/image';

export default function CareersPage() {
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
           <div className="absolute bottom-0 w-full h-25 md:h-40 flex items-center justify-center bg-slate-900">
             <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight text-center px-4">
               Make<span className="text-[#e36c28]"> Your </span>career
             </h1>
           </div>
  <main className="bg-white text-gray-800">
      <section className="py-10 px-6 md:px-20">
        <p className="text-3xl text-slate-900 px-15 text-bold uppercase">Open Positions</p>
        <div className="relative mb-8 mt-4 mx-15 flex justify-center before:content-[''] before:absolute before:left-0 before:w-full before:h-px before:bg-slate-900">
          </div>
        <div className="space-y-8 max-w-4xl mx-auto">
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
        <h2 className="text-3xl font-semibold mb-6">Why Work with Us?</h2>
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
       <div className="py-5 lg:py-10 px-5 lg:px-25 mx-5 lg:mx-50">
        <div className="py-8 px-10 border-2 border-slate-900">
          <div className="bg-slate-900 flex flex-col mb-4">
            <div className="flex flex-row px-5 py-4 justify-between">
              <div className="flex-1 text-white text-center text-2xl uppercase">
                Submit Your Application
              </div>
            </div>
            <div className="relative w-0 left-0 right-0 mx-auto z-40 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
          </div>
          <form>
            <label className="block mb-1 text-lg">Full Name</label>
            <input type="text" className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
             <label className="block mb-1 text-lg">Email Address</label>
            <input type="text" className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
             <label className="block mb-1 text-lg">Position Applied For</label>
            <input type="text" className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
            <label className="block mb-1 text-lg">Upload Resume (PDF/DOC)</label>
           <input type="file" accept=".pdf,.doc,.docx" className="w-full border focus:outline-none focus:border-orange-500" />
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#e36c28] text-white px-6 py-2 cursor-pointer hover:bg-orange-400 mt-8"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div >

      <section className="bg-slate-800 text-white text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Build the Future With Us</h2>
        <p className="mb-6">Join our team and help ignite the torch of learning in young minds.</p>
        <a
          href="#apply"
          className="bg-[#e36c28] text-white px-6 py-3 rounded font-semibold hover:bg-gray-900"
        >
          Apply Today
        </a>
      </section>
      <FinalFooter />
    </main>
    </div>
  );
}
