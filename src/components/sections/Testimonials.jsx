import React from "react";

const testimonials = [
  {
    name: "Anna Johnson",
    text: "Altours made my honeymoon in Bali absolutely magical! Everything was perfectly arranged.",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Smith",
    text: "Professional service, friendly staff, and great prices. Highly recommend Altours!",
    image:
      "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sofia Martinez",
    text: "Our trip to Paris was unforgettable thanks to Altours’ amazing planning and support.",
    image:
      "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-6">
          What Our Clients Say
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 mb-12">
          We’re proud to have thousands of happy travelers around the globe.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-slate-600 mb-3">“{t.text}”</p>
              <h4 className="font-semibold text-slate-800">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
