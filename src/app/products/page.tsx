
// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoMdArrowDropdown } from "react-icons/io";
// import TopNav from "../components/nav";
// import { client } from "../../sanity/lib/client";
// import LoadingAnimation from "../components/loadingAnimation";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   category: string;
//   productType: string;
//   brand: string;
// };

// type DropdownProps = {
//   label: string;
//   isOpen: boolean;
//   onToggle: () => void;
//   options: string[];
//   onOptionSelect: (option: string) => void;
// };

// const Dropdown: React.FC<DropdownProps> = ({ label, isOpen, onToggle, options, onOptionSelect }) => (
//   <div className="relative">
//     <button
//       onClick={onToggle}
//       className="flex items-center justify-between px-4 py-2 text-[#2a254b] border-gray-300 rounded-md shadow-sm hover:bg-gray-100 font-clash font-medium text-sm w-40 sm:w-48 lg:w-56 transition-all duration-300"
//       aria-expanded={isOpen ? "true" : "false"}
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
//               onClick={() => onOptionSelect(option)}
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
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
//   const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
//   const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);

//   const categories = ["Tableware", "Cutlery", "Chairs", "Plant pots", "Ceramics", "Tables", "Crockery"];
//   const productTypes = ["Wood", "Metal", "Plastic", "Fabric", "Leather"];
//   const brands = ["Pakistani Brand 1", "Pakistani Brand 2", "Pakistani Brand 3"];
//   const priceOptions = ["High to Low", "Low to High"];
//   const sortingOptions = ["Date Added", "Price: Low to High", "Price: High to Low", "Popularity", "Newest"];

//   const toggleFilter = useCallback((filter: string) => {
//     setOpenFilter((prev) => (prev === filter ? null : filter));
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);

//     // Base query to fetch all products
//     let query = `*[_type == "product"]{
//       _id,
//       name,
//       price,
//       image {
//         asset -> {
//           url
//         }
//       },
//       category,
//       feature,
//       productType,
//       brand
//     }`;

//     // Apply filters dynamically if a filter is selected
//     if (selectedCategory) {
//       query += ` && category == "${selectedCategory}"`;
//     }
//     if (selectedProductType) {
//       query += ` && productType == "${selectedProductType}"`;
//     }
//     if (selectedBrand) {
//       query += ` && brand == "${selectedBrand}"`;
//     }
//     if (selectedPrice) {
//       query += selectedPrice === "High to Low" ? " | order(price desc)" : " | order(price asc)";
//     }

//     // Apply pagination (skip and limit)
//     const itemsPerPage = 12; // Example number of items per page
//     const skip = (currentPage - 1) * itemsPerPage;
//     query += ` | order(name asc) [${skip}..${skip + itemsPerPage - 1}]`;

//     try {
//       const result = await client.fetch(query);
//       const totalItemsQuery = `count(*[_type == "product"]${selectedCategory ? ` && category == "${selectedCategory}"` : ''}${selectedProductType ? ` && productType == "${selectedProductType}"` : ''}${selectedBrand ? ` && brand == "${selectedBrand}"` : ''})`;
//       const totalItems = await client.fetch(totalItemsQuery);

