'use client'

import React from 'react';
import { VscRemove } from 'react-icons/vsc';
import './map.css';

const Map = () => {
    return (
        <div className="relative flex bg-slate-950 min-h-screen min-w-screen items-center justify-center">
            <div className='absolute grid grid-cols-1 md:grid-cols-2 gap-0 h-8/9 md:h-4/5 w-4/5'>

                <div className="relative h-full w-full z-40 bg-slate-800/50 content-center justify-center font-open-sans overflow-hidden">
                    <div className="text-center">
                        <span className="text-blue-300 text-lg font-medium tracking-wider uppercase">
                            A Truly
                        </span>
                        <h1 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-2">
                            Exceptional
                        </h1>
                        <h1 className="text-2xl md:text-4xl font-bold text-[#e36c28] mt-2">
                            Campus
                        </h1>
                        <VscRemove
                            color="white"
                            size={60}
                            className='justify-self-center h-5 w-15 md:h-auto md-w-auto'
                        />
                        <p className="block text-gray-300 text-sm md:text-base leading-relaxed mt-3 md:mt-5 md-text-wrap px-4 md:px-15">
                            Our picturesque school campus is conveniently
                            located 30 minutes from Dehradun and 40 minutes from Mussorie, with
                            easy access to City Center.
                        </p>
                    </div>
                </div>
                <div  className='relative flex min-h-75 w-full border-2 border-slate-600 items-center justify-center bg-[url(/map.png)] bg-scroll bg-center bg-cover'>
                <div className="absolute size-4 bg-[#e36c28] rounded-full z-40"></div>
                <div id='dot' className="absolute size-4 bg-radial from-orange-300 from-100% border-4 border-orange-200 rounded-full z-10"></div>
                </div>
            </div>
        </div>
    )
};

export default Map;
