


"use client";
import { useState } from "react";

import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
        {/* Left Section: Hamburger Icon on small screens */}
        <div className="flex items-center sm:hidden">
          <FaBars className="text-[#22202E]" size={24} onClick={toggleMenu} />
        </div>

        {/* Center Section: Logo */}
        <div className="flex items-center justify-center w-full sm:justify-start">
          <p
            className="text-[#22202E] font-[Clash Display] text-[20px] sm:text-[24px] leading-[30px] text-center sm:text-left"
            style={{ letterSpacing: "0.5px" }}
          >
            Avion
          </p>
        </div>

        {/* Right Section: Search Icon and User Avatar */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <FaSearch className="text-[#22202E] hidden sm:block" size={16} />
          <FaShoppingCart className="text-black" size={14} />
          <div className="w-[32px] h-[32px] flex items-center justify-center">
            <FaUser className="text-black" size={14} />
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation Links for Small Screens */}
      <div
        className={`w-full sm:hidden flex flex-col items-center space-y-4 py-4 transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {[
          "Plant Pots",
          "Ceramics",
          "Tables",
          "Chairs",
          "Crockery",
          "Tableware",
          "Cutlery",
        ].map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-[#726E8D] text-[14px] sm:text-[16px] font-[Satoshi] hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu after link click
          >
            {link}
          </a>
        ))}
      </div>

      {/* Bottom Section: Navigation Links for Large Screens */}
      <div className="w-full hidden sm:flex justify-center space-x-6 sm:space-x-8 mt-4 sm:mt-auto py-4 sm:h-[50px]">
        {[
          "Plant Pots",
          "Ceramics",
          "Tables",
          "Chairs",
          "Crockery",
          "Tableware",
          "Cutlery",
        ].map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-[#726E8D] text-[14px] sm:text-[16px] font-[Satoshi] hover:text-black transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
