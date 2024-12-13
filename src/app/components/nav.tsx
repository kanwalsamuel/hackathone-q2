


"use client";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
        {/* Left Section: Search Icon */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="/search" aria-label="Search">
            <FaSearch className="text-[#22202E] hidden sm:block" size={16} />
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex items-center justify-center w-full sm:w-auto sm:justify-center">
          <p
            className="text-[#22202E] font-[Clash Display] text-[20px] sm:text-[24px] leading-[30px] text-center"
            style={{ letterSpacing: "0.5px" }}
          >
            Avion
          </p>
        </div>

        {/* Right Section: Shopping Cart and User Avatar */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="/cart" aria-label="Shopping Cart">
            <FaShoppingCart className="text-black" size={14} />
          </a>
          <a href="/profile" aria-label="User Profile">
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <FaUser className="text-black" size={14} />
            </div>
          </a>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="flex items-center sm:hidden">
          <FaBars
            className="text-[#22202E] cursor-pointer"
            size={24}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Bottom Section: Navigation Links for Small Screens */}
      {menuOpen && (
        <div className="w-full sm:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg z-10">
          {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery", "About"].map(
            (link, index) => (
              <Link
                key={index}
                href={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-[#726E8D] text-[14px] sm:text-[16px] font-[Satoshi] hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)} // Close menu after link click
              >
                {link}
              </Link>
            )
          )}
        </div>
      )}

      {/* Bottom Section: Navigation Links for Large Screens */}
      <div className="w-full hidden sm:flex justify-center space-x-6 sm:space-x-8 mt-4 sm:mt-auto py-4 sm:h-[50px]">
        {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery", "About"].map(
          (link, index) => (
            <Link
              key={index}
              href={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-[#726E8D] text-[14px] sm:text-[16px] font-[Satoshi] hover:text-black transition-colors"
            >
              {link}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
