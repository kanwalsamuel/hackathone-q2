


import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mt-8 mx-auto w-[390px] h-[502px] lg:w-[1180px] md:w-[850px] md:h-[584px] lg:my-[4rem] lg:mx-[3.5rem] bg-[#4E4D93] flex flex-col md:flex-row lg:gap-[2rem] md:gap-0 gap-[2rem] md:mx-auto">
      <div className="z-10"> {/* Ensure this is on top of the image */}
        <div className="px-10 md:px-6 py-10 lg:py-[5rem] lg:px-[5rem]">
          <h2 className="font-clash font-[24px] leading-[44.8px] text-white text-3xl lg:text-4xl">
            The furniture brand for the future, with timeless designs
          </h2>
        </div>
        <div className="px-8 font-satoshi font-normal flex flex-col gap-10">
          <p className="leading-[27px] md:relative md:top-[10rem] lg:left-8 lg:w-[602px] md:w-[400px] text-white text-lg">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full md:relative md:w-[188px] lg:left-[3rem] md:bottom-[11rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-lightGray hover:text-darkBlue transition-all duration-300 ease-in-out">
            View collection
          </button>
        </div>
      </div>
      <div className="relative md:left-16 lg:left-8 w-[900px] h-[584px] md:block hidden">
        <Image
          src="/images/Right Image.png"
          alt="Chair"
          width={200}
          height={200}
          className="w-[460px] lg:w-[520px] h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;
