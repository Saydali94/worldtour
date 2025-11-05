import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";

const HeroEditor = () => {
  const [slides, setSlides] = useState(
    JSON.parse(localStorage.getItem("heroSlides")) || [
      {
        image: "/assets/hero1.jpg",
        title: "Unveil Nature’s Hidden Wonders",
        subtitle:
          "Journey Into Landscapes, Where Majestic Cliffs And Serene Waterfalls Invite You For An Unforgettable Escape Into Nature.",
        button: "EXPLORE NOW",
      },
    ]
  );

  const handleChange = (index, field, value) => {
    const updated = [...slides];
    updated[index][field] = value;
    setSlides(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const updated = [...slides];
      updated[index].image = e.target.result;
      setSlides(updated);
    };
    reader.readAsDataURL(file);
  };

  const addSlide = () => {
    setSlides([
      ...slides,
      {
        image: "",
        title: "Yangi sarlavha",
        subtitle: "Bu joyga matn yozing",
        button: "BATAFSIL",
      },
    ]);
  };

  const removeSlide = (index) => {
    setSlides(slides.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    localStorage.setItem("heroSlides", JSON.stringify(slides));
    alert("✅ Hero section saqlandi!");
  };

  return (
    <AdminLayout>
      <div className="grid md:grid-cols-2 gap-8">
        {/* 🔹 Chap qism */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-blue-600">
            Hero Section sozlamalari
          </h2>

          {slides.map((slide, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg mb-4 bg-gray-50 dark:bg-slate-700"
            >
              <h3 className="font-semibold mb-2 text-blue-500">
                Slayd #{i + 1}
              </h3>

              <label className="block mb-2 text-sm font-medium">
                Rasmni yuklash:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(i, e.target.files[0])}
                className="mb-3"
              />

              {slide.image && (
                <img
                  src={slide.image}
                  alt="preview"
                  className="h-40 w-full object-cover rounded mb-3"
                />
              )}

              <input
                type="text"
                value={slide.title}
                onChange={(e) => handleChange(i, "title", e.target.value)}
                placeholder="Sarlavha"
                className="border p-2 rounded w-full mb-3"
              />

              <textarea
                value={slide.subtitle}
                onChange={(e) => handleChange(i, "subtitle", e.target.value)}
                placeholder="Matn"
                className="border p-2 rounded w-full mb-3"
                rows="3"
              ></textarea>

              <input
                type="text"
                value={slide.button}
                onChange={(e) => handleChange(i, "button", e.target.value)}
                placeholder="Tugma matni"
                className="border p-2 rounded w-full mb-3"
              />

              <button
                onClick={() => removeSlide(i)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                O‘chirish
              </button>
            </div>
          ))}

          <div className="flex gap-3">
            <button
              onClick={addSlide}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              ➕ Slayd qo‘shish
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              💾 Saqlash
            </button>
          </div>
        </div>

        {/* 🔹 O‘ng qism (ko‘rinish) */}
        <div className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-blue-600">Ko‘rinishi</h2>
          <div className="relative rounded overflow-hidden">
            {slides.length > 0 ? (
              <div className="relative">
                <img
                  src={slides[0].image}
                  alt="Preview"
                  className="w-full h-60 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {slides[0].title}
                  </h2>
                  <p className="text-sm mb-3">{slides[0].subtitle}</p>
                  <button className="bg-blue-600 px-4 py-2 rounded">
                    {slides[0].button}
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-400">Hech qanday slayd yo‘q</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default HeroEditor;
