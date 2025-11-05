import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import DealsSection from "../components/DealsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";

const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Topbar />
      <Navbar />
      <HeroSection />

      {/* 🔹 Destinations */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-[#f9f9fb] relative z-10">
        <Destinations />
      </section>

      {/* 🔸 Divider */}
      <div className="w-[85%] mx-auto h-[1px] bg-gray-200/60 my-3"></div>

      {/* 🔹 Services */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-white relative z-10">
        <Services />
      </section>

      {/* 🔸 Gradient separator */}
      <div className="h-[10px] bg-gradient-to-b from-transparent via-gray-200/30 to-transparent mx-auto w-[70%] rounded-full my-2"></div>

      {/* 🔹 Deals */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-[#f9fafc] relative z-10">
        <DealsSection />
      </section>

      {/* 🔸 Divider */}
      <div className="w-[85%] mx-auto h-[1px] bg-gray-200/60 my-3"></div>

      {/* 🔹 Testimonials */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-white relative z-10">
        <TestimonialsSection />
      </section>

      {/* 🔸 Gradient separator */}
      <div className="h-[10px] bg-gradient-to-b from-transparent via-gray-200/30 to-transparent mx-auto w-[70%] rounded-full my-2"></div>

      {/* 🔹 Blog */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-[#f9fafc] relative z-10">
        <BlogSection />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
