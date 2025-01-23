// // "use client";

// // import { useState } from "react";
// // import { FaSearch, FaShoppingCart, FaUser, FaBars, FaHeart } from "react-icons/fa";
// // import Link from "next/link";
// // import { useCart } from "../../context/cartContext";
// // import { useWishlist } from "../../context/wishListContext";
// // import { client } from "../../sanity/lib/client";
// // import Image from "next/image";
// // import { useRouter } from "next/router"; // Import router for navigation

// // interface Product {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   description: string;
// //   image: {
// //     asset: {
// //       url: string;
// //     };
// //   };
// //   slug: {
// //     current: string;
// //   };
// // }

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "About", href: "/about" },
// //   { label: "Cart", href: "/cart" },
// //   { label: "Products", href: "/products" },
// //   { label: "Plant Pots", href: "/category/plant-pots" },
// //   { label: "Ceramics", href: "/category/ceramics" },
// //   { label: "Tables", href: "/category/tables" },
// //   { label: "Chairs", href: "/category/chairs" },
// //   { label: "Crockery", href: "/category/crockery" },
// //   { label: "Tableware", href: "/category/tableware" },
// //   { label: "Cutlery", href: "/category/cutlery" },
// // ];

// // export default function TopNav() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState(""); 
// //   const [searchResults, setSearchResults] = useState<Product[]>([]); 
// //   const { cartItems } = useCart();
// //   const { wishlistItems } = useWishlist();
// //   const router = useRouter(); // Initialize the router for navigation

// //   const toggleMenu = () => {
// //     setMenuOpen((prevState) => !prevState);
// //     if (menuOpen) {
// //       setSearchQuery(""); // Clear search query when menu is toggled
// //       setSearchResults([]); // Clear search results
// //     }
// //   };

// //   const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
// //   const wishlistItemCount = wishlistItems.length;

// //   const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const query = e.target.value;
// //     setSearchQuery(query);

// //     if (query.length > 2) {
// //       const searchQuery = `*[_type == "product" && (name match $query || description match $query)] {
// //         _id,
// //         name,
// //         price,
// //         description,
// //         image { asset -> { url } },
// //         slug
// //       }`;
// //       const products = await client.fetch(searchQuery, { query: `*${query}*` });
// //       setSearchResults(products);
// //     } else {
// //       setSearchResults([]);
// //     }
// //   };

// //   const handleSearchResultClick = (slug: string) => {
// //     setSearchQuery(""); 
// //     setSearchResults([]); 
// //     router.push(`/product/${slug}`); // Use router.push instead of window.location.href
// //   };

// //   return (
// //     <div className="w-full bg-white flex flex-col mx-auto relative">
// //       <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
// //         <div className="flex items-center justify-center w-full md:w-auto">
// //           <Link href="/">
// //             <p className="text-[#22202E] font-clash text-[16px] sm:text-[20px] md:text-[24px] leading-[30px] text-center" style={{ letterSpacing: "0.5px" }}>
// //               Avion
// //             </p>
// //           </Link>
// //         </div>

// //         <div className="flex items-center space-x-4 md:space-x-6">
// //           <Link href="/wishlist" aria-label="Wishlist">
// //             <div className="relative">
// //               <FaHeart className="text-black" size={16} />
// //               {wishlistItemCount > 0 && (
// //                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
// //                   {wishlistItemCount}
// //                 </span>
// //               )}
// //             </div>
// //           </Link>

// //           <Link href="/cart" aria-label="Shopping Cart">
// //             <div className="relative">
// //               <FaShoppingCart className="text-black" size={14} />
// //               {cartItemCount > 0 && (
// //                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
// //                   {cartItemCount}
// //                 </span>
// //               )}
// //             </div>
// //           </Link>

// //           <Link href="/profile" aria-label="User Profile">
// //             <div className="w-[32px] h-[32px] flex items-center justify-center">
// //               <FaUser className="text-black" size={14} />
// //             </div>
// //           </Link>
// //         </div>

