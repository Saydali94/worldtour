import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("heroSlides"));
    if (savedSlides && savedSlides.length > 0) {
      setSlides(savedSlides);
    } else {
      setSlides([
        {
          image: "/assets/hero1.jpg",
          title: "Indulge In Premium Camping Escapades",
          subtitle:
            "Immerse Yourself In Tailor-Made Camping Adventures, Designed For Those Who Seek Tranquility Under Starlit Skies.",
          button: "DISCOVER MORE",
        },
        {
          image: "/assets/hero2.jpg",
          title: "Discover Breathtaking Treks",
          subtitle:
            "From Forest Trails To Alpine Peaks — Adventure Awaits At Every Step.",
          button: "START YOUR JOURNEY",
        },
        {
          image: "/assets/hero3.jpg",
          title: "Find Serenity In The Mountains",
          subtitle:
            "Reconnect With Nature, Relax Your Mind, And Explore The Beauty Of The Wild.",
          button: "BOOK YOUR TOUR",
        },
      ]);
    }
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const auto = setInterval(nextSlide, 6000);
    return () => clearInterval(auto);
  }, [current, slides]);

  if (slides.length === 0) return null;

  return (
    <section className="relative min-h-[70vh] flex items-center pt-[80px] overflow-hidden">
      {/* 🔹 Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* --- TEXT BLOCK (ozgina yuqoriroq) --- */}
      <motion.div
        key={`text-${current}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 text-left max-w-3xl px-8 md:px-16 -mt-10"
      >
        <div className="bg-black/35 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          <h5 className="text-blue-400 uppercase tracking-wide mb-2 font-semibold">
            Welcome To Altours
          </h5>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            {slides[current].title}
          </h1>
          <p className="text-gray-100 font-medium mb-6 leading-relaxed text-lg">
            {slides[current].subtitle}
          </p>
          <a
            href="#destinations"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold inline-block text-white shadow-lg transition"
          >
            {slides[current].button}
          </a>
        </div>
      </motion.div>

      {/* --- ARROWS --- */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full transition z-10"
      >
        <FaChevronLeft className="text-2xl text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full transition z-10"
      >
        <FaChevronRight className="text-2xl text-white" />
      </button>

      {/* --- SEARCH FORM (ozgina pastroqda, ikki qatorli) --- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-4 w-full flex justify-center z-10"
      >
        <div className="bg-[#001b44]/95 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-6 w-[95%] md:w-[85%] flex flex-wrap justify-center gap-4 border border-white/10">
          {/* 1-qator */}
          <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
            <select className="bg-white/10 border border-white/30 rounded-lg p-3 text-white w-40 md:w-48 text-sm md:text-base focus:ring-2 focus:ring-blue-400 outline-none">
              <option className="text-black">Destination</option>
            </select>

            <input
              type="text"
              placeholder="Departure Date"
              className="bg-white/10 border border-white/30 rounded-lg p-3 text-white w-40 md:w-48 placeholder:text-white/70 text-sm md:text-base focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <select className="bg-white/10 border border-white/30 rounded-lg p-3 text-white w-40 md:w-48 text-sm md:text-base focus:ring-2 focus:ring-blue-400 outline-none">
              <option className="text-black">Duration</option>
            </select>

            <select className="bg-white/10 border border-white/30 rounded-lg p-3 text-white w-40 md:w-48 text-sm md:text-base focus:ring-2 focus:ring-blue-400 outline-none">
              <option className="text-black">Tour Type</option>
            </select>
          </div>

          {/* 2-qator */}
          <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Min Price"
              className="bg-white/10 border border-white/30 rounded-lg p-3 text-white w-40 md:w-48 placeholder:text-white/70 text-sm md:text-base focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-500 px-6 md:px-8 py-3 rounded-lg text-white font-semibold shadow-md transition text-sm md:text-base">
              SEARCH TOURS
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
