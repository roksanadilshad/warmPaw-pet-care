import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#8D77AB] to-[#5E548E] text-white lg:pt-10 pb-6">
      <div className="w-11/12 mx-auto ">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <img
              src="https://templates.sparklethings.com/opet/wp-content/uploads/sites/133/2025/10/logo-opet.png"
              alt="WarmPaws Logo"
              className="w-28 h-auto"
            />
            <p className="text-gray-200 max-w-xs">
              WarmPaws - Keeping your pets warm, safe, and stylish with love.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-8">
            <nav className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <Link
                to="/contactUs"
                className="hover:text-[#FFC4C4] transition-colors"
              >
                Contact Info
              </Link>
              <Link
                to="/about"
                className="hover:text-[#FFC4C4] transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-200 text-sm">
          <p>© {new Date().getFullYear()} WarmPaws. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