//       setTotalPages(Math.ceil(totalItems / itemsPerPage));
//       if (Array.isArray(result)) {
//         setProducts(result);
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Call fetchProducts whenever any filter state changes or page changes
//   useEffect(() => {
//     fetchProducts();
//   }, [selectedCategory, selectedProductType, selectedBrand, selectedPrice, currentPage]);

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleProductTypeChange = (productType: string) => {
//     setSelectedProductType(productType);
//   };

//   const handleBrandChange = (brand: string) => {
//     setSelectedBrand(brand);
//   };

//   const handlePriceChange = (price: string) => {
//     setSelectedPrice(price);
//   };

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center w-full bg-[#f9f9f9] min-h-screen">
//       <TopNav />
//       <div className="relative w-full h-[200px] mt-20">
//         <Image
//           src="/images/productBg.png"
//           alt="Product Background"
//           fill
//           style={{ objectFit: "cover" }}
//           className="w-full rounded-b-lg shadow-lg"
//         />
//       </div>

//       {/* Mobile Filter */}
//       <div className="flex justify-center gap-2 px-4 py-8 lg:hidden">
//         <Dropdown
//           label="Filter & Sorting"
//           isOpen={openFilter === "FilterSorting"}
//           onToggle={() => toggleFilter("FilterSorting")}
//           options={["Price", "Category", "Product Type", "Brand", ...sortingOptions]}
//           onOptionSelect={(option) => {
//             if (option === "Price") {
//               handlePriceChange(option);
//             }
//             if (categories.includes(option)) {
//               handleCategoryChange(option);
//             }
//             if (productTypes.includes(option)) {
//               handleProductTypeChange(option);
//             }
//             if (brands.includes(option)) {
//               handleBrandChange(option);
//             }
//           }}
//         />
//       </div>

//       {/* Desktop Filters */}
//       <div className="hidden lg:flex justify-between gap-4 px-6 py-4 w-full max-w-screen-xl">
//         <div className="flex gap-6 shadow-sm font-clash text-[#2a254b]">
//           <Dropdown
//             label="Category"
//             isOpen={openFilter === "Category"}
//             onToggle={() => toggleFilter("Category")}
//             options={categories}
//             onOptionSelect={handleCategoryChange}
//           />
//           <Dropdown
//             label="Product Type"
//             isOpen={openFilter === "ProductType"}
//             onToggle={() => toggleFilter("ProductType")}
//             options={productTypes}
//             onOptionSelect={handleProductTypeChange}
//           />
//           <Dropdown
//             label="Price"
//             isOpen={openFilter === "Price"}
//             onToggle={() => toggleFilter("Price")}
//             options={priceOptions}
//             onOptionSelect={handlePriceChange}
//           />
//           <Dropdown
//             label="Brand"
//             isOpen={openFilter === "Brand"}
//             onToggle={() => toggleFilter("Brand")}
//             options={brands}
//             onOptionSelect={handleBrandChange}
//           />
//         </div>
//         <Dropdown
//           label="Sorted by: Date Added"
//           isOpen={openFilter === "DateAdded"}
//           onToggle={() => toggleFilter("DateAdded")}
//           options={sortingOptions}
//           onOptionSelect={handlePriceChange}
//         />
//       </div>

//       {/* Product Grid */}
//       <div className="w-full flex justify-center mt-10 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
//           {loading ? (
//             // <div className="col-span-4 text-center text-[#2a254b]">Loading products...</div>
//             <div className="col-span-4 text-center text-[#2a254b]">
//       <LoadingAnimation />
//       </div>
//           ) : (
//             products.length === 0 ? (
//               <div className="col-span-4 text-center text-[#2a254b]">No products found</div>
//             ) : (
//               products.map((product) => (
//                 <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
//                   <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer w-full h-full flex flex-col items-center">
//                     <Image
//                       src={product.image.asset.url}
//                       alt={product.name}
//                       width={320}
//                       height={320}
//                       className="rounded-md object-cover w-80 h-80"
//                       loading="lazy"
//                     />
//                     <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
//                     <p className="text-[#2A254B] text-sm">€ {product.price}</p>
//                   </div>
//                 </Link>
//               ))
//             )
//           )}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 px-4 md:px-0">
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
//         >
//           Previous
//         </button>
//         <span className="mx-3 sm:mx-4 text-[#2a254b] font-semibold text-xs sm:text-sm">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
//         >
//           Next
//         </button>
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
import LoadingAnimation from "../components/loadingAnimation";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  productType: string;
  brand: string;
};

type DropdownProps = {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  options: string[];
  onOptionSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, isOpen, onToggle, options, onOptionSelect }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center justify-between px-4 py-2 text-[#2a254b] border-gray-300 rounded-md shadow-sm hover:bg-gray-100 font-clash font-medium text-sm w-40 sm:w-48 lg:w-56 transition-all duration-300"
      aria-expanded={isOpen ? "true" : "false"}
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
              onClick={() => onOptionSelect(option)}
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const categories = ["Tableware", "Cutlery", "Chairs", "Plant pots", "Ceramics", "Tables", "Crockery"];
  const productTypes = ["Wood", "Metal", "Plastic", "Fabric", "Leather"];
  const brands = ["Pakistani Brand 1", "Pakistani Brand 2", "Pakistani Brand 3"];
  const priceOptions = ["High to Low", "Low to High"];
  const sortingOptions = ["Date Added", "Price: Low to High", "Price: High to Low", "Popularity", "Newest"];

  const toggleFilter = useCallback((filter: string) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  }, []);

  // Wrap fetchProducts in useCallback to avoid re-creating the function on each render
  const fetchProducts = useCallback(async () => {
    setLoading(true);

    // Base query to fetch all products
    let query = `*[_type == "product"]{
      _id,
      name,
      price,
      image {
        asset -> {
          url
        }
      },
      category,
      feature,
      productType,
      brand
    }`;

    // Apply filters dynamically if a filter is selected
    if (selectedCategory) {
      query += ` && category == "${selectedCategory}"`;
    }
    if (selectedProductType) {
      query += ` && productType == "${selectedProductType}"`;
    }
    if (selectedBrand) {
      query += ` && brand == "${selectedBrand}"`;
    }
    if (selectedPrice) {
      query += selectedPrice === "High to Low" ? " | order(price desc)" : " | order(price asc)";
    }

    // Apply pagination (skip and limit)
    const itemsPerPage = 12; // Example number of items per page
    const skip = (currentPage - 1) * itemsPerPage;
    query += ` | order(name asc) [${skip}..${skip + itemsPerPage - 1}]`;

    try {
      const result = await client.fetch(query);
      const totalItemsQuery = `count(*[_type == "product"]${selectedCategory ? ` && category == "${selectedCategory}"` : ''}${selectedProductType ? ` && productType == "${selectedProductType}"` : ''}${selectedBrand ? ` && brand == "${selectedBrand}"` : ''})`;
      const totalItems = await client.fetch(totalItemsQuery);

      setTotalPages(Math.ceil(totalItems / itemsPerPage));
      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedProductType, selectedBrand, selectedPrice, currentPage]);

  // Call fetchProducts whenever any filter state changes or page changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductTypeChange = (productType: string) => {
    setSelectedProductType(productType);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full bg-[#f9f9f9] min-h-screen">
      <TopNav />
      <div className="relative w-full h-[200px] mt-20">
        <Image
          src="/images/productBg.png"
          alt="Product Background"
          fill
          style={{ objectFit: "cover" }}
          className="w-full rounded-b-lg shadow-lg"
        />
      </div>

      {/* Mobile Filter */}
      <div className="flex justify-center gap-2 px-4 py-8 lg:hidden">
        <Dropdown
          label="Filter & Sorting"
          isOpen={openFilter === "FilterSorting"}
          onToggle={() => toggleFilter("FilterSorting")}
          options={["Price", "Category", "Product Type", "Brand", ...sortingOptions]}
          onOptionSelect={(option) => {
            if (option === "Price") {
              handlePriceChange(option);
            }
            if (categories.includes(option)) {
              handleCategoryChange(option);
            }
            if (productTypes.includes(option)) {
              handleProductTypeChange(option);
            }
            if (brands.includes(option)) {
              handleBrandChange(option);
            }
          }}
        />
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:flex justify-between gap-4 px-6 py-4 w-full max-w-screen-xl">
        <div className="flex gap-6 shadow-sm font-clash text-[#2a254b]">
          <Dropdown
            label="Category"
            isOpen={openFilter === "Category"}
            onToggle={() => toggleFilter("Category")}
            options={categories}
            onOptionSelect={handleCategoryChange}
          />
          <Dropdown
            label="Product Type"
            isOpen={openFilter === "ProductType"}
            onToggle={() => toggleFilter("ProductType")}
            options={productTypes}
            onOptionSelect={handleProductTypeChange}
          />
          <Dropdown
            label="Price"
            isOpen={openFilter === "Price"}
            onToggle={() => toggleFilter("Price")}
            options={priceOptions}
            onOptionSelect={handlePriceChange}
          />
          <Dropdown
            label="Brand"
            isOpen={openFilter === "Brand"}
            onToggle={() => toggleFilter("Brand")}
            options={brands}
            onOptionSelect={handleBrandChange}
          />
        </div>
        <Dropdown
          label="Sorted by: Date Added"
          isOpen={openFilter === "DateAdded"}
          onToggle={() => toggleFilter("DateAdded")}
          options={sortingOptions}
          onOptionSelect={handlePriceChange}
        />
      </div>

      {/* Product Grid */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
          {loading ? (
            <div className="col-span-4 text-center text-[#2a254b]">
              <LoadingAnimation />
            </div>
          ) : (
            products.length === 0 ? (
              <div className="col-span-4 text-center text-[#2a254b]">No products found</div>
            ) : (
              products.map((product) => (
                <Link key={product._id} href={`/productSanity/${product._id}`} passHref>
                  <div className="border p-4 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-transform cursor-pointer w-full h-full flex flex-col items-center">
                    <Image
                      src={product.image.asset.url}
                      alt={product.name}
                      width={320}
                      height={320}
                      className="rounded-md object-cover w-80 h-80"
                      loading="lazy"
                    />
                    <h3 className="mt-2 font-clash text-lg text-[#2A254B]">{product.name}</h3>
                    <p className="text-[#2A254B] text-sm">€ {product.price}</p>
                  </div>
                </Link>
              ))
            )
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 px-4 md:px-0">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
        >
          Previous
        </button>
        <span className="mx-3 sm:mx-4 text-[#2a254b] font-semibold text-xs sm:text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a254b] text-white rounded-md shadow-md hover:bg-[#1a1b3f] disabled:bg-[#d3d3d3] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsComponent;
