import React, { useEffect, useState } from "react";

const DealsSection = () => {
  const [deals, setDeals] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "Best Offers For You",
    mainTitle: "Special Deals & Discounts",
  });

  useEffect(() => {
    const stored = localStorage.getItem("deals");
    const storedTitles = localStorage.getItem("dealsTitles");
    const storedLimit = localStorage.getItem("dealsLimit");

    if (stored) {
      try {
        let parsed = JSON.parse(stored);
        parsed = parsed.filter((d) => d.featured);
        const limit = storedLimit ? parseInt(storedLimit) : 6;
        setDeals(parsed.slice(0, limit));
      } catch (e) {
        console.error("❌ Deals ma’lumotlarini o‘qishda xato:", e);
      }
    }

    if (storedTitles) {
      try {
        setTitles(JSON.parse(storedTitles));
      } catch {
        console.warn("⚠️ Deals titles parse xato bo‘ldi");
      }
    }
  }, []);

  // 🔹 Countdown hisoblash
  const calculateTimeLeft = (expiryDate) => {
    const difference = new Date(expiryDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  if (!deals || deals.length === 0) return null;

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-blue-500 uppercase tracking-wide font-semibold mb-1 md:mb-2">
          {titles.subtitle || "Best Offers For You"}
        </h5>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 md:mb-10">
          {titles.mainTitle || "Special Deals & Discounts"}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => {
            const timeLeft = deal.expiryDate
              ? calculateTimeLeft(deal.expiryDate)
              : null;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200"
              >
                <div className="relative">
                  {deal.image && (
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
                    SALE
                  </div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">
                    {deal.title || "Unnamed Deal"}
                  </h3>

                  {deal.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {deal.description}
                    </p>
                  )}

                  <div className="flex items-baseline gap-3 mb-4">
                    {deal.discountPrice ? (
                      <>
                        <span className="text-xl font-bold text-green-600">
                          ${deal.discountPrice}
                        </span>
                        <span className="text-sm line-through text-gray-400">
                          ${deal.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-xl font-bold text-blue-600">
                        ${deal.price}
                      </span>
                    )}
                  </div>

                  {/* 🔹 Countdown ko‘rsatish */}
                  {timeLeft ? (
                    <div className="bg-blue-50 text-blue-800 rounded-lg px-3 py-2 mb-4 text-sm font-semibold">
                      ⏰ Tugashiga:{" "}
                      {`${timeLeft.days} kun ${timeLeft.hours} soat ${timeLeft.minutes} daqiqa ${timeLeft.seconds} soniya`}
                    </div>
                  ) : (
                    deal.expiryDate && (
                      <div className="bg-red-100 text-red-600 rounded-lg px-3 py-2 mb-4 text-sm font-semibold">
                        ❌ Aksiya muddati tugagan
                      </div>
                    )
                  )}

                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition">
                    View Deal
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
