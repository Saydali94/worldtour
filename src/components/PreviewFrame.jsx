import React from "react";

const PreviewFrame = ({ children }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 rounded-2xl border border-gray-300 shadow-inner">
      <h3 className="text-center text-gray-600 mb-2 font-semibold">
        Ko‘rinishi
      </h3>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {children}
      </div>
    </div>
  );
};

export default PreviewFrame;
