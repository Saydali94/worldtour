import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPlaneDeparture,
  FaSearch,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [navbarData, setNavbarData] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 10 && searchOpen) setSearchOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    const stored = localStorage.getItem("navbarData");
    if (stored) {
      try {
        setNavbarData(JSON.parse(stored));
      } catch {
        console.warn("⚠️ Navbar maʼlumotlarini o‘qishda xato.");
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchOpen]);

  const menuItems =
    navbarData?.menuItems?.length > 0
      ? navbarData.menuItems.map((item) => ({
          label: item.title,
          path: item.link,
          subItems: item.subItems || [],
        }))
      : [
          { label: t("home"), path: "/" },
          { label: t("about"), path: "/about" },
          { label: t("destination"), path: "/all/destinations" },
          { label: t("tour"), path: "/tours" },
          { label: t("blog"), path: "/blog" },
          { label: t("contact"), path: "/contact" },
        ];

  const logo = navbarData?.logo || null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`🔍 ${t("searchingFor")}: ${searchQuery}`);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#001b44]/80 backdrop-blur-md shadow-md top-0"
          : "bg-transparent top-[40px]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* 🔹 Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-bold text-2xl"
        >
          {logo ? (
            <img
              src={logo}
              alt="Logo"
              className="h-10 object-contain rounded-md"
            />
          ) : (
            <>
              <FaPlaneDeparture className="text-blue-400 text-3xl" />
              Altours
            </>
          )}
        </Link>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group pb-4" // 🔹 pastga joy qoldiramiz
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)} // faqat cursor butunlay chiqqanda yopiladi
            >
              {item.subItems && item.subItems.length > 0 ? (
                <>
                  <span className="cursor-pointer hover:text-blue-400 transition">
                    {item.label}
                  </span>

                  <AnimatePresence>
                    {hoveredMenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 top-full bg-[#001b44]/95 mt-3 rounded-md shadow-lg z-20 py-2 min-w-[190px]"
                        onMouseEnter={() => setHoveredMenu(index)}
                        onMouseLeave={() => setHoveredMenu(null)} // 🔹 menyuda bo‘lganda yopilmaydi
                      >
                        {item.subItems.map((sub, j) => (
                          <Link
                            key={j}
                            to={sub.link}
                            className="block px-5 py-2 text-base hover:bg-blue-600/40 hover:text-white transition"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-blue-400 ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}

          {/* 🔍 Qidiruv ikonkasi */}
          <li className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white text-xl hover:text-blue-400 transition"
            >
              <FaSearch />
            </button>

            {/* 🔹 Animatsiyali Qidiruv input */}
            <AnimatePresence>
              {searchOpen && (
                <motion.form
                  onSubmit={handleSearch}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-3 flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white px-2 py-1 outline-none text-base"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
                  >
                    {t("search")}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </li>

          {/* 🔘 Book now */}
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow-md text-base transition">
              {t("bookNow")}
            </button>
          </li>
        </ul>

        {/* 🔹 Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001b44]/80 backdrop-blur-md text-white px-6 py-6 space-y-4 shadow-lg text-lg">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems && item.subItems.length > 0 ? (
                <details>
                  <summary className="cursor-pointer hover:text-blue-400">
                    {item.label}
                  </summary>
                  <div className="ml-3 mt-2 space-y-2">
                    {item.subItems.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.link}
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-blue-400 transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}

          {/* 🔍 Mobil qidiruv */}
          <form
            onSubmit={handleSearch}
            className="flex gap-2 items-center bg-white/10 p-2 rounded-md"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white text-base"
            />
            <button type="submit" className="text-white">
              <FaSearch />
            </button>
          </form>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-md text-base transition"
          >
            {t("bookNow")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
