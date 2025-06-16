'use client';

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Flowchart from "@/components/flowchart/Flowchart";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { useState } from "react";
import Gallery from "@/components/gallery/Gallery";
import Map from "@/components/map/Map";
import FinalFooter from "@/components/finalfooter/Finalfooter";

const images = [
  { src: '/image1.jpg' , rsz: '/image1rsz.jpg' },
  { src: '/image2.jpg' , rsz: '/image2rsz.jpg' },
  { src: '/image3.jpg' , rsz: '/image3rsz.jpg' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <div className="w-full min-w-full overflow-x-hidden scroll-smooth">
      <div className="min-h-screen relative">
        <div className="absolute inset-0 w-full z-0">
          <ImageSlider
            nextSlide={nextSlide}
            currentIndex={currentIndex}
            images={images}
          />
        </div>
        <div className="relative z-50">
          <Header />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Footer
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </div>
      </div>
        <Flowchart />
        <Gallery />
        <Map />
        <FinalFooter />
    </div>
  );
}