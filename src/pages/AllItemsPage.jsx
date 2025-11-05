import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllItemsPage = () => {
  const { type } = useParams(); // Masalan: /all/services yoki /all/destinations
  const [items, setItems] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "",
    mainTitle: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(type);
    const storedTitles = localStorage.getItem(`${type}Titles`);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setItems(parsed);
      } catch {
        console.error(`❌ ${type} ma’lumotlarini o‘qishda xato`);
      }
    }

    if (storedTitles) {
      try {
        setTitles(JSON.parse(storedTitles));
      } catch {
        console.error(`❌ ${type}Titles o‘qishda xato`);
      }
    }
  }, [type]);

  if (items.length === 0) {
    return (
      <div className="py-40 text-center bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-semibold text-gray-600">
          No {type} available yet.
        </h2>
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h5 className="text-blue-500 uppercase tracking-wide font-semibold mb-2">
            {titles.subtitle || `Explore Our ${type}`}
          </h5>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            {titles.mainTitle ||
              `${type.charAt(0).toUpperCase() + type.slice(1)} Collection`}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated list of {type}, carefully designed to make your
            travel experience truly unforgettable.
          </p>
        </div>

        {/* Kontent */}
        <div
          className={`grid ${
            type === "services"
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          } gap-8 justify-center`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-5 text-left border border-slate-100 hover:border-blue-200 transition group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {item.image && (
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              <h3 className="text-lg font-semibold text-blue-700 mb-1">
                {item.title}
              </h3>

              {/* Services uchun qo‘shimcha tavsif va narx */}
              {type === "services" ? (
                <>
                  <p className="text-sm text-slate-600 mb-3">
                    {item.description?.length > 120
                      ? item.description.slice(0, 120) + "..."
                      : item.description || "Tavsif mavjud emas"}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 font-bold text-lg">
                      ${item.price || 0}
                    </span>
                    {item.featured && (
                      <span className="text-yellow-500 text-sm font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Destination uchun joylashuv va tur soni */}
                  <p className="text-gray-500 text-sm">
                    {item.location || "—"}
                  </p>
                  {item.toursCount && (
                    <p className="text-sm text-blue-700 font-medium mt-1">
                      {item.toursCount} Tours Available
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllItemsPage;
