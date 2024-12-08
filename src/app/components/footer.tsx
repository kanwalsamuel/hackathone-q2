import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4E4D93] text-white py-8 w-[1440px] h-[380px] ml-52">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Join our mailing list</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded bg-[#2A254B] text-white focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#2a254b]"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center pl-4">
        <p className="text-sm pl-3">Copyright © 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-[18px] pr-8">
          <button className="text-white font-satoshi" aria-label="LinkedIn">
            <FaLinkedin />
          </button>
          <button className="text-white font-satoshi" aria-label="Facebook">
            <FaFacebook />
          </button>
          <button className="text-white font-satoshi" aria-label="Instagram">
            <FaInstagram />
          </button>
          <button className="text-white font-satoshi" aria-label="Skype">
            <FaSkype />
          </button>
          <button className="text-white font-satoshi" aria-label="Twitter">
            <FaTwitter />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
