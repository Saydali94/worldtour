import React from "react";
import aboutImage from "../../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function About() {
  return (
    <section
      className="bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-slate-800 py-20"
      id="about"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={aboutImage}
            alt="About Altours"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            About Altours
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Altours is your trusted travel partner, offering world-class tour
            packages, flights, and hotel bookings. We are passionate about
            helping you explore the world, experience new cultures, and create
            unforgettable memories.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            With a dedicated team and personalized services, we make your travel
            dreams come true — anywhere, anytime.
          </p>

          <a
            href="#services"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
