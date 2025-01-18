

"use client";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../../context/cartContext"; // Import the cart context

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cart", href: "/cart" },
  { label: "Products", href: "/products" },
  { label: "Plant Pots", href: "/" },
  { label: "Ceramics", href: "/" },
  { label: "Tables", href: "/" },
  { label: "Chairs", href: "/" },
  { label: "Crockery", href: "/" },
  { label: "Tableware", href: "/" },
  { label: "Cutlery", href: "/" },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); // Get cart items from context

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in cart

  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="/search" aria-label="Search">
            <FaSearch className="text-[#22202E] hidden sm:block" size={16} />
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <p className="text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center" style={{ letterSpacing: "0.5px" }}>
            Avion
          </p>
        </div>

        {/* Right Section: Shopping Cart and User Avatar */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="/cart" aria-label="Shopping Cart">
            <div className="relative">
              <FaShoppingCart className="text-black" size={14} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {cartItemCount}
                </span>
              )}
            </div>
          </a>
          <a href="/profile" aria-label="User Profile">
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <FaUser className="text-black" size={14} />
            </div>
          </a>
        </div>

        <div className="flex items-center sm:hidden absolute left-4">
          <FaBars className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg" size={24} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full sm:hidden flex flex-col items-start space-y-4 py-4 bg-white shadow-lg z-10 border-t border-gray-400">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-[#726E8D] text-[14px] md:text-[16px] font-sathoshi hover:text-black transition-colors px-4 py-2 w-full text-left" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="w-full hidden sm:flex md:flex flex-wrap justify-center space-x-6 md:space-x-8 mt-4 md:mt-auto py-4 sm:h-[50px]">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="text-[#726E8D] text-[14px] sm:text-[16px] font-sathoshi hover:text-black transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
