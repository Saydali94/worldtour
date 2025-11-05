import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [titles, setTitles] = useState({
    subtitle: "Travel Tips & News",
    mainTitle: "Our Blog",
  });

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    const storedTitles = localStorage.getItem("blogsTitles");
    const storedLimit = localStorage.getItem("blogsLimit");

    if (stored) {
      try {
        let parsed = JSON.parse(stored);
        parsed = parsed.filter((b) => b.featured); // faqat tanlangan
        const limit = storedLimit ? parseInt(storedLimit) : 3;
        setBlogs(parsed.slice(0, limit));
      } catch (e) {
        console.error("❌ Blog ma’lumotlarini o‘qishda xato:", e);
      }
    }

    if (storedTitles) {
      try {
        setTitles(JSON.parse(storedTitles));
      } catch {
        console.warn("⚠️ Blog titles parse xato bo‘ldi");
      }
    }
  }, []);

  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-14 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h5
          className="text-blue-500 uppercase tracking-wide font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titles.subtitle}
        </motion.h5>
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titles.mainTitle}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={b.image}
                alt={b.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">
                  {b.date ? new Date(b.date).toLocaleDateString() : "—"} |{" "}
                  <span className="text-blue-600 font-medium">
                    {b.author || "Unknown"}
                  </span>
                </p>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {b.description?.length > 100
                    ? b.description.slice(0, 100) + "..."
                    : b.description}
                </p>
                <Link
                 to={`/blog/${b.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Ko'proq o'qish →
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/all/blogs"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            VIEW ALL BLOGS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
