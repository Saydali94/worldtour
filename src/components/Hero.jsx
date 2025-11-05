import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('/assets/hero.jpg')`, // ← admin paneldan dinamik o‘zgartiriladi
      }}
    >
      {/* 🔹 Qora shaffof qatlam */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* 🔹 Matnlar */}
      <div className="relative z-10 text-center px-4" data-aos="fade-up">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 uppercase tracking-widest mb-3"
        >
          Welcome To Altours
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Embark On Exquisite <br /> Trekking Journeys
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Traverse Trails From Forest Walks To Alpine Hikes For Authentic Trekking Experiences.
        </motion.p>

        <motion.a
          href="#destinations"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-block bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold hover:bg-blue-500 transition"
        >
          START YOUR JOURNEY
        </motion.a>
      </div>

      {/* 🔹 Pastdagi “Search Tours” form joylashuv joyi */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <div className="bg-[#01023a] rounded-t-2xl shadow-2xl p-6 w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap justify-center gap-4">
          <select className="bg-transparent border border-blue-500 rounded-md p-2 text-white w-40">
            <option>Destination</option>
          </select>
          <input
            type="text"
            placeholder="ДД.ММ.ГГГГ"
            className="bg-transparent border border-blue-500 rounded-md p-2 text-white w-40"
          />
          <select className="bg-transparent border border-blue-500 rounded-md p-2 text-white w-40">
            <option>Duration</option>
          </select>
          <select className="bg-transparent border border-blue-500 rounded-md p-2 text-white w-40">
            <option>Tour Type</option>
          </select>
          <select className="bg-transparent border border-blue-500 rounded-md p-2 text-white w-40">
            <option>Activity</option>
          </select>
          <button className="bg-blue-600 px-5 py-2 rounded-md text-white font-semibold hover:bg-blue-500 transition">
            SEARCH TOURS
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
