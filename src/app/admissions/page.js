'use client';

import FinalFooter from "@/components/finalfooter/Finalfooter";
import Header from "@/components/header/Header";
import Image from 'next/image';

export default function Admissions() {

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
          Join<span className="text-[#e36c28]"> Himalyan </span>Torchbearers
        </h1>
      </div>
      <section className="py-14">
        <div className="w-full h-full px-4 md:px-10">
          <p className="text-3xl text-slate-900 text-center md:text-start px-4 md:px-15 text-bold uppercase">List Of required Documents</p>
          <div className="relative my-2 mx-15 flex justify-center before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-full before:h-px before:bg-slate-900">
          </div>
          <div className="px-10 md:px-20 py-10 md:py-17 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white">
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
      <div className="py-5 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose HIMALYAN?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Torch of Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              Instilling discipline and leadership for a brighter future.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Modern Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              Smart classrooms, labs, and sports facilities.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Holistic Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Academics, arts, athletics, and character-building programs.
            </p>
          </div>
        </div>
      </div>

      <div className="py-5 lg:py-10 px-5 lg:px-25 mx-5 lg:mx-50">
        <div className="py-8 px-8 md:px-20 border-2 border-slate-900">
          <div className="bg-slate-900 flex flex-col mb-4">
            <div className="flex flex-row px-5 py-4 justify-between">
              <div className="flex-1 text-white text-center text-2xl uppercase">
                Admission Enquiry
              </div>
            </div>
            <div className="relative w-0 left-0 right-0 mx-auto z-40 before:content-[''] before:absolute before:top-[calc(100%-10px)] before:border-b-[12px] before:border-b-white before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent"></div>
          </div>
          <form>
            <label className="block mb-1 font-lg">Student's Name</label>
            <input type="text" className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
            <label className="block mb-1 font-lg">Class Applying For</label>
            <select className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500">
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
            <label className="block mb-1 font-lg">Parent's Mobile Number</label>
            <input type="tel" className="w-full border px-4 py-2 mb-3 focus:outline-none focus:border-orange-500" />
            <label className="block mb-1 font-lg">Message</label>
            <textarea required="" className="w-full border px-4 py-2 mb-3 h-24 min-h-11 focus:outline-none focus:border-orange-500"></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#e36c28] text-white px-6 py-2 cursor-pointer hover:bg-orange-400"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
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
