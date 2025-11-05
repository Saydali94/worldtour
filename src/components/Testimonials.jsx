import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United Kingdom",
      text: "Altours made my Bali trip absolutely unforgettable! Everything was organized perfectly.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmed Khan",
      country: "UAE",
      text: "I loved how smooth the booking process was. Highly recommend Altours for family vacations.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Petrova",
      country: "Russia",
      text: "The Maldives tour was beyond my expectations. Amazing service and great attention to detail!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900 text-center" id="testimonials">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <p
          className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Real experiences from travelers who explored the world with us 🌍
        </p>

        {/* ✅ TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
              />
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                {review.name}
              </h3>
              <p className="text-sm text-blue-500 mb-3">{review.country}</p>

              <div className="flex justify-center mb-4 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
