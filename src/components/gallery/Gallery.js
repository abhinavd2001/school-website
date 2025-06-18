"use client";

import React from "react";

const galleryData = [
  {
    id: "campus",
    title: "CAMPUS",
    description:
      "Twelve acres of sprawling, green and eco-friendly campus including an outdoor amphitheatre, sporting facilities, performance area, a Pre-School activity centre and spaces that lend themselves to effective teaching and learning. A world-class, state of the art infrastructure including Smart boards in all classrooms, Math lab, Science labs, Computer Labs and modern cafeteria are provided to make our campus a happy and productive space. The campus is fortified with numerous strategically located CCTV cameras, making the school a safe haven for all students.",
    image: "/gallery1.jpg",
    overlayColor: "bg-green-500",
  },
  {
    id: "culture",
    title: "CULTURE",
    description:
      "India is a country of diverse cultures. The languages, religions, dance, music, architecture, food, and customs differ from place to place in our country. We at School Of India celebrate every Indian festival in an open, inclusive and informative way with the spirit of unity which instils a sense of pride about the country in our children. We encourage students to stay rooted to their heritage and strengthen familial bonds. Our students remain rooted in our culture, with a broad and positive outlook becoming truly Global Indizens.",
    image: "/gallery2.jpg",
    overlayColor: "bg-blue-600",
  },
  {
    id: "community",
    title: "COMMUNITY",
    description:
      "Our students actively participate in community service projects including collection drives, awareness campaigns about going green, plantation drives, sessions on traffic regulations, dignity of labour, visiting old age homes as well as orphanages, supporting another child in their education, visits to post offices, police stations, etc. Sharing of knowledge and values is a social activity that is promoted. Students are encouraged to take up social causes in their neighbourhood.",
    image: "/gallery3.jpg",
    overlayColor: "bg-purple-600",
  },
  {
    id: "curriculum",
    title: "CURRICULUM",
    description:
      "We believe in a global approach to being truly Indian. We teach our students about the contributions of Indians in different areas of study as part of the syllabus. We add to our online source book on India titled Indipedia where our students and teachers share knowledge and achievements of Indians and the wisdom and culture of India. We are extremely proud of the invaluable contributions made by Indians to the world, and we are inspired by them.",
    image: "/gallery4.jpg",
    overlayColor: "bg-[#e36c28]",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      <div className="relative w-full h-30 md:h-40 flex items-center justify-center bg-slate-900">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight text-center px-4 py-2">
          The 4 C's of <span className="text-[#e36c28]">Himalyan Torchbearers</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 h-[calc(100vh-4rem)]">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden shadow-lg transform transition-transform duration-500 group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-auto pt-28 md:pt-40"
            />
            <div className={`absolute inset-0 ${item.overlayColor} bg-opacity-90 text-white transition-all duration-500 ease-in-out h-28 md:h-40 group-hover:h-full overflow-hidden z-10`}>
              <div className="pt-6 md:pt-10 px-3 md:px-6 relative">
                <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-6">{item.title}</h3>
                <div className="relative my-2 flex justify-center before:content-[''] before:absolute before:left-7 before:top-[11px] before:w-15 before:h-1 before:bg-white">
                </div>
              </div>
              <div className="px-3 md:px-8 pt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;