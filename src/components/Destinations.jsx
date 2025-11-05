import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "Explore Our Adventure Destinations",
    mainTitle: "Our Destinations",
  });
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    // LocalStorage'dan ma’lumotlarni yuklash
    const storedDestinations = localStorage.getItem("destinations");
    const storedTitles = localStorage.getItem("destinationsTitles");
    const storedLimit = localStorage.getItem("destinationsLimit");

    if (storedDestinations) {
      setDestinations(JSON.parse(storedDestinations));
    }
    if (storedTitles) {
      setTitles(JSON.parse(storedTitles));
    }
    if (storedLimit) {
      setLimit(parseInt(storedLimit));
    }
  }, []);

  // Faqat "featured" belgilangan va limitgacha bo‘lganlarini olish
  const visibleDestinations = destinations
    .filter((d) => d.featured)
    .slice(0, limit);

  // Agar hech narsa yo‘q bo‘lsa
  if (visibleDestinations.length === 0) {
    return (
      <div className="py-12 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-500">
          Destinations hali qo‘shilmagan.
        </h2>
      </div>
    );
  }

  return (
    <section
      className="pt-8 pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50 to-white"
      id="destinations"
    >
      <div className="container mx-auto px-4 text-center">
        {/* 🔹 Sarlavhalar */}
        <h5 className="text-blue-600 uppercase tracking-widest font-semibold mb-1 md:mb-2">
          {titles.subtitle}
        </h5>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8">
          {titles.mainTitle}
        </h2>

        {/* 🔹 Destination kartalari */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {visibleDestinations.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* overlay matn */}
              <div className="absolute bottom-4 left-4 text-left text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 mb-2">{item.location}</p>
                <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-md shadow">
                  {item.toursCount} Tours
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 VIEW ALL tugmasi */}
        <div className="mt-8 md:mt-10">
          <Link
            to="/all/destinations"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            VIEW ALL DESTINATIONS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
