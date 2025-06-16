"use client";
import { useEffect } from "react";
import Image from 'next/image';
import './imageSlider.css';

const ImageSlider=({nextSlide,images,currentIndex}) => {


  useEffect(() => {
      const interval = setInterval(() => {
       nextSlide();
      }, 6000); 
      return () => clearInterval(interval);
 
  },);

  return (
      <div className="absolute h-full w-full -z-10 overflow-hidden">
      <>
      <Image
        key={currentIndex} 
        src={images[currentIndex].src}
        alt={`Slider Image ${currentIndex + 1}`}
        id="imageSlider"
        layout="fill"
        objectFit="cover"
        className=" h-full w-full"
      />
      </>
      <>
      <Image
        key={currentIndex} 
        src={images[currentIndex].rsz}
        alt={`Slider Image ${currentIndex + 1}`}
        id="imageSlider"
        layout="fill"
        objectFit="cover"
        className="md:hidden h-full w-full"
      />
      </>
      </div>
  );
}

export default ImageSlider;