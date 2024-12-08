

import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] bg-white flex flex-col md:flex-row items-center px-6 py-12 pl-60"  >
      {/* Content Section (Left) */}
      <div className="w-full md:w-[536px] h-auto flex flex-col items-start justify-start gap-6 md:mr-12 mb-10 md:mb-0">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[30px] md:text-[30px] font-normal text-[#2A254B] font-[Clash Display] mb-6">
          From a studio in London to a global brand with over 400 outlets
        </h2>
  
        {/* Description */}
        <p className="text-[14px] sm:text-[16px] md:text-[16px] text-[#505977] leading-[1.5] mb-8">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br />
          <br />
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our.
        </p>

        {/* Button */}
        <button
          className="w-[150px] h-[56px] bg-[#F4F4F6] text-[#2A254B] text-[14px] sm:text-[16px] font-medium rounded-md shadow-lg hover:bg-[#EAEAF2] transition duration-300 flex items-center justify-center"
        >
          Get in Touch
        </button>
      </div>

      {/* Image Section (Right) */}
      <div className="w-full md:w-[720px] h-auto flex-shrink-0">
        <Image
          src="/images/Image (4).png" // Replace with your image path
          alt="Feature Image"
          width={720} // Set explicit width
          height={603} // Set explicit height
          className="object-cover w-full h-full" // Ensure it scales properly
        />
      </div>
    </section>
  );
};

export default Features;
