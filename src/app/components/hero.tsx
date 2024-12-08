

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full h-auto bg-white mx-auto flex items-center justify-center">
      {/* Content Container */}
      <div className="w-full max-w-[1280px] mx-[20px] my-[20px] md:mx-[80px] md:my-[60px] flex flex-col md:flex-row items-center justify-between bg-[#4E4D93] p-4 md:p-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-auto md:h-[584px] space-y-4 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-white text-[28px] md:text-[36px] leading-tight font-light mx-6 sm:text-[18">
            The furniture brand for the future, with timeless design
          </h2>

          {/* Button below the heading */}
          <button className="w-[150px] h-[48px] bg-[#2A254B] text-white text-[14px] md:text-[16px] font-medium flex items-center justify-center mx-6">
            View Collection
          </button>

          {/* Subtext */}
          <p className="text-white text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[602px] mx-6 md:mx-8">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[520px] h-auto md:h-[584px] flex-shrink-0 mt-8 md:mt-0">
          <Image
            src="/images/Right Image.png" // Replace with your image path
            alt="Furniture Design"
            width={520}
            height={584}
            className="object-cover rounded w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
