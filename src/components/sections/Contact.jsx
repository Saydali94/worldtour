import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-10" data-aos="fade-up">
          Get in Touch
        </h2>
        <form
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <div className="mb-4">
            <label className="block text-slate-700 mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-700 mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-700 mb-2 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
