import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "What Our Clients Say",
    mainTitle: "Customer Testimonials",
  });

  useEffect(() => {
    const stored = localStorage.getItem("testimonials");
    const storedTitles = localStorage.getItem("testimonialsTitles");
    const storedLimit = localStorage.getItem("testimonialsLimit");

    if (stored) {
      try {
        let parsed = JSON.parse(stored);
        parsed = parsed.filter((t) => t.featured);
        const limit = storedLimit ? parseInt(storedLimit) : 6;
        setTestimonials(parsed.slice(0, limit));
      } catch (e) {
        console.error("❌ Testimonials o‘qishda xato:", e);
      }
    }

    if (storedTitles) {
      try {
        setTitles(JSON.parse(storedTitles));
      } catch {
        console.warn("⚠️ Testimonials titles parse xato bo‘ldi");
      }
    }
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h5
          className="text-blue-500 uppercase tracking-wide font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {titles.subtitle || "What Our Clients Say"}
        </motion.h5>
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {titles.mainTitle || "Customer Testimonials"}
        </motion.h2>

        {/* ✅ SWIPER with 3D Coverflow + Navigation */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-white shadow-xl rounded-2xl p-8 md:p-10 mx-auto max-w-sm sm:max-w-md text-left border border-gray-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {t.name ? t.name.charAt(0) : "?"}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-blue-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  “{t.comment}”
                </p>

                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={
                        starIndex < (t.rating || 0)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
