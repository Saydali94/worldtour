import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Destinations() {
  const places = [
    {
      id: 1,
      title: "Paris, France",
      img: "/images/paris.jpg",
      desc: "The city of lights and romance, full of art and history.",
    },
    {
      id: 2,
      title: "Bali, Indonesia",
      img: "/images/bali.jpg",
      desc: "A tropical paradise with beaches, temples, and adventures.",
    },
    {
      id: 3,
      title: "New York, USA",
      img: "/images/newyork.jpg",
      desc: "The city that never sleeps, full of culture and diversity.",
    },
  ];

  return (
    <section
      id="destinations"
      className="py-16 bg-white dark:bg-slate-900 text-center text-slate-800 dark:text-slate-200"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-8 text-teal-600"
          data-aos="fade-up"
        >
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {places.map((place) => (
            <div
              key={place.id}
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
            >
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
