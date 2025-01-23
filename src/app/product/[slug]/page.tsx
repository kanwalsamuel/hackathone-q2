
// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { client } from "../../../sanity/lib/client"; // Adjust the import based on your project structure
// // // import Image from "next/image";
// // // import { useWishlist } from "../../../context/wishListContext"; // Adjust the import based on where your WishlistContext is located
// // // import Link from "next/link"; // Import Link from Next.js for routing

// // // interface Product {
// // //   _id: string;
// // //   name: string;
// // //   description: string;
// // //   price: number;
// // //   image: {
// // //     asset: {
// // //       url: string;
// // //     };
// // //   };
// // //   dimensions: {
// // //     height: string;
// // //     width: string;
// // //     depth: string;
// // //   };
// // //   deliveryTime: string;
// // //   returnPolicy: string;
// // //   quantity: number;
// // //   rating: number;
// // //   inStock: boolean;
// // //   features: string[];
// // // }

// // // export default function ProductDetail({ params }: { params: { slug: Promise<string> } }) {
// // //   const { slug } = React.use(params); // Unwrap the slug from the Promise

// // //   const { wishlistItems, addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

// // //   const [product, setProduct] = useState<Product | null>(null);

// // //   // Fetch product data from Sanity
// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       const query = `*[_type == "product" && slug.current == $slug][0] {
// // //         _id,
// // //         name,
// // //         price,
// // //         description,
// // //         dimensions { height, width, depth },
// // //         image { asset -> { url }},
// // //         deliveryTime,
// // //         returnPolicy,
// // //         quantity,
// // //         rating,
// // //         features,
// // //         "inStock": quantity > 0
// // //       }`;

// // //       const productData = await client.fetch(query, { slug });
// // //       setProduct(productData);
// // //     };

// // //     if (slug) fetchProduct();
// // //   }, [slug]);

// // //   if (!product) return <div>Loading...</div>;

// // //   const handleWishlistClick = () => {
// // //     if (isProductInWishlist(product._id)) {
// // //       removeFromWishlist(product._id);
// // //     } else {
// // //       addToWishlist({
// // //         _id: product._id,
// // //         name: product.name,
// // //         price: product.price,
// // //         image: product.image?.asset?.url || "/fallback-image.jpg",
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-7xl mx-auto p-6 bg-gradient-to-r from-gray-50 to-white">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
// // //         {/* Product Image */}
// // //         <div className="flex justify-center">
// // //           <Image
// // //             src={product.image?.asset?.url || "/fallback-image.jpg"}
// // //             alt={product.name}
// // //             width={350}
// // //             height={300}
// // //             objectFit="contain"
// // //             className="rounded-lg transition-all duration-300"
// // //           />
// // //         </div>

// // //         {/* Product Details */}
// // //         <div className="space-y-6">
// // //           <h1 className="text-[#2A254B] text-3xl md:text-4xl font-bold">{product.name}</h1>
// // //           <p className="text-lg text-gray-700">{product.description}</p>

// // //           <h3 className="text-2xl text-green-600 font-bold">€{product.price}</h3>

// // //           {/* Stock Status */}
// // //           <p className={`text-lg text-[#2A254B] font-sathosifont-semibold Price:${product.inStock ? "text-green-500" : "text-red-500"}`}>
// // //             {product.inStock ? "In Stock" : "Out of Stock"}
// // //           </p>

// // //           {/* Delivery Time and Return Policy */}
// // //           <p className="text-md text-[#2A254B] ">
// // //             Delivery Time: <span className="text-sm text-[#2A254B] ">7 to 12 days</span>
// // //           </p>
// // //           <p className="text-md  text-[#2A254B] ">
// // //             Return Policy: <span className="text-sm  text-[#2A254B] ">In 12days </span>
// // //           </p>

// // //           {/* Product Dimensions */}
// // //           <div className="space-y-2">
// // //             <h4 className="text-lg font-semibold text-[#2A254B] ">Dimensions</h4>
// // //             <p className="text-[#2A254B] font-sathosi">Height: {product.dimensions.height}</p>
// // //             <p className="text-[#2A254B] font-sathosi">Width: {product.dimensions.width}</p>
// // //             <p className="text-[#2A254B] font-sathosi">Depth: {product.dimensions.depth}</p>
// // //           </div>

