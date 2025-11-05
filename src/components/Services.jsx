import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "Explore Our Services",
    mainTitle: "Our Travel Services",
  });

  useEffect(() => {
    const stored = localStorage.getItem("services");
    const storedTitles = localStorage.getItem("servicesTitles");
    const storedLimit = localStorage.getItem("servicesLimit");

    let parsed = [];
    if (stored) parsed = JSON.parse(stored);
    if (storedTitles) setTitles(JSON.parse(storedTitles));

    const limit = storedLimit ? parseInt(storedLimit) : 6;

    // faqat featured bo‘lganlar
    const featuredServices = parsed.filter((s) => s.featured).slice(0, limit);
    setServices(featuredServices);
  }, []);

  if (!services.length) return null; // hech narsa chiqarmaydi agar bo‘sh bo‘lsa

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center px-4">
        <h5 className="text-blue-500 uppercase tracking-wide font-semibold mb-1 md:mb-2">
          {titles.subtitle}
        </h5>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 md:mb-10">
          {titles.mainTitle}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-left border border-transparent hover:border-blue-200 transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {service.description?.length > 100
                  ? service.description.slice(0, 100) + "..."
                  : service.description || "Tavsif kiritilmagan"}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-bold text-lg">
                  ${service.price || 0}
                </span>
                <span className="text-sm text-gray-500">
                  {service.featured ? "⭐ Featured" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <Link
            to="/all/services"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
