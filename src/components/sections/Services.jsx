import React from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Services() {
  const services = [
    {
      icon: <FaPlane className="text-teal-500 text-5xl mb-4" />,
      title: "Flight Booking",
      desc: "Book affordable and comfortable flights with ease.",
      aos: "fade-up",
    },
    {
      icon: <FaHotel className="text-teal-500 text-5xl mb-4" />,
      title: "Hotel Reservations",
      desc: "Find and book luxury or budget hotels in any destination.",
      aos: "fade-up",
    },
    {
      icon: <FaUmbrellaBeach className="text-teal-500 text-5xl mb-4" />,
      title: "Holiday Packages",
      desc: "Enjoy curated travel experiences tailored for you.",
      aos: "fade-up",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-teal-50 dark:from-slate-900 dark:to-slate-800 py-20"
      id="services"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-10"
          data-aos="zoom-in"
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos}
              className="p-8 rounded-2xl shadow-lg bg-white dark:bg-slate-900 hover:shadow-xl transition"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