// // //           {/* Features */}
// // //           <div className="space-y-2">
// // //             <h4 className="text-lg font-semibold text-[#2A254B] ">Features</h4>
// // //             <ul className="list-disc pl-5">
// // //               {product.features.map((feature, index) => (
// // //                 <li key={index} className="text-gray-700">{feature}</li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Rating */}
// // //           <div className="flex items-center">
// // //             <span className="text-yellow-500 font-semibold">{product.rating}</span>
// // //             <span className="ml-2 text-gray-600 "> Rating:5.0</span>
// // //           </div>

// // //           {/* Action Buttons */}
// // //           <div className="flex flex-col md:flex-row gap-4 mt-4">
// // //             {/* Add to Cart Button with Link */}
// // //             <Link href="/cart" className="w-full md:w-auto px-6 py-3 bg-[#2A254B] text-white rounded-lg shadow hover:bg-[#3E3B63] transition">
// // //               🛒 Add to Cart
// // //             </Link>

// // //             {/* Add to Wishlist Button */}
// // //             <button
// // //               className={`w-full md:w-auto px-6 py-3 ${isProductInWishlist(product._id) ? "bg-red-500" : "bg-white"} border border-[#2A254B] text-[#2A254B] rounded-lg shadow hover:bg-gray-100 transition`}
// // //               onClick={handleWishlistClick}
// // //             >
// // //               {isProductInWishlist(product._id) ? "Remove from Wishlist" : "❤️ Add to Wishlist"}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Sticky Add to Cart Button */}
// // //       <div className="fixed bottom-6 right-6">
// // //         <Link href="/cart" className="w-14 h-14 bg-[#2A254B] text-white rounded-full shadow-lg hover:scale-105 transition">
// // //           🛒
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { client } from "../../../sanity/lib/client"; // Adjust the import based on your project structure
// // import Image from "next/image";
// // import { useWishlist } from "../../../context/wishListContext"; // Adjust the import based on where your WishlistContext is located
// // import Link from "next/link"; // Import Link from Next.js for routing
// // import TopNav from "../../components/nav"; // Adjust based on your project structure

// // interface Product {
// //   _id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   image: {
// //     asset: {
// //       url: string;
// //     };
// //   };
// //   dimensions: {
// //     height: string;
// //     width: string;
// //     depth: string;
// //   };
// //   deliveryTime: string;
// //   returnPolicy: string;
// //   quantity: number;
// //   rating: number;
// //   inStock: boolean;
// //   features: string[];
// // }

// // export default function ProductDetail({ params }: { params: { slug: Promise<string> } }) {
// //   const { slug } = React.use(params); // Unwrap the slug from the Promise

// //   const { wishlistItems, addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

// //   const [product, setProduct] = useState<Product | null>(null);

// //   // Fetch product data from Sanity
// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       const query = `*[_type == "product" && slug.current == $slug][0] {
// //         _id,
// //         name,
// //         price,
// //         description,
// //         dimensions { height, width, depth },
// //         image { asset -> { url }},
// //         deliveryTime,
// //         returnPolicy,
// //         quantity,
// //         rating,
// //         features,
// //         "inStock": quantity > 0
// //       }`;

// //       const productData = await client.fetch(query, { slug });
// //       setProduct(productData);
// //     };

// //     if (slug) fetchProduct();
// //   }, [slug]);

// //   if (!product) return <div>Loading...</div>;

// //   const handleWishlistClick = () => {
// //     if (isProductInWishlist(product._id)) {
// //       removeFromWishlist(product._id);
// //     } else {
// //       addToWishlist({
// //         _id: product._id,
// //         name: product.name,
// //         price: product.price,
// //         image: product.image?.asset?.url || "/fallback-image.jpg",
// //       });
// //     }
// //   };

// //   return (
// //     <div className="bg-gradient-to-r from-gray-50 to-white min-h-screen">
// //       <TopNav /> {/* Top Navigation Bar */}

