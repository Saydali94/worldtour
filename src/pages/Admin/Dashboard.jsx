import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import { LayoutDashboard, Settings, Edit, MapPin, Newspaper, Image, Star, PenTool, Globe } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  // 🔹 Menyular ro‘yxati
  const menus = [
    { title: "Topbar Editor", icon: <Settings size={22} />, path: "/admin/editor/topbar" },
    { title: "Navbar Editor", icon: <LayoutDashboard size={22} />, path: "/admin/editor/navbar" },
    { title: "Hero Editor", icon: <Image size={22} />, path: "/admin/editor/hero" },
    { title: "Destinations Editor", icon: <MapPin size={22} />, path: "/admin/editor/destinations" },
    { title: "Services Editor", icon: <PenTool size={22} />, path: "/admin/editor/services" },
    { title: "Deals Editor", icon: <Star size={22} />, path: "/admin/editor/deals" },
    { title: "Testimonials Editor", icon: <Globe size={22} />, path: "/admin/editor/testimonials" },
    { title: "Blog Editor", icon: <Newspaper size={22} />, path: "/admin/editor/blog" },
    { title: "Footer Editor", icon: <Edit size={22} />, path: "/admin/editor/footer" },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Altours Admin Panel</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Quyidagi bo‘limlardan sayt tarkibini tahrirlashingiz mumkin.
        </p>
      </div>

      {/* Statistikalar (namuna sifatida) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Destinations", value: "12", color: "bg-blue-500" },
          { title: "Blog Posts", value: "8", color: "bg-green-500" },
          { title: "Active Deals", value: "5", color: "bg-purple-500" },
          { title: "Testimonials", value: "23", color: "bg-orange-500" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl shadow-md text-white ${stat.color} transition hover:shadow-lg hover:-translate-y-1`}
          >
            <h3 className="text-sm uppercase tracking-wide opacity-80">{stat.title}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Asosiy menyular */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer border border-transparent hover:border-blue-400 flex items-center gap-4"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-700 group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-300 text-sm">
                Tahrirlash uchun bosing
              </p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
