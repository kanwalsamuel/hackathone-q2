




// "use client";

// // components/Products.tsx
// import React from "react";
// import TopNav from "../components/nav";
// import ProductListing from "../components/aboutCard";
// import { useRouter } from "next/navigation";

// const Products = () => {
//   const router = useRouter();

//   const handleNavigation = () => {
//     router.push("/products");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="w-full h-[223px] mb-4">
//         <TopNav />
//         <h1 className="text-center pt-5 text-4xl text-[#2a254b] mt-10">
//           View All Products
//         </h1>
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap justify-between items-center w-full max-w-[1280px] mx-auto px-4 text-sm text-[#2a2548] mt-16 gap-0">
//         {["Category", "Product", "Price", "Brand"].map((filter) => (
//           <div key={filter} className="flex items-center space-x-2">
//             <span>{filter}</span>
//             <span className="text-xs">↓</span>
//           </div>
//         ))}
//         <div className="flex items-center space-x-2 justify-end w-full sm:w-auto">
//           <span>Sorted By:</span>
//           <span className="text-xs">↑</span>
//         </div>
//       </div>


    
    

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-y-2   bg-white mx-auto mb-2">
//   {/* Render multiple ProductListing components */}
//   {Array(4).fill(null).map((_, index) => (
//     <div
//       key={index}
//       className="w-full flex justify-center items-start mb-3" // Align content tightly
//     >
//       <ProductListing />
//     </div>
//   ))}
// </div>





//       {/* View Products Button */}
//       <div className="my-10 flex justify-center">
//         <button
//           className="bg-[#F9F9F9] py-4 px-6 rounded-md text-[#2A254B] hover:bg-gray-200 transition-all shadow-sm"
//           onClick={handleNavigation}
//         >
//           View Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;


















"use client";

// components/Products.tsx
import React from "react";
import TopNav from "../components/nav";
import ProductListing from "../components/aboutCard";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-2">
      {/* Header Section */}
      <div className="w-full h-[223px] mb-6">
        <TopNav />
        <h1 className="text-center pt-5 text-2xl text-[#2a254b]  font-bold mt-26 ">
          View All Products
        </h1>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-[1280px] mx-auto px-4 text-sm text-[#2a2548] mt-60 gap-4">
        {["Category", "Product", "Price", "Brand"].map((filter) => (
          <div
            key={filter}
            className="flex items-center space-x-2 cursor-pointer hover:text-[#2A254B]"
          >
            <span>{filter}</span>
            <span className="text-xs">↓</span>
          </div>
        ))}
        <div className="flex items-center space-x-2 justify-end w-full sm:w-auto cursor-pointer hover:text-[#2A254B]">
          <span>Sorted By:</span>
          <span className="text-xs">↑</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 gap-y-2 bg-white mx-auto mb-6">
        {/* Render multiple ProductListing components */}
        {Array(4).fill(null).map((_, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-start mb-3 transition-all duration-200 ease-in-out hover:scale-105"
          >
            <ProductListing />
          </div>
        ))}
      </div>

      {/* View Products Button */}
      <div className="my-10 flex justify-center">
        <button
          className="bg-[#F9F9F9] py-4 px-6 rounded-lg text-[#2A254B] hover:bg-gray-200 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
          onClick={handleNavigation}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