// //       <div className="max-w-7xl mx-auto p-6">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
// //           {/* Product Image */}
// //           <div className="flex justify-center">
// //             <Image
// //               src={product.image?.asset?.url || "/fallback-image.jpg"}
// //               alt={product.name}
// //               width={350}
// //               height={300}
// //               objectFit="contain"
// //               className="rounded-lg transition-all duration-300"
// //             />
// //           </div>

// //           {/* Product Details */}
// //           <div className="space-y-6">
// //             <h1 className="text-[#2A254B] text-3xl md:text-4xl font-bold">{product.name}</h1>
// //             <p className="text-lg text-gray-700">{product.description}</p>

// //             <h3 className="text-2xl text-green-600 font-bold">€{product.price}</h3>

// //             {/* Stock Status */}
// //             <p className={`text-lg text-[#2A254B] font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
// //               {product.inStock ? "In Stock" : "Out of Stock"}
// //             </p>

// //             {/* Delivery Time and Return Policy */}
// //             <p className="text-md text-[#2A254B]">
// //               Delivery Time: <span className="text-sm text-[#2A254B]">7 to 12 days</span>
// //             </p>
// //             <p className="text-md text-[#2A254B]">
// //               Return Policy: <span className="text-sm text-[#2A254B]">In 12 days</span>
// //             </p>

// //             {/* Product Dimensions */}
// //             <div className="space-y-2">
// //               <h4 className="text-lg font-semibold text-[#2A254B]">Dimensions</h4>
// //               <p className="text-[#2A254B]">Height: {product.dimensions.height}</p>
// //               <p className="text-[#2A254B]">Width: {product.dimensions.width}</p>
// //               <p className="text-[#2A254B]">Depth: {product.dimensions.depth}</p>
// //             </div>

// //             {/* Features */}
// //             <div className="space-y-2">
// //               <h4 className="text-lg font-semibold text-[#2A254B]">Features</h4>
// //               <ul className="list-disc pl-5">
// //                 {product.features.map((feature, index) => (
// //                   <li key={index} className="text-gray-700">{feature}</li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Rating */}
// //             <div className="flex items-center">
// //               <span className="text-yellow-500 font-semibold">{product.rating}</span>
// //               <span className="ml-2 text-gray-600">Rating: 5.0</span>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-col md:flex-row gap-4 mt-4">
// //               {/* Add to Cart Button with Link */}
// //               <Link href="/cart" className="w-full md:w-auto px-6 py-3 bg-[#2A254B] text-white rounded-lg shadow hover:bg-[#3E3B63] transition">
// //                 🛒 Add to Cart
// //               </Link>

// //               {/* Add to Wishlist Button */}
// //               <button
// //                 className={`w-full md:w-auto px-6 py-3 ${isProductInWishlist(product._id) ? "bg-red-500" : "bg-white"} border border-[#2A254B] text-[#2A254B] rounded-lg shadow hover:bg-gray-100 transition`}
// //                 onClick={handleWishlistClick}
// //               >
// //                 {isProductInWishlist(product._id) ? "Remove from Wishlist" : "❤️ Add to Wishlist"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Sticky Add to Cart Button */}
// //         <div className="fixed bottom-6 right-6">
// //           <Link href="/cart" className="w-14 h-14 bg-[#2A254B] text-white rounded-full shadow-lg hover:scale-105 transition">
// //             🛒
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "../../../sanity/lib/client"; // Adjust the import based on your project structure
// import Image from "next/image";
// import { useWishlist } from "../../../context/wishListContext"; // Adjust the import based on where your WishlistContext is located
// import Link from "next/link"; // Import Link from Next.js for routing
// import TopNav from "../../components/nav"; // Adjust based on your project structure

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
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   deliveryTime: string;
//   returnPolicy: string;
//   quantity: number;
//   rating: number;
//   inStock: boolean;
//   features: string[];
// }

// export default function ProductDetail({ params }: { params: { slug: Promise<string> } }) {
//   const { slug } = React.use(params); // Unwrap the slug from the Promise

