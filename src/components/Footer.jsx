import React, { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("footerData");
    if (stored) setFooter(JSON.parse(stored));
  }, []);

  return (
    <footer className="bg-[#001b44] text-white pt-10 pb-10 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{footer.companyName}</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">{footer.tagline}</p>
          <p className="flex items-center gap-2 text-gray-300">
            <i className="fa fa-map-marker text-blue-400"></i> {footer.address}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <i className="fa fa-phone text-blue-400"></i> {footer.phone}
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <i className="fa fa-envelope text-blue-400"></i> {footer.email}
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-4">
            {footer.facebook && (
              <a
                href={footer.facebook}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded hover:bg-blue-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {footer.twitter && (
              <a
                href={footer.twitter}
                target="_blank"
                rel="noreferrer"
                className="bg-sky-400 w-8 h-8 flex items-center justify-center rounded hover:bg-sky-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {footer.instagram && (
              <a
                href={footer.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 w-8 h-8 flex items-center justify-center rounded hover:bg-pink-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {footer.linkedin && (
              <a
                href={footer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-700 w-8 h-8 flex items-center justify-center rounded hover:bg-blue-600"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            All Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Tour Packages</li>
            <li>• Hotel Booking</li>
            <li>• Flight Booking</li>
            <li>• Airport Transfers</li>
            <li>• Visa Assistance</li>
            <li>• Travel Insurance</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• About Us</li>
            <li>• Destinations</li>
            <li>• Tours</li>
            <li>• Blogs</li>
            <li>• Shop</li>
            <li>• Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Stay informed about our newest tours, travel deals, adventure trips,
            and special discounts by joining our newsletter.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="✉ Your Email Address"
              className="p-2 w-full rounded-l-lg text-gray-800 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-500 px-4 rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-600 text-center py-3 mt-10 text-sm">
        {footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
