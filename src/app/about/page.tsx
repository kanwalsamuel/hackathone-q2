



//  "use client";

// import Link from "next/link";
// import { MdLocalShipping } from "react-icons/md";
// import { FaTimes } from "react-icons/fa"; // Import FaTimes from react-icons/fa
// import TopNav from "../components/nav";
// import Image from "next/image"; // Import Image for next/image optimization
// import FeaturesSection from "../components/featureBlock";

// export default function AboutNav() {
//   return (
//     <div className="w-full bg-white flex flex-col mx-auto relative">
//       {/* Top Banner */}
//       <div className="w-full bg-[#2A254B] flex items-center justify-center px-6 py-2 h-[41px] relative">
//         <div className="flex items-center space-x-2">
//           <MdLocalShipping className="text-white" size={16} />
//           <p className="text-white text-[16px] font-[Satoshi] font-normal leading-[22px] text-center">
//             Free delivery on all orders over £50
//           </p>
//         </div>
//         <button className="absolute right-6 text-white" aria-label="Close Banner">
//           <FaTimes size={20} />
//         </button>
//       </div>

//       {/* Top Section */}
//       <div className="flex flex-col sm:flex-row items-center justify-between sm:px-8 py-6">
//         {/* Left Section: Logo or Branding */}
//         <TopNav />

//         {/* Right Section: Links */}
//         <div className="flex items-center space-x-6">
//           {/* About Links */}
//           <div className="flex space-x-6 items-center">
//             <Link
//               href="/about"
//               className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left ml-8"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/contact"
//               className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/blog"
//               className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left"
//             >
//               Blog
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Custom Section */}
//       <div className="w-full bg-[#4E4D93] flex flex-col sm:flex-row items-center justify-between px-8 py-8 sm:h-[277px]">
//         {/* Text Section */}
//         <div className="w-full sm:w-[704px] text-white font-[Clash Display] text-[26px] leading-[42px] mt-8 sm:mt-0 sm:ml-8">
//           A brand built on the love of craftsmanship, quality, and outstanding customer service.
//         </div>
//         {/* Button */}
//         <button className="w-[192px] h-[56px] bg-white text-[#4E4D93] font-[Satoshi] text-[16px] rounded-md mt-8 sm:mt-0 sm:ml-8">
//           View Our Products
//         </button>
//       </div>

//       {/* New Section: Furniture Brand */}
//       <div className="w-full h-auto bg-white mx-auto flex items-center justify-center">
//         {/* Content Container */}
//         <div className="w-full max-w-[1280px] mx-[20px] my-[20px] md:mx-[80px] md:my-[60px] flex flex-col md:flex-row items-center justify-between bg-[#4E4D93] p-4 md:p-8">
//           {/* Left Content */}
//           <div className="flex flex-col justify-center h-auto md:h-[584px] space-y-4 text-center md:text-left">
//             {/* Heading */}
//             <h2 className="text-white text-[28px] md:text-[36px] leading-tight font-light mx-6 sm:text-[18px]">
//             It started with a small idea
//             </h2>
//             <br />

//             {/* Subtext */}
//             <p className="text-white m text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[602px] mx-6 md:mx-8">
//             A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014
         
//             </p>

//             {/* Button on sm and md screens */}
//             <div className="mt-6 flex justify-center md:justify-start ml-6">
//               <button className="w-[150px] h-[48px] bg-[#2A254B] text-white text-[14px] md:text-[16px] font-medium flex items-center justify-center">
//                 View Collection
//               </button>
//             </div>
//           </div>

//           {/* Right Content (Image) */}
//           <div className="w-full md:w-[520px] h-auto md:h-[584px] flex-shrink-0 mt-8 md:mt-0.5">
//             <Image
//               src="/images/About main.png" // Replace with your image path
//               alt="Furniture Design"
//               width={520}
//               height={584}
//               className="object-cover rounded w-full h-full"
//             />
//           </div>
//         </div>
//       </div>

//       {/* New Section: Image Left and Text Right */}
//       <section className="flex justify-center items-center min-h-screen bg-white">
//         <div className='py-12 text-[#2A254B] w-full max-w-7xl px-4 md:px-12'>
//           <div className='flex flex-col md:flex-row justify-center items-center'>
//             {/* Image */}
//             <div className='w-full md:w-[890px] h-auto'>
//               <Image
//                 src={'/images/About second.png'}
//                 height={800}
//                 width={800}
//                 alt='chair'
//                 className='w-full h-full object-cover'
//               />
//             </div>

//             {/* Text Content */}
//             <div className='w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between'>
//               <div>
//                 <h1 className='text-2xl md:text-2xl'>
//                 Our service isn’t just personal, it’s actually
//                 hyper personally exquisite
//                 </h1>
//                 <h1 className='py-6 text-lg md:text-xl'>
//                 When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
//                 </h1>
//                 <h1 className='text-base md:text-lg'>
//                 Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
//                 </h1>
//               </div>
//               <div className='my-10'>
//                 <button className='bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]'>
//                   Get in touch
//                 </button>
//               </div>
          
//             </div>
//           </div>
//           <FeaturesSection/>

//         </div>
//       </section>
//     </div>
//   );
// }










"use client";

