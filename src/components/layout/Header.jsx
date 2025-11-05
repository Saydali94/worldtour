import React from "react";
import heroImage from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white dark:text-slate-100"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Explore the World with <span className="text-amber-400">Altours</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-8">
          Discover amazing destinations and unforgettable experiences.
        </p>
        <a
          href="#destinations"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
