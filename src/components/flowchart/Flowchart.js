'use client';

import React, { useState, useEffect } from 'react';

const Flowchart = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const learningLevels = [
    {
      id: 1,
      title: "Foundation Level",
      description: "Start your journey with basic concepts and fundamental principles. Build a strong foundation that will support your advanced learning.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Intermediate Level",
      description: "Expand your knowledge with more complex topics and practical applications. Connect the dots between different concepts.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Level",
      description: "Master advanced techniques and dive deep into specialized areas. Develop expertise through hands-on projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Expert Level",
      description: "Become a subject matter expert with cutting-edge knowledge and the ability to innovate and lead others.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const timelineContainer = document.querySelector('.timeline-container');
      
      if (!timelineContainer) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const simpleProgress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setScrollProgress(simpleProgress);
        
        const slideIndex = Math.floor(simpleProgress * learningLevels.length);
        setActiveSlide(Math.min(Math.max(0, slideIndex), learningLevels.length - 1));
        return;
      }

      // Get timeline container dimensions
      const rect = timelineContainer.getBoundingClientRect();
      const containerTop = rect.top + scrollTop;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Timeline boundaries
      const timelineStart = containerTop - windowHeight * 0.5;
      const timelineEnd = containerTop + containerHeight - windowHeight * 0.3;
      const timelineScrollableHeight = Math.max(100, timelineEnd - timelineStart);

      // Calculate progress
      const relativeScroll = scrollTop - timelineStart;
      const progress = Math.max(0, Math.min(1, relativeScroll / timelineScrollableHeight));
      setScrollProgress(progress);

      // Activate cards at specific progress percentages: 11%, 37%, 63%, 89%
      const activationPoints = [0.15, 0.40, 0.65, 0.91];
      let newActiveSlide = -1;

      // Check which card should be active based on current progress
      for (let i = 0; i < activationPoints.length; i++) {
        const activationPoint = activationPoints[i];
        const tolerance = 0.05; // 10% tolerance zone around each activation point
        
        if (Math.abs(progress - activationPoint) <= tolerance) {
          newActiveSlide = i;
          break;
        }
      }

      setActiveSlide(newActiveSlide);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial call
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timer);
    };
  }, [learningLevels.length]);

  return (
    <div className="min-h-screen bg-white relative">
      <div className="relative w-full h-30 md:h-40 flex items-center justify-center bg-slate-900">
        <h1 className="text-2xl md:text-5xl font-bold text-white tracking-wide leading-tight text-center px-4 py-2">
          The Himalyan <span className="text-[#e36c28]">Learnings</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-20 px-4">

        {/* Timeline Progress Bar */}
        <div className="relative timeline-container">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 md:transform md:-translate-x-1/2 z-20">
            <div
              className="w-full bg-slate-900 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Progress Indicator */}
            <div
              className="absolute w-4 h-4 bg-slate-900 border-2 border-white rounded-full shadow-lg transition-all duration-300 ease-out"
              style={{
                top: `${scrollProgress * 100}%`,
                left: '-6px',
                transform: 'translateY(-50%)'
              }}
            />
          </div>

          {learningLevels.map((level, index) => (
            <div key={level.id} className="relative mb-12 last:mb-0 ">
              {/* Timeline Node - positioned at vertical center of card */}
              <div className="absolute left-8.5 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div
                  className={`size-6 rounded-full border-4 border-white transition-all duration-500 shadow-lg ${index === activeSlide ? 'bg-slate-900 scale-110' : 'bg-gray-400'
                    }`}
                />
              </div>

              {/* Content Card */}
              <div className={`flex ml-20 md:ml-0 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'md:mr-5' : 'md:ml-5'}`}>
                  <div
                    className={`timeline-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${index === activeSlide
                      ? 'opacity-100 translate-y-0 scale-105'
                      : 'opacity-60 translate-y-4 scale-100'
                      }`}
                  >
                    {/* Card Content */}
                    <div className="flex flex-col md:flex-row">
                      {/* Mobile: Always image first, then content */}
                      {/* Desktop: Alternate based on index */}
                      <div className="block md:hidden">
                        {/* Mobile Layout */}
                        <div className="w-full h-48 rounded-t-xl overflow-hidden">
                          <img
                            src={level.image}
                            alt={level.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {level.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {level.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:flex w-full">
                        {index % 2 === 0 ? (
                          // Right side cards: Content left, Image right
                          <>
                            <div className="flex-1 p-6">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {level.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {level.description}
                              </p>
                            </div>
                            <div className="w-48 h-48 rounded-r-xl overflow-hidden flex-shrink-0">
                              <img
                                src={level.image}
                                alt={level.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                          </>
                        ) : (
                          // Left side cards: Image left, Content right
                          <>
                            <div className="w-48 h-48 rounded-l-xl overflow-hidden flex-shrink-0">
                              <img
                                src={level.image}
                                alt={level.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                            <div className="flex-1 p-6">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {level.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {level.description}
                              </p>
                            </div>
                          </>
                        )}
                      </div>  
                    </div>    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Flowchart;