//   const { wishlistItems, addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

//   const [product, setProduct] = useState<Product | null>(null);

//   // Fetch product data from Sanity
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         price,
//         description,
//         dimensions { height, width, depth },
//         image { asset -> { url }},
//         deliveryTime,
//         returnPolicy,
//         quantity,
//         rating,
//         features,
//         "inStock": quantity > 0
//       }`;

//       const productData = await client.fetch(query, { slug });
//       setProduct(productData);
//     };

//     if (slug) fetchProduct();
//   }, [slug]);

//   if (!product) return <div>Loading...</div>;

//   const handleWishlistClick = () => {
//     if (isProductInWishlist(product._id)) {
//       removeFromWishlist(product._id);
//     } else {
//       addToWishlist({
//         _id: product._id,
//         name: product.name,
//         price: product.price,
//         image: product.image?.asset?.url || "/fallback-image.jpg",
//       });
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-50 to-white min-h-screen">
//       <TopNav /> {/* Top Navigation Bar */}

//       <div className="max-w-7xl mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
//           {/* Product Image with Hover Effect */}
//           <div className="flex justify-center group">
//             <div className="relative group-hover:scale-105 transition-all duration-300 mb-28">
//               <Image
//                 src={product.image?.asset?.url || "/fallback-image.jpg"}
//                 alt={product.name}
//                 width={450} // Increased size for a larger image
//                 height={450}
//                 objectFit="contain"
//                 className="rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Product Details with Box Shadow */}
//           <div className="bg-white p-6 rounded-lg shadow-xl space-y-6 transition-all duration-300 h-[300px">
//             <h1 className="text-[#2A254B] text-3xl md:text-2xl font-bold leading-tight hover:text-[#3E3B63]">
//               {product.name}
//             </h1>
//             <p className="text-lg text-gray-700 mt-2">{product.description}</p>

//             <h3 className="text-2xl text-green-600 font-bold mt-2">€{product.price}</h3>

//             {/* Stock Status */}
//             <p className={`text-lg text-[#2A254B] font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
//               {product.inStock ? "In Stock" : "Out of Stock"}
//             </p>

//             {/* Delivery Time and Return Policy */}
//             <div className="space-y-2">
//               <p className="text-md text-[#2A254B]">
//                 Delivery Time: <span className="text-sm text-[#2A254B]">7 to 12 days</span>
//               </p>
//               <p className="text-md text-[#2A254B]">
//                 Return Policy: <span className="text-sm text-[#2A254B]">In 12 days</span>
//               </p>
//             </div>

//             {/* Product Dimensions */}
//             <div className="space-y-2">
//               <h4 className="text-lg font-semibold text-[#2A254B]">Dimensions</h4>
//               <p className="text-[#2A254B]">Height: {product.dimensions.height}</p>
//               <p className="text-[#2A254B]">Width: {product.dimensions.width}</p>
//               <p className="text-[#2A254B]">Depth: {product.dimensions.depth}</p>
//             </div>

//             {/* Features */}
//             <div className="space-y-2">
//               <h4 className="text-lg font-semibold text-[#2A254B]">Features</h4>
//               <ul className="list-disc pl-5">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="text-gray-700">{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center">
//               <span className="text-yellow-500 font-semibold">{product.rating}</span>
//               <span className="ml-2 text-gray-600">Rating: 5.0</span>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col md:flex-row gap-4 mt-4">
//               {/* Add to Cart Button with Link */}
//               <Link href="/cart" className="w-full md:w-auto px-6 py-3 bg-[#2A254B] text-white rounded-lg shadow-lg hover:bg-[#3E3B63] hover:scale-105 transition">
//                 🛒 Add to Cart
//               </Link>

