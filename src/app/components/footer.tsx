import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState(""); // Email state
  const [message, setMessage] = useState(""); // To display success or error messages

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    
    // Example: Submit to an API or service like Mailchimp (replace with actual functionality)
    try {
      // Assuming you have a backend or API to handle email submission
      const res = await fetch('/api/subscribe', { // Replace with your actual API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Reset email field
      } else {
        setMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      setMessage("Error submitting the email, please try again.");
    }
  };

  return (
    <>
      <div className='px-6 md:px-12 py-12 bg-[#2A254B] mt-12'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold font-clash">Menu</h1>
            <div className='space-y-2 font-clash'>
              <h1><Link href={'/newarrivals'}>New Arrivals</Link></h1>
              <h1><Link href={'/bestSeller'}>Best sellers</Link></h1>
              <h1><Link href={'/products'}>Recently viewed</Link></h1>
              <h1><Link href={'/category/crockery'}>Popular this week</Link></h1>
              <h1><Link href={'/products'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold font-satoshi">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/category/crockery'}>Crockery</Link></h1>
              <h1><Link href={'/product'}>Furniture</Link></h1>
              <h1><Link href={'/product'}>Homeware</Link></h1>
              <h1><Link href={'/category/plant-pots'}>Plant pots</Link></h1>
              <h1><Link href={'/category/chairs'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold font-clash">Our Company</h1>
            <div className="space-y-2 font-satoshi">
              <p>
                <Link href="/about">
                  <span className="text-white hover:text-gray-400 cursor-pointer">About Us</span>
                </Link>
              </p>
              <p>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-400 cursor-pointer">Vacancies</span>
                </Link>
              </p>
              <p>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-400 cursor-pointer">Contact Us</span>
                </Link>
              </p>
              <p>
                <Link href="/privacy">
                  <span className="text-white hover:text-gray-400 cursor-pointer">Privacy Policy</span>
                </Link>
              </p>
              <p>
                <Link href="/return">
                  <span className="text-white hover:text-gray-400 cursor-pointer">Return Policy</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold font-satoshi">Join our mailing list</h1>
            <div className='mt-4'>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
                />
                <button type="submit" className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                  Sign up
                </button>
              </form>
              {/* Display Success or Error Message */}
              {message && <p className="text-white mt-2">{message}</p>}
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4 font-clash'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
  <Link href={'https://www.linkedin.com/in/kanwal-samuel'}>
    <FaLinkedin size={20} />
  </Link>
  <Link href={'https://www.linkedin.com/in/kanwal-samuel'}> 
    <FaFacebookSquare size={20} />
  </Link>
  <Link href={' https://www.linkedin.com/in/kanwal-samuel'}> 
    <FaInstagram size={20} />
  </Link>
  <Link href={'//www.linkedin.com/in/kanwal-samuel'}> 
    <IoLogoSkype size={20} />
  </Link>
  <Link href={'   https://www.linkedin.com/in/kanwal-samuel'}> 
    <FaTwitter size={20} />
  </Link>
  <Link href={'https://www.linkedin.com/in/kanwal-samuel'}> 
    <FaPinterest size={20} />
  </Link>
</div>

          
        </div>
      </div>
    </>
  );
};

export default Footer;