// //         <div className="flex items-center sm:hidden absolute left-4">
// //           <FaBars className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg" size={24} onClick={toggleMenu} />
// //         </div>
// //       </div>

// //       <div className="w-full sm:px-4 md:px-6 lg:px-8 py-2 mt-4">
// //         <div className="relative w-full">
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={handleSearchChange}
// //             placeholder="Search products..."
// //             className="px-4 py-2 border rounded-lg text-[#22202E] w-full text-sm sm:text-base"
// //           />
// //           <FaSearch className="text-[#22202E] cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" size={16} />
// //         </div>
// //       </div>

// //       <div className="w-full mt-4 sm:px-4 md:px-6 lg:px-8 py-2">
// //         {searchQuery.length > 2 && searchResults.length > 0 ? (
// //           <div className="bg-white shadow-md rounded-lg mt-2 max-h-64 overflow-y-auto">
// //             <ul>
// //               {searchResults.map((product) => (
// //                 <li key={product._id} className="flex items-center p-4 border-b">
// //                   <Image src={product.image?.asset?.url} alt={product.name} className="w-12 h-12 object-cover rounded" />
// //                   <button onClick={() => handleSearchResultClick(product.slug.current)} className="ml-4 text-sm sm:text-base text-[#2a254b] w-full text-left">
// //                     {product.name}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ) : searchQuery.length > 2 && searchResults.length === 0 ? (
// //           <div className="bg-white shadow-md rounded-lg mt-2 p-4 text-center text-gray-600 text-sm">
// //             No products found.
// //           </div>
// //         ) : null}
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";
// // import { useState } from "react";
// // import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
// // import Link from "next/link";
// // import { useCart } from "../../context/cartContext"; // Import the cart context
// // import { client } from "../../sanity/lib/client"; // Replace with your Sanity client instance

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "About", href: "/about" },
// //   { label: "Cart", href: "/cart" },
// //   { label: "Products", href: "/products" },
// //   { label: "Plant Pots", href: "/" },
// //   { label: "Ceramics", href: "/" },
// //   { label: "Tables", href: "/" },
// //   { label: "Chairs", href: "/" },
// //   { label: "Crockery", href: "/" },
// //   { label: "Tableware", href: "/" },
// //   { label: "Cutlery", href: "/" },
// // ];

// // export default function TopNav() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);
// //   const { cartItems } = useCart(); // Get cart items from context

// //   const toggleMenu = () => {
// //     setMenuOpen((prevState) => !prevState);
// //   };

// //   const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in cart

// //   // Fetch search results from Sanity
// //   const handleSearch = async (query) => {
// //     setSearchQuery(query);

// //     if (query.trim() === "") {
// //       setSearchResults([]);
// //       return;
// //     }

// //     const results = await client.fetch(
// //       `*[_type == "product" && name match "${query}*"]{_id, name, slug, image}`
// //     );
// //     setSearchResults(results);
// //   };

// //   const clearSearch = () => {
// //     setSearchQuery("");
// //     setSearchResults([]);
// //   };

// //   return (
// //     <div className="w-full bg-white flex flex-col mx-auto relative">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
// //         {/* Search Input */}
// //         <div className="relative w-full max-w-[300px] hidden sm:flex items-center">
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={(e) => handleSearch(e.target.value)}
// //             placeholder="Search products..."
// //             className="w-full border rounded-md p-2 text-sm focus:outline-none"
// //           />
// //           <button onClick={clearSearch} className="absolute right-2 text-gray-400">
// //             ✕
// //           </button>
// //           {/* Search Results */}
// //           {searchResults.length > 0 && (
// //             <div className="absolute bg-white shadow-md mt-2 w-full max-h-[200px] overflow-auto z-10 border border-gray-300 rounded-md">
// //               {searchResults.map((product) => (
// //                 <Link
// //                   key={product._id}
// //                   href={`/product/${product.slug.current}`}
// //                   className="block px-4 py-2 text-sm hover:bg-gray-100"
// //                   onClick={clearSearch}
// //                 >
// //                   <div className="flex items-center space-x-2">
// //                     <img
// //                       src={product.image?.asset?.url || "/placeholder.jpg"}
// //                       alt={product.name}
// //                       className="w-8 h-8 object-cover rounded-md"
// //                     />
// //                     <span>{product.name}</span>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Center Section: Logo */}
// //         <div className="flex items-center justify-center w-full md:w-auto">
// //           <p
// //             className="text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center"
// //             style={{ letterSpacing: "0.5px" }}
// //           >
// //             Avion
// //           </p>
// //         </div>

