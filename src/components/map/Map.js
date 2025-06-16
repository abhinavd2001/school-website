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
                        <span className="text-blue-300 text-xl font-medium tracking-wider uppercase">
                            A Truly
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-1">
                            Exceptional
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#e36c28] mt-1">
                            Campus
                        </h1>
                        <VscRemove
                            color="white"
                            size={60}
                            className='justify-self-center h-10 w-30 md:h-auto md-w-auto'
                        />
                        <p className="block text-gray-300 text-base md:text-lg leading-relaxed mt-1 md:mt-3 md-text-wrap px-6">
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