//               {/* Add to Wishlist Button */}
//               <button
//                 className={`w-full md:w-auto sm:w-40 px-6 py-3 ${isProductInWishlist(product._id) ? "bg-red-500" : "bg-white"} border border-[#2A254B] text-[#2A254B] rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition`}
//                 onClick={handleWishlistClick}
//               >
//                 {isProductInWishlist(product._id) ? "Remove from Wishlist" : "❤️ Add to Wishlist"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sticky Add to Cart Button */}
        
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "../../../sanity/lib/client"; // Adjust the import based on your project structure
// import Image from "next/image";
// import { useWishlist } from "../../../context/wishListContext"; // Adjust the import based on where your WishlistContext is located
// import Link from "next/link"; // Import Link from Next.js for routing
// import TopNav from "../../components/nav"; // Adjust based on your project structure

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
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   deliveryTime: string;
//   returnPolicy: string;
//   quantity: number;
//   rating: number;
//   inStock: boolean;
//   features: string[];
// }

// export default function ProductDetail({ params }: { params: { slug: Promise<string> } }) {
//   const { slug } = React.use(params); // Unwrap the slug from the Promise

//   const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

//   const [product, setProduct] = useState<Product | null>(null);

//   // Fetch product data from Sanity
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         price,
//         description,
//         dimensions { height, width, depth },
//         image { asset -> { url }},
//         deliveryTime,
//         returnPolicy,
//         quantity,
//         rating,
//         features,
//         "inStock": quantity > 0
//       }`;

//       const productData = await client.fetch(query, { slug });
//       setProduct(productData);
//     };

//     if (slug) fetchProduct();
//   }, [slug]);

//   if (!product) return <div>Loading...</div>;

//   const handleWishlistClick = () => {
//     if (isProductInWishlist(product._id)) {
//       removeFromWishlist(product._id);
//     } else {
//       addToWishlist({
//         _id: product._id,
//         name: product.name,
//         price: product.price,
//         image: product.image?.asset?.url || "/fallback-image.jpg",
//       });
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-50 to-white min-h-screen">
//       <TopNav /> {/* Top Navigation Bar */}

//       <div className="max-w-7xl mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
//           {/* Product Image with Hover Effect */}
//           <div className="flex justify-center group">
//             <div className="relative group-hover:scale-105 transition-all duration-300 mb-28">
//               <Image
//                 src={product.image?.asset?.url || "/fallback-image.jpg"}
//                 alt={product.name}
//                 width={450} // Increased size for a larger image
//                 height={450}
//                 objectFit="contain"
//                 className="rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Product Details with Box Shadow */}
//           <div className="bg-white p-6 rounded-lg shadow-xl space-y-6 transition-all duration-300 h-[300px]">
//             <h1 className="text-[#2A254B] text-3xl md:text-2xl font-bold leading-tight hover:text-[#3E3B63]">
//               {product.name}
//             </h1>
//             <p className="text-lg text-gray-700 mt-2">{product.description}</p>

//             <h3 className="text-2xl text-green-600 font-bold mt-2">€{product.price}</h3>

//             {/* Stock Status */}
//             <p className={`text-lg text-[#2A254B] font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
//               {product.inStock ? "In Stock" : "Out of Stock"}
//             </p>

//             {/* Delivery Time and Return Policy */}
//             <div className="space-y-2">
//               <p className="text-md text-[#2A254B]">
//                 Delivery Time: <span className="text-sm text-[#2A254B]">7 to 12 days</span>
//               </p>
//               <p className="text-md text-[#2A254B]">
//                 Return Policy: <span className="text-sm text-[#2A254B]">In 12 days</span>
//               </p>
//             </div>

//             {/* Product Dimensions */}
//             <div className="space-y-2">
//               <h4 className="text-lg font-semibold text-[#2A254B]">Dimensions</h4>
//               <p className="text-[#2A254B]">Height: {product.dimensions.height}</p>
//               <p className="text-[#2A254B]">Width: {product.dimensions.width}</p>
//               <p className="text-[#2A254B]">Depth: {product.dimensions.depth}</p>
//             </div>

//             {/* Features */}
//             <div className="space-y-2">
//               <h4 className="text-lg font-semibold text-[#2A254B]">Features</h4>
//               <ul className="list-disc pl-5">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="text-gray-700">{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center">
//               <span className="text-yellow-500 font-semibold">{product.rating}</span>
//               <span className="ml-2 text-gray-600">Rating: 5.0</span>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col md:flex-row gap-4 mt-4">
//               {/* Add to Cart Button with Link */}
//               <Link href="/cart" className="w-full md:w-auto px-6 py-3 bg-[#2A254B] text-white rounded-lg shadow hover:bg-[#3E3B63] transition">
//                 🛒 Add to Cart
//               </Link>

