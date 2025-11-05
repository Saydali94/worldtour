import React, { useState, useEffect } from "react";
import HeroEditor from "./HeroEditor";

export default function HeroEditorWithPreview() {
  const [hero, setHero] = useState({});

  // Hero o‘zgarishlarini tinglash
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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ✏️ Chap: Editor qismi */}
      <div className="md:w-1/2 w-full border-r border-slate-300 dark:border-slate-700 overflow-y-auto">
        <HeroEditor />
      </div>

      {/* 👁️ O‘ng: Live preview qismi */}
      <div className="md:w-1/2 w-full bg-slate-100 dark:bg-slate-900 flex justify-center items-center">
        <iframe
          src="/"
          title="Live Preview"
          className="w-full h-screen border-0 shadow-2xl rounded-none"
        ></iframe>
      </div>
    </div>
  );
}
