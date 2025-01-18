


// // "use client";

// // import React, { useState, useEffect, useCallback } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { IoMdArrowDropdown } from "react-icons/io";
// // import TopNav from "../components/nav";
// // import { client } from "../../sanity/lib/client";

// // type Product = {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   image: {
// //     asset: {
// //       url: string;
// //     };
// //   };
// // };

// // type DropdownProps = {
// //   label: string;
// //   isOpen: boolean;
// //   onToggle: () => void;
// //   options: string[];
// // };

// // const Dropdown: React.FC<DropdownProps> = ({ label, isOpen, onToggle, options }) => (
// //   <div className="relative">
// //     <button
// //       onClick={onToggle}
// //       className="flex items-center justify-between px-4 py-2 text-[#2a254b] bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 font-clash font-medium text-sm w-50 transition-all duration-300 sm:w-20"
// //       aria-expanded={isOpen}
// //     >
// //       {label}
// //       <IoMdArrowDropdown className="text-lg" />
// //     </button>
// //     {isOpen && (
// //       <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 w-40 animate-fade-in">
// //         <ul className="text-sm text-[#2a254b]">
// //           {options.map((option, index) => (
// //             <li
// //               key={index}
// //               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
// //             >
// //               {option}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     )}
// //   </div>
// // );

// // const ProductsComponent: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [openFilter, setOpenFilter] = useState<string | null>(null);

// //   const categories = ["Chairs", "Sofas", "Tables", "Beds", "Kitchen", "Wardrobe", "Office"];
// //   const productTypes = ["Wood", "Metal", "Plastic", "Fabric", "Leather"];
// //   const brands = ["Pakistani Brand 1", "Pakistani Brand 2", "Pakistani Brand 3"];
// //   const priceOptions = ["High to Low", "Low to High"];
// //   const sortingOptions = ["Date Added", "Price: Low to High", "Price: High to Low", "Popularity", "Newest"];

// //   const toggleFilter = useCallback((filter: string) => {
// //     setOpenFilter((prev) => (prev === filter ? null : filter));
// //   }, []);

// //   const fetchProducts = async () => {
// //     setLoading(true);
// //     const query = `*[_type == "product"]{
// //       _id,
// //       name,
// //       price,
// //       image {
// //         asset -> {
// //           url
// //         }
// //       }
// //     }`;
// //     const result: Product[] = await client.fetch(query);
// //     setProducts(result);
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="relative flex flex-col w-full bg-[#f9f9f9] min-h-screen">
// //       <TopNav />

// //       <div className="relative w-full h-[200px] mt-10">
// //         <Image
// //           src="/images/productBg.png"
// //           alt="Product Background"
// //           fill
// //           style={{ objectFit: "cover" }}
// //           className="w-full rounded-b-lg shadow-lg"
// //         />
// //       </div>

// //       {/* Mobile and Medium screens (sm, md): Center filters and sorting */}
// //       <div className="flex justify-center gap-2 px-4 py-8 lg:hidden">
// //         <Dropdown label="Filter" isOpen={openFilter === "Filter"} onToggle={() => toggleFilter("Filter")} options={["Price", "Category", "Product Type", "Brand"]} />
// //         <Dropdown label="Sorting" isOpen={openFilter === "Sorting"} onToggle={() => toggleFilter("Sorting")} options={sortingOptions} />
// //       </div>

// //       {/* Large screens (lg): Left-aligned filters and right-aligned sorting */}
// //       <div className="hidden lg:flex justify-between gap-4 px-6 py-4 w-full">
// //         <div className="flex gap-6 shadow-md font-clash text-[#2a254b]">
// //           <Dropdown label="Category" isOpen={openFilter === "Category"} onToggle={() => toggleFilter("Category")} options={categories} />
// //           <Dropdown label="Product Type" isOpen={openFilter === "ProductType"} onToggle={() => toggleFilter("ProductType")} options={productTypes} />
// //           <Dropdown label="Price" isOpen={openFilter === "Price"} onToggle={() => toggleFilter("Price")} options={priceOptions} />
// //           <Dropdown label="Brand" isOpen={openFilter === "Brand"} onToggle={() => toggleFilter("Brand")} options={brands} />
// //         </div>
// //         <Dropdown label="Sorted by: Date Added" isOpen={openFilter === "DateAdded"} onToggle={() => toggleFilter("DateAdded")} options={sortingOptions} />
// //       </div>

// //       <div className="w-full flex justify-center mt-10 px-4">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mr-8">
// //           {loading ? (
// //             <div className="col-span-4 text-center text-[#2a254b]">Loading products...</div>
// //           ) : (
// //             products.map((product) => (
// //               <Link key={product._id} href={`/product/${product._id}`} passHref>
// //                 <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer">
// //                   <Image src={product.image.asset.url} alt={product.name} width={300} height={300} className="rounded-md mx-auto" loading="lazy" />
// //                   <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
// //                   <p className="text-[#2A254B] text-sm">€ {product.price}</p>
// //                 </div>
// //               </Link>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductsComponent;

// // src/app/productsSanity/page.tsx

// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoMdArrowDropdown } from "react-icons/io";
// import TopNav from "../components/nav";
// import { client } from "../../sanity/lib/client";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// type DropdownProps = {
//   label: string;
//   isOpen: boolean;
//   onToggle: () => void;
//   options: string[];
// };

