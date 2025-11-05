import React, { useState, useEffect } from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const TopbarEditor = () => {
  const [data, setData] = useState({
    siteName: "Altours Travel Agency",
    phone: "+998 90 123 45 67",
    email: "info@altours.com",
    bgColor: "#001b44",
    textColor: "#ffffff",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    languages: ["en", "uz", "ru", "de", "fr", "es", "it", "tr", "zh", "ja"],
  });

  const [newLang, setNewLang] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("topbarData");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (!parsed.languages)
        parsed.languages = ["en", "uz", "ru", "de", "fr", "es", "it", "tr", "zh", "ja"];
      setData(parsed);
    }
  }, []);

  const handleChange = (key, value) => setData({ ...data, [key]: value });

  const handleSocialChange = (platform, value) => {
    setData({
      ...data,
      social: { ...data.social, [platform]: value },
    });
  };

  const addLanguage = () => {
    const lang = newLang.trim().toLowerCase();
    if (!lang) return alert("Til nomini kiriting!");
    if (data.languages.includes(lang)) return alert("Bu til allaqachon mavjud!");
    setData({ ...data, languages: [...data.languages, lang] });
    setNewLang("");
  };

  const deleteLanguage = (lang) => {
    setData({
      ...data,
      languages: data.languages.filter((l) => l !== lang),
    });
  };

  const saveAll = () => {
    localStorage.setItem("topbarData", JSON.stringify(data));
    alert("✅ Topbar ma’lumotlari saqlandi!");
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">🌍 Topbar Editor</h2>

        {/* Asosiy sozlamalar */}
        <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow border border-slate-200">
          <div>
            <label className="block mb-2 font-semibold">Sayt nomi</label>
            <input
              value={data.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold">Telefon</label>
            <input
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold">Email</label>
            <input
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold">Fon rangi</label>
            <input
              type="color"
              value={data.bgColor}
              onChange={(e) => handleChange("bgColor", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold">Matn rangi</label>
            <input
              type="color"
              value={data.textColor}
              onChange={(e) => handleChange("textColor", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />
          </div>

          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Ijtimoiy tarmoqlar</h3>
            {Object.keys(data.social).map((key) => (
              <div key={key} className="mb-3">
                <label className="block mb-1 capitalize">{key}</label>
                <input
                  type="text"
                  value={data.social[key]}
                  onChange={(e) => handleSocialChange(key, e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Tillar */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow border border-slate-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">🌐 Tillar ro‘yxati</h3>

          <div className="flex flex-wrap gap-3 mb-4">
            {(data.languages || []).map((lang) => (
              <span
                key={lang}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
              >
                {lang.toUpperCase()}
                <button
                  onClick={() => deleteLanguage(lang)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Yangi til (masalan: ar, kr, pl...)"
              value={newLang}
              onChange={(e) => setNewLang(e.target.value)}
              className="border rounded p-2 w-60"
            />
            <button
              onClick={addLanguage}
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              ➕ Qo‘shish
            </button>
          </div>
        </div>

        {/* Saqlash tugmasi */}
        <div className="mt-6">
          <button
            onClick={saveAll}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold"
          >
            💾 Saqlash
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TopbarEditor;
