'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const FinalFooter = () => {
     const router = useRouter();

     const handleClick = () => {
     router.push('/privacy-policy');
     };
     const handleClick2 = () => {
     router.push('/terms&conditions');
     };
    return (
        <footer className="bg-white mt-auto my-2 md:my-4 font-open-sans">
            <div className="container mx-auto px-2 flex flex-wrap h-fit">
                <div className='flex flex-col md:flex-row w-full h-fit border-b-2 border-gray-300 my-4 md:my-14 mx-10 xl:mx-14 pb-16'>
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2 text-gray-800">Contact Us</h3>
                        <div className="text-gray-600 text-lg md:text-md mb-6 text-wrap pr-4">
                            <p>Kuthalgate, Mussoorie Road, Rajpur-248009,</p>
                            <p>Dehradun Uttarakhand India</p>
                        </div>
                        <div className="text-gray-600 text-lg md:text-md">
                            <p className="mb-2">
                                <strong>Email Address</strong>:{' '}
                                <a
                                    href="mailto:hello@htbacademy.org"
                                    className="text-[#e36c28] hover:text-slate-900 transition-colors"
                                >
                                    hello@htbacademy.org
                                </a>
                            </p>
                            <p>
                                <strong>Telephone No</strong>:{' '}
                                <a
                                    href="tel:9837189132"
                                    className="text-[#e36c28] hover:text-slate-900 transition-colors"
                                >
                                    8755735050
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 flex-1 justify-center md:justify-around mt-6 lg-mt-0 max-h-fit">
                        <div className="flex flex-col space-y-2 text-lg md:text-md h-fit">
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/why"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Why Himalyan Torchbearers
                            </Link>
                            <Link
                                href="/admissions"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Admissions
                            </Link>
                            <a
                                href="/gallery2.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Download Brochure
                            </a>
                        </div>
                        <div className="flex flex-col space-y-2 text-lg md:text-md justify-self-center h-fit">
                            <Link
                                href="/careers"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Careers
                            </Link>
                            <Link
                                 href="/transport-policy"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Transport Policy
                            </Link>
                            <Link
                                 href="/refund-policy"
                                className="text-gray-600 hover:text-[#e36c28] transition-colors"
                            >
                                Refund Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center item-center my-5 md:my-8">
                    <div className="flex text-3xl">
                        <Link
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 mx-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="https://api.whatsapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 mx-2 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                        >
                            <FaWhatsapp />
                        </Link>
                        <Link
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 grid-flow-col justify-center items-center text-gray-600 text:xs md:text-sm">
                    <button onClick={handleClick} className="hover:text-[#e36c28] transition-colors md:justify-self-end">Privacy Policy</button>
                    <span className='text-center col-span-2 md:col-span-1'>
                        @Copyright {new Date().getFullYear()} Himalayan Torchbearers
                    </span>
                    <button onClick={handleClick2} className="hover:text-[#e36c28] transition-colors md:justify-self-start">Terms & Conditions</button>
                </div>
            </div>
        </footer>
    );
};

export default FinalFooter;