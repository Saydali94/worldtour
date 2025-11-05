import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

export default function Blog() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const blogs = [
    {
      id: 1,
      title: "10 Tips for Stress-Free Travel",
      author: "Emily Carter",
      date: "October 25, 2025",
      image: blog1,
      excerpt:
        "Plan ahead, pack smart, and embrace spontaneity — your next adventure awaits stress-free!",
    },
    {
      id: 2,
      title: "The Best Beaches in the World",
      author: "Michael Roberts",
      date: "September 12, 2025",
      image: blog2,
      excerpt:
        "From the Maldives to Bali, discover the most breathtaking beaches to add to your travel list.",
    },
    {
      id: 3,
      title: "How to Travel on a Budget",
      author: "Anna Kim",
      date: "August 9, 2025",
      image: blog3,
      excerpt:
        "You don’t have to be rich to see the world — here’s how to save money while exploring new places.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 text-center" id="blog">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4"
          data-aos="fade-up"
        >
          Blog & Travel Tips
        </h2>
        <p
          className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Stay inspired and informed with our latest travel articles 🌍
        </p>

        {/* ✅ BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div
              key={post.id}
              className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-blue-500 mb-2">
                  By {post.author} • {post.date}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
