import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";

const FooterEditor = () => {
  const [footerData, setFooterData] = useState({
    companyName: "Altours",
    tagline: "Explore breathtaking destinations with our curated tours.",
    address: "Altours Agency, Evergreen Forest Escape",
    phone: "+123-456-7890",
    email: "info@example.com",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    copyright: "© Altours 2025 All Rights Reserved",
  });

  // 🔹 LocalStorage’dan yuklash
  useEffect(() => {
    const stored = localStorage.getItem("footerData");
    if (stored) setFooterData(JSON.parse(stored));
  }, []);

  // 🔹 Input o‘zgarishi
  const handleChange = (key, value) => {
    setFooterData((prev) => ({ ...prev, [key]: value }));
  };

  // 🔹 Saqlash
  const saveFooter = () => {
    localStorage.setItem("footerData", JSON.stringify(footerData));
    alert("✅ Footer ma’lumotlari saqlandi!");
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">⚙️ Footer Editor</h2>

        <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow border border-slate-200">
          {/* Chap tomonda kompaniya ma’lumotlari */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Kompaniya nomi
            </label>
            <input
              type="text"
              value={footerData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Tagline (qisqa tavsif)
            </label>
            <textarea
              rows="2"
              value={footerData.tagline}
              onChange={(e) => handleChange("tagline", e.target.value)}
              className="w-full border rounded p-2 mb-4 resize-none"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Manzil
            </label>
            <input
              type="text"
              value={footerData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Telefon raqami
            </label>
            <input
              type="text"
              value={footerData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">Email</label>
            <input
              type="email"
              value={footerData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />
          </div>

          {/* O‘ng tomonda ijtimoiy tarmoqlar */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Facebook havolasi
            </label>
            <input
              type="text"
              value={footerData.facebook}
              onChange={(e) => handleChange("facebook", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Twitter havolasi
            </label>
            <input
              type="text"
              value={footerData.twitter}
              onChange={(e) => handleChange("twitter", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Instagram havolasi
            </label>
            <input
              type="text"
              value={footerData.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              LinkedIn havolasi
            </label>
            <input
              type="text"
              value={footerData.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2 font-semibold text-slate-700">
              Copyright matni
            </label>
            <input
              type="text"
              value={footerData.copyright}
              onChange={(e) => handleChange("copyright", e.target.value)}
              className="w-full border rounded p-2 mb-4"
            />
          </div>
        </div>

        {/* Tugma */}
        <div className="mt-6">
          <button
            onClick={saveFooter}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold"
          >
            💾 Saqlash
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default FooterEditor;
