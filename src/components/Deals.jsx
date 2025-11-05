import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import turkey from "../assets/turkey.jpg";
import japan from "../assets/japan.jpg";
import dubai from "../assets/dubai.jpg";

export default function Deals() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const deals = [
    {
      id: 1,
      name: "Istanbul Getaway",
      image: turkey,
      price: "$499",
      duration: "5 Days / 4 Nights",
      details: "Explore the vibrant culture and rich history of Istanbul.",
    },
    {
      id: 2,
      name: "Tokyo Adventure",
      image: japan,
      price: "$899",
      duration: "7 Days / 6 Nights",
      details: "Discover the futuristic beauty and ancient traditions of Japan.",
    },
    {
      id: 3,
      name: "Luxury Dubai Trip",
      image: dubai,
      price: "$699",
      duration: "4 Days / 3 Nights",
      details: "Experience the luxury lifestyle and desert adventures in Dubai.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900 text-center" id="deals">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4"
          data-aos="fade-up"
        >
          Top Deals & Offers
        </h2>
        <p
          className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Don’t miss our limited-time travel packages — crafted just for you ✈️
        </p>

        {/* ✅ DEALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-56 object-cover transform transition duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {deal.duration}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                  {deal.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{deal.details}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{deal.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