// //         {/* Right Section: Shopping Cart and User Avatar */}
// //         <div className="flex items-center space-x-4 md:space-x-6">
// //           <a href="/cart" aria-label="Shopping Cart">
// //             <div className="relative">
// //               <FaShoppingCart className="text-black" size={14} />
// //               {cartItemCount > 0 && (
// //                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
// //                   {cartItemCount}
// //                 </span>
// //               )}
// //             </div>
// //           </a>
// //           <a href="/profile" aria-label="User Profile">
// //             <div className="w-[32px] h-[32px] flex items-center justify-center">
// //               <FaUser className="text-black" size={14} />
// //             </div>
// //           </a>
// //         </div>

// //         {/* Mobile Menu Icon */}
// //         <div className="flex items-center sm:hidden absolute left-4">
// //           <FaBars
// //             className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg"
// //             size={24}
// //             onClick={toggleMenu}
// //           />
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="w-full sm:hidden flex flex-col items-start space-y-4 py-4 bg-white shadow-lg z-10 border-t border-gray-400">
// //           {navLinks.map((link, index) => (
// //             <Link
// //               key={index}
// //               href={link.href}
// //               className="text-[#726E8D] text-[14px] md:text-[16px] font-sathoshi hover:text-black transition-colors px-4 py-2 w-full text-left"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // // }



// // "use client";
// // import { useState } from "react";
// // import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
// // import Link from "next/link";
// // import { useCart } from "../../context/cartContext"; // Import the cart context
// // import { client } from "../../sanity/lib/client"; // Replace with your Sanity client instance
// // import Image from "next/image"; // Use Next.js Image component

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "About", href: "/about" },
// //   { label: "Cart", href: "/cart" },
// //   { label: "Products", href: "/products" },
// //   { label: "Plant Pots", href: "/" },
// //   { label: "Ceramics", href: "/" },
// //   { label: "Tables", href: "/" },
// //   { label: "Chairs", href: "/" },
// //   { label: "Crockery", href: "/" },
// //   { label: "Tableware", href: "/" },
// //   { label: "Cutlery", href: "/" },
// // ];

// // export default function TopNav() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);
// //   const { cartItems } = useCart(); // Get cart items from context

// //   const toggleMenu = () => {
// //     setMenuOpen((prevState) => !prevState);
// //   };

// //   const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in cart

// //   // Fetch search results from Sanity
// //   const handleSearch = async (query) => {
// //     setSearchQuery(query);

// //     if (query.trim() === "") {
// //       setSearchResults([]);
// //       return;
// //     }

// //     const results = await client.fetch(
// //       `*[_type == "product" && name match "${query}*"]{_id, name, slug, image}`
// //     );
// //     setSearchResults(results);
// //   };

// //   const clearSearch = () => {
// //     setSearchQuery("");
// //     setSearchResults([]);
// //   };

