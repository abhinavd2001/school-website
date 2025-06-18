'use client';

import { Mail } from 'lucide-react'
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
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight text-center px-4 py-2">
                    Why<span className="text-[#e36c28]"> Us </span>
                </h1>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mx-5 md:mx-18 my-8 md:my-14">
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
            <div className="bg-white/95 px-6 md:px-12 py-4 md:py-8 mb-5">
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
                                🏔️ Unique Himalayan Advantage
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed">
                                Serene Learning Environment Located on Mussoorie Road, Dehradun, our campus offers
                                Fresh mountain air that enhances cognitive function and concentration
                                Peaceful surroundings away from urban distractions
                                Natural inspiration from the majestic Himalayan foothills
                                Safe and secure environment in one of India's most beautiful hill stations
                                Cultural Heritage Integration
                                Deep connection with Uttarakhand's rich traditions
                                Celebration of local festivals and customs
                                Himalayan values of resilience, determination, and respect for nature
                                Multicultural exposure while maintaining Indian roots
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">📚 Academic Superiority</h3>
                            <p className="text-md text-gray-700 leading-relaxed">
                               Innovative Curriculum Design
                                25,000+ pages of carefully crafted interactive content
                                Application-based learning that connects theory to real-world scenarios
                                Project-based education that develops critical thinking skills
                                Technology integration with Smart Boards in every classroom Personalized Learning Approach Individual pace
                                learning - no child left behind, no gifted child held back
                                Daily skill assessments to track and enhance progress
                                Scientific analysis of each student's strengths and areas for improvement
                                Customized guidance for future academic and career choices
                                Experience the difference at Himalayan Torchbearers  Where Excellence Meets Tradition, and Dreams Take Flight!
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