import Link from "next/link";
import { MdLocalShipping } from "react-icons/md";
import { FaTimes } from "react-icons/fa"; // Import FaTimes from react-icons/fa
import TopNav from "../components/nav";
import Image from "next/image"; // Import Image for next/image optimization
import FeaturesSection from "../components/featureBlock";

export default function AboutNav() {
  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Banner */}
      <div className="w-full bg-[#2A254B] flex items-center justify-center px-6 py-2 h-[41px] relative">
        <div className="flex items-center space-x-2">
          <MdLocalShipping className="text-white" size={16} />
          <p className="text-white text-[16px] font-[Satoshi] font-normal leading-[22px] text-center">
            Free delivery on all orders over £50
          </p>
        </div>
        <button className="absolute right-6 text-white" aria-label="Close Banner">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between sm:px-8 py-6">
        {/* Left Section: Logo or Branding */}
        <TopNav />

        {/* Right Section: Links */}
        <div className="flex items-center space-x-6">
          {/* About Links */}
          <div className="flex space-x-6 items-center">
            <Link
              href="/about"
              className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left ml-8"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-[#726E8D] text-[16px] font-[Satoshi] font-normal leading-[22px] text-left"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Section */}
      <div className="w-full bg-[#4E4D93] flex flex-col sm:flex-row items-center justify-between px-8 py-8 sm:h-[277px]">
        {/* Text Section */}
        <div className="w-full sm:w-[704px] text-white font-[Clash Display] text-[26px] leading-[42px] mt-8 sm:mt-0 sm:ml-36">
          A brand built on the love of craftsmanship, quality, and outstanding customer service.
        </div>
        {/* Button */}
        <button className="w-[192px] h-[56px] bg-white text-[#4E4D93] font-[Satoshi] text-[16px] rounded-md mt-8 sm:mt-0 sm:ml-8">
          View Our Products
        </button>
      </div>

      {/* New Section: Furniture Brand */}
      <div className="w-full h-auto bg-white mx-auto flex items-center justify-center">
        {/* Content Container */}
        <div className="w-full max-w-[1280px] mx-[20px] my-[20px] md:mx-[80px] md:my-[60px] flex flex-col md:flex-row items-center justify-between bg-[#4E4D93] p-4 md:p-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-auto md:h-[584px] space-y-4 text-center md:text-left">
            {/* Heading */}
            <h2 className="text-white text-[28px] md:text-[36px] leading-tight font-light mx-6 sm:text-[18px]">
            It started with a small idea
            </h2>
            <br />

            {/* Subtext */}
            <p className="text-white m text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[602px] mx-6 md:mx-8">
            A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014
          
            </p>

            {/* Button on sm and md screens */}
            <div className="mt-6 flex justify-center md:justify-start ml-6">
              <button className="w-[150px] h-[48px] bg-[#2A254B] text-white text-[14px] md:text-[16px] font-medium flex items-center justify-center">
                View Collection
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full md:w-[520px] h-auto md:h-[584px] flex-shrink-0 mt-8 md:mt-0.5">
            <Image
              src="/images/About main.png" // Replace with your image path
              alt="Furniture Design"
              width={520}
              height={584}
              className="object-cover rounded w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* New Section: Image Left and Text Right */}
      <section className="flex justify-center items-center min-h-screen bg-white">
        <div className='py-12 text-[#2A254B] w-full max-w-7xl px-4 md:px-12'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            {/* Image */}
            <div className='w-full md:w-[890px] h-auto'>
              <Image
                src={'/images/About second.png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Text Content */}
            <div className='w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between'>
              <div>
                <h1 className='text-2xl md:text-2xl'>
                Our service isn’t just personal, it’s actually
                hyper personally exquisite
                </h1>
                <h1 className='py-6 text-lg md:text-xl'>
                When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                </h1>
                <h1 className='text-base md:text-lg'>
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                </h1>
              </div>
              <div className='my-10'>
                <button className='bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]'>
                  Get in touch
                </button>
              </div>
          
            </div>
          </div>
          <FeaturesSection/>

        </div>
      </section>


<div className="w-full h-auto sm:h-[430px] bg-[#F3F3F3] flex items-center justify-center px-4 sm:px-0">
  <div className="w-full max-w-[1440px] h-auto sm:h-[430px] flex flex-col items-center justify-center border border-[#CCCCCC] rounded-md bg-white p-6 sm:p-8">
    <h1 className="font-[Clash Display] text-[#2A254B] text-[24px] sm:text-[32px] md:text-[36px] mb-4 text-center">
      Join the club and get the benefits
    </h1>
    <p className="font-[Satoshi] text-[#2A254B] text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] mb-8 text-center px-2 sm:px-4">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more.
    </p>
    <div className="w-full sm:w-[456px] h-[56px] flex items-center border border-[#CCCCCC] rounded-md overflow-hidden">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-grow h-full px-4 text-[14px] sm:text-[16px] font-[Satoshi] text-[#2A254B] focus:outline-none"
      />
      <button className="h-full w-[80px] sm:w-[100px] bg-[#2A254B] text-white font-[Satoshi] text-[14px] sm:text-[16px]">
        Sign Up
      </button>
    </div>
  </div>
</div>

    </div>
  );
}