// //   return (
// //     <div className="w-full bg-white flex flex-col mx-auto relative">
// //       {/* Top Section */}
// //       <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
// //         {/* Search Input */}
// //         <div className="relative w-full max-w-[300px] hidden sm:flex items-center">
// //           <input
// //             type="text"
// //             value={searchQuery}
// //             onChange={(e) => handleSearch(e.target.value)}
// //             placeholder="Search products..."
// //             className="w-full border rounded-md p-2 text-sm focus:outline-none"
// //           />
// //           <button onClick={clearSearch} className="absolute right-2 text-gray-400">
// //             ✕
// //           </button>
// //           {/* Search Results */}
// //           {searchResults.length > 0 && (
// //             <div className="absolute bg-white shadow-md mt-2 w-full max-h-[200px] overflow-auto z-10 border border-gray-300 rounded-md">
// //               {searchResults.map((product) => (
// //                 <Link
// //                   key={product._id}
// //                   href={`/product/${product.slug.current}`}
// //                   className="block px-4 py-2 text-sm hover:bg-gray-100"
// //                   onClick={clearSearch}
// //                 >
// //                   <div className="flex items-center space-x-2">
// //                     <Image
// //                       src={product.image?.asset?.url || "/placeholder.jpg"}
// //                       alt={product.name}
// //                       width={32}
// //                       height={32}
// //                       className="object-cover rounded-md"
// //                     />
// //                     <span>{product.name}</span>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Center Section: Logo */}
// //         <div className="flex items-center justify-center w-full md:w-auto">
// //           <p
// //             className="text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center"
// //             style={{ letterSpacing: "0.5px" }}
// //           >
// //             Avion
// //           </p>
// //         </div>

// //         {/* Right Section: Shopping Cart and User Avatar */}
// //         <div className="flex items-center space-x-4 md:space-x-6">
// //           <a href="/cart" aria-label="Shopping Cart">
// //             <div className="relative">
// //               <FaShoppingCart className="text-black" size={14} />
// //               {cartItemCount > 0 && (
// //                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
// //                   {cartItemCount}
// //                 </span>
// //               )}
// //             </div>
// //           </a>
// //           <a href="/profile" aria-label="User Profile">
// //             <div className="w-[32px] h-[32px] flex items-center justify-center">
// //               <FaUser className="text-black" size={14} />
// //             </div>
// //           </a>
// //         </div>

// //         {/* Mobile Menu Icon */}
// //         <div className="flex items-center sm:hidden absolute left-4">
// //           <FaBars
// //             className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg"
// //             size={24}
// //             onClick={toggleMenu}
// //           />
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="w-full sm:hidden flex flex-col items-start space-y-4 py-4 bg-white shadow-lg z-10 border-t border-gray-400">
// //           {navLinks.map((link, index) => (
// //             <Link
// //               key={index}
// //               href={link.href}
// //               className="text-[#726E8D] text-[14px] md:text-[16px] font-sathoshi hover:text-black transition-colors px-4 py-2 w-full text-left"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// "use client";
// import { useRouter } from 'next/navigation';

// import { useState } from "react";

// import { FaSearch, FaShoppingCart, FaUser, FaBars, FaHeart } from "react-icons/fa";
// import Link from "next/link";
// import { useCart } from "../../context/cartContext";
// import { useWishlist } from "../../context/wishListContext";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   slug: {
//     current: string;
//   };
// }

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Cart", href: "/cart" },
//   { label: "Products", href: "/products" },
//   { label: "Plant Pots", href: "/category/plant-pots" },
//   { label: "Ceramics", href: "/category/ceramics" },
//   { label: "Tables", href: "/category/tables" },
//   { label: "Chairs", href: "/category/chairs" },
//   { label: "Crockery", href: "/category/crockery" },
//   { label: "Tableware", href: "/category/tableware" },
//   { label: "Cutlery", href: "/category/cutlery" },
// ];

// export default function TopNav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<Product[]>([]);
//   const { cartItems } = useCart();
//   const { wishlistItems } = useWishlist();
//   const router = useRouter(); // Router instance for navigation

//   const toggleMenu = () => setMenuOpen((prevState) => !prevState);

//   const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const wishlistItemCount = wishlistItems.length;

