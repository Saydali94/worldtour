import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  // 🔹 Sidebar menyular ro‘yxati
  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "Topbar Editor", path: "/admin/editor/topbar" },
    { title: "Navbar Editor", path: "/admin/editor/navbar" },
    { title: "Hero Editor", path: "/admin/editor/hero" },
    { title: "Destinations Editor", path: "/admin/editor/destinations" },
    { title: "Services Editor", path: "/admin/editor/services" },
    { title: "Deals Editor", path: "/admin/editor/deals" },
    { title: "Blog Editor", path: "/admin/editor/blog" },
    { title: "Testimonials Editor", path: "/admin/editor/testimonials" },

    // ✅ Yangi Footer Editor
    { title: "Footer Editor", path: "/admin/editor/footer" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* 🔹 Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-[#001b44] text-white flex flex-col shadow-xl transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
          <h1
            className={`font-bold text-lg transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            Altours Admin
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md hover:bg-white/10 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-800 hover:translate-x-1"
                }`}
              >
                {isOpen ? (
                  <span>{item.title}</span>
                ) : (
                  <div
                    className="w-full text-center text-sm"
                    title={item.title}
                  >
                    •
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* 🔹 Logout */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
          >
            <LogOut size={18} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>

        {/* 🔹 Footer (pastdagi bo‘sh joyni to‘ldiramiz) */}
        <div className="text-center text-xs py-3 border-t border-white/10 text-gray-400">
          © 2025 Altours Admin
        </div>
      </aside>

      {/* 🔹 Content qismi */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 min-h-[85vh]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
