'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';
import FinalFooter from '@/components/finalfooter/Finalfooter';
import Header from '@/components/header/Header';
import Image from 'next/image';
import { HiOutlineReceiptRefund } from "react-icons/hi";

export default function RefundPolicy() {
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
                    Refund<span className="text-[#e36c28]"> Policy</span>
                </h1>
            </div>
            <div>
                <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5">
                    <div className="grid md:grid-cols-3 gap-8 m-4">
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">General Policy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                All fee payments made to the school are considered final. Parents are advised to review all
                                charges carefully before making any payments, as most fees are non-refundable unless stated
                                otherwise.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Eligible Refund Cases</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Refunds are only processed in exceptional cases such as overpayment, course cancellation by
                                the school, or administrative errors. Requests must include valid proof and are subject to
                                management approval.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-slate-900">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Final Decision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The final decision regarding any refund rests solely with the school administration. The
                                school reserves the right to update the policy without prior notice.
                            </p>
                        </div>
                    </div>
                    <section className="m-4">
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-8 my-10">
                            <div className="flex items-start space-x-4">
                                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Important Refund Guidelines</h3>
                                    <div className="space-y-3 text-gray-700">
                                        <p>• <strong>Non-Refundable Fees:</strong> Registration, admission, and late payment fees are strictly non-refundable.</p>
                                        <p>• <strong>Refund Requests:</strong> Must be submitted in writing with valid receipts and supporting documents.</p>
                                        <p>• <strong>Processing Time:</strong> Approved refunds will be processed within 30 working days.</p>
                                        <p>• <strong>Payment Mode:</strong> Refunds are made through original payment methods or bank transfer only.</p>
                                        <p>• <strong>Changes to Policy:</strong> The school may update this policy at its discretion, and the latest version will be applicable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <section className="bg-slate-900 my-5 py-16 width-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <HiOutlineReceiptRefund className="w-20 h-20 mx-auto mb-6 text-white" />
                            <h2 className="text-4xl font-bold mb-4">Transparent & Fair Refund Policy</h2>
                            <p className="text-xl text-white max-w-3xl mx-auto">
                                We aim to maintain transparency and fairness in all financial matters. Our refund policy is
                                crafted to protect both the school and our valued parents while adhering to clear guidelines.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <FinalFooter />
        </div>
    );
}