//               {/* Add to Wishlist Button */}
//               <button
//                 className={`w-full md:w-auto px-6 py-3 ${isProductInWishlist(product._id) ? "bg-red-500" : "bg-white"} border border-[#2A254B] text-[#2A254B] rounded-lg shadow hover:bg-gray-100 transition`}
//                 onClick={handleWishlistClick}
//               >
//                 {isProductInWishlist(product._id) ? "Remove from Wishlist" : "❤️ Add to Wishlist"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sticky Add to Cart Button */}
//         <div className="fixed bottom-6 right-6">
//           <Link href="/cart" className="w-14 h-14 bg-[#2A254B] text-white rounded-full shadow-lg hover:scale-105 transition">
//             🛒
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../../../context/wishListContext";
import TopNav from "../../components/nav";

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
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  deliveryTime: string;
  returnPolicy: string;
  quantity: number;
  rating: number | null;  // Allow null for rating
  inStock: boolean;
  features: string[];
}

export default function ProductDetail() {
  const params = useParams();
  const slug = params?.slug;

  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;

      const query = `*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        price,
        description,
        dimensions { height, width, depth },
        image { asset -> { url }},
        deliveryTime,
        returnPolicy,
        quantity,
        rating,
        features,
        "inStock": quantity > 0
      }`;

      const productData = await client.fetch(query, { slug });
      setProduct(productData);
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleWishlistClick = () => {
    if (isProductInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image?.asset?.url || "/fallback-image.jpg",
      });
    }
  };

  // Set a fallback value of 0 if the rating is null or undefined
  const rating = product.rating ?? 0;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white min-h-screen">
      <TopNav />

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          <div className="flex justify-center group">
            <div className="relative group-hover:scale-105 transition-all duration-300 mb-28">
              <Image
                src={product.image?.asset?.url || "/fallback-image.jpg"}
                alt={product.name}
                width={450}
                height={450}
                objectFit="contain"
                className="rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl space-y-6 transition-all duration-300 h-auto">
            <h1 className="text-[#2A254B] text-3xl md:text-2xl font-bold leading-tight hover:text-[#3E3B63]">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>

            <h3 className="text-2xl text-green-600 font-bold mt-2">€{product.price}</h3>

            <p
              className={`text-lg text-[#2A254B] font-semibold ${
                product.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>

            <div className="space-y-2">
              <p className="text-md text-[#2A254B]">
                Delivery Time: <span className="text-sm text-[#2A254B]">{product.deliveryTime}</span>
              </p>
              <p className="text-md text-[#2A254B]">
                Return Policy: <span className="text-sm text-[#2A254B]">{product.returnPolicy}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#2A254B]">Dimensions</h4>
              <p className="text-[#2A254B]">Height: {product.dimensions.height}</p>
              <p className="text-[#2A254B]">Width: {product.dimensions.width}</p>
              <p className="text-[#2A254B]">Depth: {product.dimensions.depth}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#2A254B]">Features</h4>
              <ul className="list-disc pl-5">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <span className="text-yellow-500 font-semibold">{rating}</span>
              <span className="ml-2 text-gray-600">Rating: {rating.toFixed(1)}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                href="/cart"
                className="w-full md:w-auto px-6 py-3 bg-[#2A254B] text-white rounded-lg shadow hover:bg-[#3E3B63] transition"
              >
                🛒 Add to Cart
              </Link>

              <button
                className={`w-full md:w-auto px-6 py-3 ${
                  isProductInWishlist(product._id) ? "bg-red-500" : "bg-white"
                } border border-[#2A254B] text-[#2A254B] rounded-lg shadow hover:bg-gray-100 transition`}
                onClick={handleWishlistClick}
              >
                {isProductInWishlist(product._id) ? "Remove from Wishlist" : "❤️ Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
