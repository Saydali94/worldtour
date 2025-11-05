import React, { useEffect, useState } from "react";

export default function Hero() {
  const [hero, setHero] = useState({
    title: "Welcome to Altours",
    subtitle: "Discover your next adventure",
    buttonText: "Search Tours",
    buttonLink: "/tours",
    background: "",
  });

  // LocalStorage’dan o‘qish
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("hero"));
    if (saved) setHero(saved);
  }, []);

  // 🔔 Admin paneldan kelgan real-time o‘zgarishlarni eshitish
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "UPDATE_HERO") {
        setHero(event.data.payload);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${hero.background || "/default-hero.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4 transition-all duration-200">{hero.title}</h1>
        <p className="text-lg mb-6 transition-all duration-200">{hero.subtitle}</p>
        <a
          href={hero.buttonLink}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          {hero.buttonText}
        </a>
      </div>
    </section>
  );
}