// const Dropdown: React.FC<DropdownProps> = ({ label, isOpen, onToggle, options }) => (
//   <div className="relative">
//     <button
//       onClick={onToggle}
//       className="flex items-center justify-between px-4 py-2 text-[#2a254b] bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 font-clash font-medium text-sm w-50 transition-all duration-300 sm:w-20"
//       aria-expanded={isOpen}
//     >
//       {label}
//       <IoMdArrowDropdown className="text-lg" />
//     </button>
//     {isOpen && (
//       <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 w-40 animate-fade-in">
//         <ul className="text-sm text-[#2a254b]">
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// );

// const ProductsComponent: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [openFilter, setOpenFilter] = useState<string | null>(null);

//   const categories = ["Chairs", "Sofas", "Tables", "Beds", "Kitchen", "Wardrobe", "Office"];
//   const productTypes = ["Wood", "Metal", "Plastic", "Fabric", "Leather"];
//   const brands = ["Pakistani Brand 1", "Pakistani Brand 2", "Pakistani Brand 3"];
//   const priceOptions = ["High to Low", "Low to High"];
//   const sortingOptions = ["Date Added", "Price: Low to High", "Price: High to Low", "Popularity", "Newest"];

//   const toggleFilter = useCallback((filter: string) => {
//     setOpenFilter((prev) => (prev === filter ? null : filter));
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     const query = `*[_type == "product"]{
//       _id,
//       name,
//       price,
//       image {
//         asset -> {
//           url
//         }
//       }
//     }`;
//     const result: Product[] = await client.fetch(query);
//     setProducts(result);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="relative flex flex-col w-full bg-[#f9f9f9] min-h-screen">
//       <TopNav />
//       <div className="w-full flex justify-center mt-10 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mr-8">
//           {loading ? (
//             <div className="col-span-4 text-center text-[#2a254b]">Loading products...</div>
//           ) : (
//             products.map((product) => (
//               <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
//                 <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer">
//                   <Image src={product.image.asset.url} alt={product.name} width={300} height={300} className="rounded-md mx-auto" loading="lazy" />
//                   <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
//                   <p className="text-[#2A254B] text-sm">€ {product.price}</p>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsComponent;





"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import TopNav from "../components/nav";
import { client } from "../../sanity/lib/client";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

type DropdownProps = {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  options: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ label, isOpen, onToggle, options }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center justify-between px-4 py-2 text-[#2a254b]  border-gray-300 rounded-md shadow-sm hover:bg-gray-100 font-clash font-medium text-sm w-50 transition-all duration-300 sm:w-20 lg:w-48"
      aria-expanded={isOpen}
    >
      {label}
      <IoMdArrowDropdown className="text-lg" />
    </button>
    {isOpen && (
      <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 w-40 animate-fade-in">
        <ul className="text-sm text-[#2a254b]">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ProductsComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const categories = ["Chairs", "Sofas", "Tables", "Beds", "Kitchen", "Wardrobe", "Office"];
  const productTypes = ["Wood", "Metal", "Plastic", "Fabric", "Leather"];
  const brands = ["Pakistani Brand 1", "Pakistani Brand 2", "Pakistani Brand 3"];
  const priceOptions = ["High to Low", "Low to High"];
  const sortingOptions = ["Date Added", "Price: Low to High", "Price: High to Low", "Popularity", "Newest"];

  const toggleFilter = useCallback((filter: string) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const query = `*[_type == "product"]{
      _id,
      name,
      price,
      image {
        asset -> {
          url
        }
      }
    }`;
    const result: Product[] = await client.fetch(query);
    setProducts(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-[#f9f9f9] min-h-screen">
      <TopNav />
      
      {/* Background Image Section */}
      <div className="relative w-full h-[200px] mt-20 ">
        <Image
          src="/images/productBg.png"
          alt="Product Background"
          fill
          style={{ objectFit: "cover" }}
          className="w-full rounded-b-lg shadow-lg"
        />
      </div>

      {/* Mobile and Medium screens (sm, md): Center filters and sorting */}
      <div className="flex justify-center gap-2 px-4 py-8 lg:hidden">
        <Dropdown label="Filter" isOpen={openFilter === "Filter"} onToggle={() => toggleFilter("Filter")} options={["Price", "Category", "Product Type", "Brand"]} />
        <Dropdown label="Sorting" isOpen={openFilter === "Sorting"} onToggle={() => toggleFilter("Sorting")} options={sortingOptions} />
      </div>

      {/* Large screens (lg): Left-aligned filters and right-aligned sorting */}
      <div className="hidden lg:flex justify-between gap-4 px-6 py-4 w-full">
        <div className="flex gap-6 shadow-sm font-clash text-[#2a254b]">
          <Dropdown label="Category" isOpen={openFilter === "Category"} onToggle={() => toggleFilter("Category")} options={categories} />
          <Dropdown label="Product Type" isOpen={openFilter === "ProductType"} onToggle={() => toggleFilter("ProductType")} options={productTypes} />
          <Dropdown label="Price" isOpen={openFilter === "Price"} onToggle={() => toggleFilter("Price")} options={priceOptions} />
          <Dropdown label="Brand" isOpen={openFilter === "Brand"} onToggle={() => toggleFilter("Brand")} options={brands} />
        </div>
        <Dropdown label="Sorted by: Date Added" isOpen={openFilter === "DateAdded"} onToggle={() => toggleFilter("DateAdded")} options={sortingOptions} />
      </div>

      <div className="w-full flex justify-center mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mr-8">
          {loading ? (
            <div className="col-span-4 text-center text-[#2a254b]">Loading products...</div>
          ) : (
            products.map((product) => (
              <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
                <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer">
                  <Image src={product.image.asset.url} alt={product.name} width={300} height={300} className="rounded-md mx-auto" loading="lazy" />
                  <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
                  <p className="text-[#2A254B] text-sm">€ {product.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
