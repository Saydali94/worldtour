import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      const parsed = JSON.parse(stored);
      const found = parsed.find(
        (b) =>
          b.title?.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
      );
      setBlog(found);
    }
  }, [slug]);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Blog topilmadi 😕
      </div>
    );

  return (
    <>
      <Navbar />

      {/* Hero qismi — rasmdagi kabi */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {blog.title}
          </motion.h1>
          <p className="text-sm opacity-80">
            {blog.date
              ? new Date(blog.date).toLocaleDateString()
              : "—"}{" "}
            | {blog.author || "Muallif noma’lum"}
          </p>
        </div>
      </div>

      {/* Asosiy kontent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
          <motion.div
            className="text-gray-700 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">{blog.description}</p>

            {blog.fullContent ? (
              <div
                dangerouslySetInnerHTML={{ __html: blog.fullContent }}
                className="prose max-w-none"
              />
            ) : (
              <p className="italic text-gray-500">
                Maqolaning to‘liq matni hali kiritilmagan.
              </p>
            )}
          </motion.div>

          {blog.link && (
            <div className="mt-10">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                To‘liq maqolani o‘qish →
              </a>
            </div>
          )}

          <div className="mt-12">
            <Link
              to="/all/blogs"
              className="text-blue-600 hover:underline font-semibold"
            >
              ← Barcha maqolalarga qaytish
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleBlog;