//   const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.length > 2) {
//       const groqQuery = `*[_type == "product" && (name match $query || description match $query)] {
//         _id,
//         name,
//         price,
//         description,
//         image { asset -> { url } },
//         slug
//       }`;
//       const products = await client.fetch(groqQuery, { query: `*${query}*` });
//       setSearchResults(products);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleSearchResultClick = (slug: string) => {
//     setSearchQuery("");
//     setSearchResults([]);
//     router.push(`/product/${slug}`);
//   };

//   return (
//     <div className="w-full bg-white flex flex-col mx-auto relative">
//       {/* Top Section */}
//       <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
//         {/* Logo */}
//         <div className="flex items-center justify-center w-full md:w-auto">
//           <Link href="/">
//             <p
//               className="text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center"
//               style={{ letterSpacing: "0.5px" }}
//             >
//               Avion
//             </p>
//           </Link>
//         </div>

//         {/* Wishlist, Cart, User */}
//         <div className="flex items-center space-x-4 md:space-x-6">
//           <Link href="/wishlist" aria-label="Wishlist">
//             <div className="relative">
//               <FaHeart className="text-black" size={16} />
//               {wishlistItemCount > 0 && (
//                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
//                   {wishlistItemCount}
//                 </span>
//               )}
//             </div>
//           </Link>

//           <Link href="/cart" aria-label="Shopping Cart">
//             <div className="relative">
//               <FaShoppingCart className="text-black" size={14} />
//               {cartItemCount > 0 && (
//                 <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
//                   {cartItemCount}
//                 </span>
//               )}
//             </div>
//           </Link>

//           <Link href="/profile" aria-label="User Profile">
//             <div className="w-[32px] h-[32px] flex items-center justify-center">
//               <FaUser className="text-black" size={14} />
//             </div>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="flex items-center sm:hidden absolute left-4">
//           <FaBars
//             className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg"
//             size={24}
//             onClick={toggleMenu}
//           />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="w-full sm:px-4 md:px-6 lg:px-8 py-2 mt-4">
//         <div className="relative w-full">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search products..."
//             className="px-4 py-2 border rounded-lg text-[#22202E] w-full"
//           />
//           <FaSearch className="text-[#22202E] cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" size={16} />
//         </div>
//       </div>

