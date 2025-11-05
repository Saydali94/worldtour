import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          © {new Date().getFullYear()} <span className="text-teal-400">Altours</span>. All rights reserved.
        </p>
        <p className="text-sm text-slate-400">
          Built with ❤️ using React + TailwindCSS
        </p>
      </div>
    </footer>
  );
}
