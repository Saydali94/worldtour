// src/main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./i18n";

// Asosiy sayt
import App from "./App.jsx";

// Admin sahifalari
import "./i18n"; // 🔹 I18n ni yuklash
import TopbarEditor from "./pages/Admin/Editor/TopbarEditor.jsx";
import Login from "./pages/Admin/Login.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import HeroEditor from "./pages/Admin/Editor/HeroEditor.jsx";
import DestinationsEditor from "./pages/Admin/Editor/DestinationsEditor.jsx";
import HeroEditorWithPreview from "./pages/Admin/Editor/HeroEditorWithPreview.jsx";
import NavbarEditor from "./pages/Admin/Editor/NavbarEditor.jsx";
import ServicesEditor from "./pages/Admin/Editor/ServicesEditor.jsx";
import DealsEditor from "./pages/Admin/Editor/DealsEditor.jsx";
import TestimonialsEditor from "./pages/Admin/Editor/TestimonialsEditor.jsx";
import BlogEditor from "./pages/Admin/Editor/BlogEditor.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import FooterEditor from "./pages/Admin/Editor/FooterEditor.jsx";

// 🔒 Admin kirganligini tekshiruvchi funksiya
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

// 🔹 AOS'ni faqat bir marta ishga tushiradigan asosiy komponent
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 Foydalanuvchi qismi */}
        <Route path="/*" element={<App />} />

        {/* 🔐 Admin login */}
        <Route path="/admin/login" element={<Login />} />

        {/* 🔄 /admin ni dashboardga yo‘naltirish */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

        {/* ⚙️ Admin panel sahifalari */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/hero"
          element={
            <ProtectedRoute>
              <HeroEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/navbar"
          element={
            <ProtectedRoute>
              <NavbarEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/topbar"
          element={
            <ProtectedRoute>
              <TopbarEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/hero-live"
          element={
            <ProtectedRoute>
              <HeroEditorWithPreview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/destinations"
          element={
            <ProtectedRoute>
              <DestinationsEditor />
            </ProtectedRoute>
          }
          />
          <Route
           path="/admin/editor/services"
           element={
            <ProtectedRoute>
             <ServicesEditor />
           </ProtectedRoute>
          }
        />
          <Route
           path="/admin/editor/deals"
           element={
            <ProtectedRoute>
             <DealsEditor />
           </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/testimonials"
          element={
            <ProtectedRoute>
              <TestimonialsEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editor/blog"
          element={
            <ProtectedRoute>
              <BlogEditor />
            </ProtectedRoute>
         }
        />
        <Route
          path="/blog/:slug"
           element={
           <SingleBlog />
        }
         />
         <Route
           path="/admin/editor/footer"
            element={
           <ProtectedRoute>
            <FooterEditor />
           </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
};

// ⚙️ React Root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