//       {/* Search Suggestions */}
//       {searchQuery.length > 2 && (
//         <div className="w-full sm:px-4 md:px-6 lg:px-8 py-2">
//           {searchResults.length > 0 ? (
//             <div className="bg-white shadow-md rounded-lg mt-2 max-h-64 overflow-y-auto">
//               <ul>
//                 {searchResults.map((product) => (
//                   <li key={product._id} className="flex items-center p-4 border-b">
//                     <Image
//                       src={product.image?.asset?.url}
//                       alt={product.name}
//                       width={48}
//                       height={48}
//                       className="object-cover rounded"
//                     />
//                     <button
//                       onClick={() => handleSearchResultClick(product.slug.current)}
//                       className="ml-4 text-[#2a254b] w-full text-left"
//                     >
//                       {product.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <div className="bg-white shadow-md rounded-lg mt-2 p-4 text-center text-gray-600">
//               No products found.
//             </div>
//           )}
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="w-full sm:hidden flex flex-col items-start space-y-4 py-4 bg-white shadow-lg z-10 border-t border-gray-400">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="text-[#726E8D] text-[14px] md:text-[16px] font-sathoshi hover:text-black transition-colors px-4 py-2 w-full text-left"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Desktop Navigation */}
//       <div className="w-full hidden sm:flex justify-center space-x-6 md:space-x-8 mt-4 py-4">
//         {navLinks.map((link, index) => (
//           <Link
//             key={index}
//             href={link.href}
//             className="text-[#726E8D] text-[14px] sm:text-[16px] font-sathoshi hover:text-black transition-colors"
//           >
//             {link.label}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishListContext";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cart", href: "/cart" },
  { label: "Products", href: "/products" },
  { label: "Plant Pots", href: "/category/plant-pots" },
  { label: "Ceramics", href: "/category/ceramics" },
  { label: "Tables", href: "/category/tables" },
  { label: "Chairs", href: "/category/chairs" },
  { label: "Crockery", href: "/category/crockery" },
  { label: "Tableware", href: "/category/tableware" },
  { label: "Cutlery", href: "/category/cutlery" },
];

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  // const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);

  //   if (query.length > 2) {
  //     const groqQuery = `*[_type == "product" && (name match $query || description match $query)] {
  //       _id,
  //       name,
  //       price,
  //       description,
  //       image { asset -> { url } },
  //       slug
  //     }`;
  //       try {
  //       const products = await client.fetch(groqQuery,  );
  //       setSearchResults(products);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setSearchResults([]); // Clear results on error
  //     }

      
  //   } else { 
  //     setSearchResults([]);
  //   }
  // };


  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  
    if (query.length > 2) {
      const groqQuery = `*[_type == "product" && (name match $query || description match $query)] {
        _id,
        name,
        price,
        description,
        image { asset -> { url } },
        slug
      }`;
      try {
        const params: Record<string, string> = { query }; // Explicitly define the type for params
        const products = await client.fetch(groqQuery, params); // Pass params to fetch
        setSearchResults(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };
  

  const handleSearchResultClick = (slug: string) => {
    setSearchQuery("");
    setSearchResults([]);
    router.push(`/product/${slug}`);
  };

  return (
    <div className="w-full bg-white flex flex-col mx-auto relative">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 sm:h-[132px] border-b-[2px] border-gray-200">
        {/* Logo */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <Link href="/">
            <p
              className="text-[#22202E] font-clash text-[20px] md:text-[24px] leading-[30px] text-center"
              style={{ letterSpacing: "0.5px" }}
            >
              Avion
            </p>
          </Link>
        </div>

        {/* Wishlist, Cart, User */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/wishlist" aria-label="Wishlist">
            <div className="relative">
              <FaHeart className="text-black" size={16} />
              {wishlistItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {wishlistItemCount}
                </span>
              )}
            </div>
          </Link>

          <Link href="/cart" aria-label="Shopping Cart">
            <div className="relative">
              <FaShoppingCart className="text-black" size={14} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>

          <Link href="/profile" aria-label="User Profile">
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <FaUser className="text-black" size={14} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center sm:hidden absolute left-4">
          <FaBars
            className="text-[#22202E] cursor-pointer border border-[#22202E] p-2 rounded-lg"
            size={24}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full sm:px-4 md:px-6 lg:px-8 py-2 mt-4">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg text-[#22202E] w-full"
          />
          <FaSearch className="text-[#22202E] cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" size={16} />
        </div>
      </div>

      {/* Search Suggestions */}
      {searchQuery.length > 2 && (
        <div className="w-full sm:px-4 md:px-6 lg:px-8 py-2">
          {searchResults.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg mt-2 max-h-64 overflow-y-auto">
              <ul>
                {searchResults.map((product) => (
                  <li key={product._id} className="flex items-center p-4 border-b">
                    <Image
                      src={product.image?.asset?.url}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="object-cover rounded"
                    />
                    <button
                      onClick={() => handleSearchResultClick(product.slug.current)}
                      className="ml-4 text-[#2a254b] w-full text-left"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg mt-2 p-4 text-center text-gray-600">
              No products found.
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full sm:hidden flex flex-col items-start space-y-4 py-4 bg-white shadow-lg z-10 border-t border-gray-400">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[#726E8D] text-[14px] md:text-[16px] font-sathoshi hover:text-black transition-colors px-4 py-2 w-full text-left"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="w-full hidden sm:flex justify-center space-x-6 md:space-x-8 mt-4 py-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-[#726E8D] text-[14px] sm:text-[16px] font-sathoshi hover:text-black transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}