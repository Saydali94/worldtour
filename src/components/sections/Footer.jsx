import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-6 mt-10 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
        <p>© 2025 Altours. All rights reserved.</p>
        <p className="text-sm mt-2">
          Designed with ❤️ by <span className="text-teal-500">Your Team</span>
        </p>
      </div>
    </footer>
  );
}
