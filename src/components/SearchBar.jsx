import React from "react";

export default function SearchBar() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="bg-[#000845] text-white p-6 rounded-2xl shadow-lg -mt-10 mx-auto max-w-6xl relative z-20"
    >
      <form className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <select data-aos="fade-up" data-aos-delay="100" className="bg-transparent border border-gray-500 p-3 rounded-lg">
          <option>Destination</option>
        </select>
        <input
          data-aos="fade-up"
          data-aos-delay="200"
          type="date"
          className="bg-transparent border border-gray-500 p-3 rounded-lg"
        />
        <select data-aos="fade-up" data-aos-delay="300" className="bg-transparent border border-gray-500 p-3 rounded-lg">
          <option>Duration</option>
        </select>
        <select data-aos="fade-up" data-aos-delay="400" className="bg-transparent border border-gray-500 p-3 rounded-lg">
          <option>Tour Type</option>
        </select>
        <input
          data-aos="fade-up"
          data-aos-delay="500"
          type="text"
          placeholder="Activity"
          className="bg-transparent border border-gray-500 p-3 rounded-lg"
        />
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-3 font-semibold w-full md:w-auto"
        >
          SEARCH TOURS
        </button>
      </form>
    </div>
  );
}
