// import React from "react";
// import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa"; // Import icons

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#4E4D93] text-white py-8 w-[1440px] h-[380px] ml-52">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Menu Section */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Menu</h4>
//           <ul className="space-y-2">
//             <li>New arrivals</li>
//             <li>Best sellers</li>
//             <li>Recently viewed</li>
//             <li>Popular this week</li>
//             <li>All products</li>
//           </ul>
//         </div>

//         {/* Categories Section */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Categories</h4>
//           <ul className="space-y-2">
//             <li>Crockery</li>
//             <li>Furniture</li>
//             <li>Homeware</li>
//             <li>Plant pots</li>
//             <li>Chairs</li>
//           </ul>
//         </div>

//         {/* Our Company Section */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Our company</h4>
//           <ul className="space-y-2">
//             <li>About us</li>
//             <li>Vacancies</li>
//             <li>Contact us</li>
//             <li>Privacy</li>
//             <li>Returns policy</li>
//           </ul>
//         </div>

//         {/* Mailing List Section */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Join our mailing list</h4>
//           <form className="flex flex-col sm:flex-row gap-2">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               className="w-full px-4 py-2 rounded bg-[#2A254B] text-white focus:outline-none"
//               aria-label="Email address"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-white text-[#2a254b]"
//             >
//               Sign up
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center pl-4">
//         <p className="text-sm pl-3">Copyright © 2022 Avion LTD</p>
//         <div className="flex space-x-4 mt-4 md:mt-0 text-[18px] pr-8">
//           <button className="text-white font-satoshi" aria-label="LinkedIn">
//             <FaLinkedin />
//           </button>
//           <button className="text-white font-satoshi" aria-label="Facebook">
//             <FaFacebook />
//           </button>
//           <button className="text-white font-satoshi" aria-label="Instagram">
//             <FaInstagram />
//           </button>
//           <button className="text-white font-satoshi" aria-label="Skype">
//             <FaSkype />
//           </button>
//           <button className="text-white font-satoshi" aria-label="Twitter">
//             <FaTwitter />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-12 bg-[#2A254B] mt-12'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1><Link href={'/about'}>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;