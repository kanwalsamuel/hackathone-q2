



'use client';
import Image from 'next/image';
import React from 'react';

const Product = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-white px-4">
        <div className="text-[#2A254B] w-full max-w-7xl">

          {/* Flexbox layout: Stack on small screens, side by side on medium and large screens */}
          <div className="grid grid-cols lg:grid-cols-4 gap-6  gap-y-6 mt-8">


            
            {/* Product 1 */}
            <div className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={'/images/Parent (3).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className="p-4">
                <p className="text-lg  text-[#2A254B]">The Dandy chair</p>
                <p className="text-lg text-[#2A254B]">$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={'/images/Parent (1).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className="p-4">
                <p className="text-lg  text-[#2A254B]">The Grey Vase</p>
                <p className="text-lg text-[#2A254B]">$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={'/images/Parent (4).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className="p-4">
                <p className="text-lg  text-[#2A254B]">The Dandy chair</p>
                <p className="text-lg  text-[#2A254B]">$250</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={'/images/Parent (2).png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover'
              />
              <div className="p-4">
                <p className="text-lg  text-[#2A254B]">The Dandy chair</p>
                <p className="text-lg text-[#2A254B] mb-4">$250</p>
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default Product;




