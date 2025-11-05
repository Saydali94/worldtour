import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaTree,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t, i18n } = useTranslation(); // ✅ i18n ni bu yerda olish kerak
  const [data, setData] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");

  // 🔹 LocalStorage'dan ma'lumot va tilni yuklash
  useEffect(() => {
    const stored = localStorage.getItem("topbarData");
    if (stored) setData(JSON.parse(stored));

    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      setSelectedLang(savedLang);
      i18n.changeLanguage(savedLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🔹 Til o‘zgartirish
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    localStorage.setItem("selectedLanguage", lang);
    i18n.changeLanguage(lang);
  };

  // 🔹 Default qiymatlar
  const siteName = data?.siteName || "Altours Travel Agency";
  const phone = data?.phone || "+998 90 123 45 67";
  const email = data?.email || "info@altours.com";
  const bgColor = data?.bgColor || "#001b44";
  const textColor = data?.textColor || "#ffffff";
  const social = data?.social || {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };

  // 🔹 Tillar ro‘yxati (admin paneldan yoki default)
  const languages = data?.languages || [
    "en", "uz", "ru", "de", "fr", "es", "it", "tr", "zh", "ja"
  ];

  return (
    <div
      className="text-sm py-2 flex items-center z-50 relative"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* 🔹 Chap tomon */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <FaTree className="text-green-400" /> {siteName}
          </span>
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-400" /> {phone}
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope className="text-blue-400" /> {email}
          </span>
        </div>

        {/* 🔹 O‘ng tomon */}
        <div className="flex items-center gap-5">
          {/* Ijtimoiy tarmoqlar */}
          <div className="flex gap-3">
            <a href={social.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            </a>
            <a href={social.twitter} target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            </a>
          </div>

          {/* Tillar tanlash */}
          <div className="flex items-center gap-2 border-l pl-3 border-white/30">
            <FaGlobe />
            <select
              value={selectedLang}
              onChange={handleLanguageChange}
              className="bg-transparent text-white border border-white/50 px-2 py-1 rounded-md focus:outline-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="text-black">
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
