
import React from 'react';
import Card from './card';

const ListingComponent: React.FC = () => {
  return (
    <section className="w-full h-auto bg-white flex flex-col items-center p-6">
      <h3 className="text-left md:text-center text-[32px] font-normal font-[Clash Display] text-[#2A254B] mb-6 w-full pl-72 ">
        New Ceramics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-center mb-6">
        <Card
          imageSrc="/images/Parent (3).png"
          title="The Dandy Chair"
          subtitle="£250"
        />
        <Card
          imageSrc="/images/Parent.png"
          title="Rusic Vase Set"
          subtitle="£155"
        />
        <Card
          imageSrc="/images/Parent (1).png"
          title="The Silky Vase"
          subtitle="£125"
        />
        <Card
          imageSrc="/images/fan.png"
          title="The Lucy Lamp"
          subtitle="£399"
        />
      </div>
      <button
        className="w-[170px] h-[56px] bg-[#4e4d93] text-[#F9F9F9] font-medium text-[16px] flex items-center justify-center rounded-md shadow-lg hover:bg-[#3d3b7a] transition duration-300"
      >
        View Collection
      </button>
    </section>
  );
};

export default ListingComponent;
