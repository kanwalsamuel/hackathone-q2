


import React from 'react';
import Card from './card';

const Products: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] bg-white flex flex-col items-center px-6 py-12 pl-28">
      {/* Heading */}
      <h2 className="text-center sm:text-left text-[20px] sm:text-[24px] md:text-[32px] font-normal font-[Clash Display] text-[#2A254B] mb-8">
        Our Popular Products
      </h2>

      {/* Product Cards Wrapper */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-start gap-8 w-full ml-44">
        {/* Large Card */}
        <Card
          imageSrc="/images/Large.png"
          title="The Popular Suede Sofa"
          subtitle="£980"
          isLarge={true}
        />

        {/* Group of Smaller Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          {/* Smaller Cards */}
          <Card
            imageSrc="/images/Parent (3).png"
            title="The Dandy Chair"
            subtitle="£350"
            isLarge={false}
          />
          <Card
            imageSrc="/images/Parent (4).png"
            title="Vintage Armchair"
            subtitle="£450"
            isLarge={false}
          />
        </div>
      </div>

      {/* View Collection Button */}
      <button
        className="mt-12 w-[170px] h-[56px] bg-[#4e4d93] text-white font-medium text-[14px] sm:text-[16px] flex items-center justify-center rounded-md shadow-lg hover:bg-[#3d3b7a] transition duration-300"
      >
        View Collection
      </button>
    </section>
  );
};

export default Products;
