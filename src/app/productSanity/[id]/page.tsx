// // "use client";

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'next/navigation';
// // import { client } from "../../../sanity/lib/client";
// // import Image from 'next/image';
// // import { useCart } from '../../../context/cartContext';
// // import { useWishlist } from '../../../context/wishListContext'; // Import Wishlist Context
// // import TopNav from '@/app/components/nav';
// // import { FaHeart } from 'react-icons/fa';

// // type Product = {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   description: string;
// //   dimensions: {
// //     height: string;
// //     width: string;
// //     depth: string;
// //   };
// //   image: {
// //     asset: {
// //       url: string;
// //     };
// //   };
// //   deliveryTime: string;
// //   returnPolicy: string;
// //   quantity: number;
// //   rating: number;
// // };

// // const ProductDetail: React.FC = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [reviews, setReviews] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const { addToCart, removeFromCart, updateQuantity, cartItems = [] } = useCart();
// //   const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

// //   const productInCart = cartItems.find(item => item.product._id === id);
// //   const isProductInCart = Boolean(productInCart);
// //   const isInWishlist = isProductInWishlist(id);

// //   useEffect(() => {
// //     if (id) {
// //       const fetchProduct = async () => {
// //         setLoading(true);
// //         const productQuery = `*[_type == "product" && _id == $id]{
// //           _id,
// //           name,
// //           price,
// //           description,
// //           dimensions { height, width, depth },
// //           image { asset -> { url }},
// //           deliveryTime,
// //           returnPolicy,
// //           quantity,
// //           rating
// //         }`;
// //         const productResult = await client.fetch(productQuery, { id });
// //         setProduct(productResult[0]);

// //         const reviewQuery = `*[_type == "review" && references($id)]{
// //           rating
// //         }`;
// //         const reviewResult = await client.fetch(reviewQuery, { id });
// //         setReviews(reviewResult);
// //         setLoading(false);
// //       };
// //       fetchProduct();
// //     }
// //   }, [id]);

// //   const averageRating = reviews.length
// //     ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
// //     : 0;

// //   const isInStock = (product?.quantity || 0) > 0;

// //   const handleAddToCart = () => {
// //     if (product) {
// //       addToCart(product);
// //     }
// //   };

// //   const handleRemoveFromCart = () => {
// //     if (product) {
// //       removeFromCart(product._id);
// //     }
// //   };

// //   const handleIncreaseQuantity = () => {
// //     if (productInCart) {
// //       updateQuantity(productInCart.product._id, productInCart.quantity + 1);
// //     }
// //   };

// //   const handleDecreaseQuantity = () => {
// //     if (productInCart && productInCart.quantity > 1) {
// //       updateQuantity(productInCart.product._id, productInCart.quantity - 1);
// //     }
// //   };

// //   const handleAddToWishlist = () => {
// //     if (product) {
// //       addToWishlist(product);
// //     }
// //   };

// //   const handleRemoveFromWishlist = () => {
// //     if (product) {
// //       removeFromWishlist(product._id);
// //     }
// //   };

// //   if (loading) return <div className="text-center text-2xl">Loading...</div>;
// //   if (!product) return <div className="text-center text-2xl">Product not found!</div>;

// //   return (
// //     <div className="product-detail mx-auto p-4 sm:p-6 w-full bg-gradient-to-r from-[#F3F4F6] to-[#FFFFFF]">
// //       <div className="bg-[#2A254B] text-white text-center py-2 sm:py-3 font-clash text-sm sm:text-lg md:text-xl animate-moveSlow">
// //         ✨ Free Delivery on Orders Over €500! ✨
// //       </div>

// //       <TopNav />

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
// //         <div className="product-image mb-6 sm:mb-8 flex justify-center rounded-lg shadow-xl overflow-hidden bg-white animate-slideIn hover:scale-105 transition-all duration-300">
// //           <Image
// //             src={product.image.asset.url || '/fallback-image.jpg'}
// //             alt={product.name}
// //             width={350}
// //             height={300}
// //             objectFit="contain"
// //             className="rounded-lg transition-all duration-300"
// //           />
// //         </div>

// //         <div className="product-info bg-white rounded-lg shadow-xl p-4 sm:p-6 space-y-4 sm:space-y-6 relative">
// //           <h1 className="text-xl sm:text-2xl font-clash text-[#2a254b]">{product.name}</h1>
// //           <div className="product-description">
// //             <h2 className="text-lg sm:text-xl font-satoshi text-[#2a254b]">Description</h2>
// //             <p className="text-xs sm:text-sm text-gray-600">{product.description || "No description available"}</p>
// //           </div>

// //           <p className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Price: €{product.price}</p>

// //           <div className="product-rating">
// //             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Rating</h2>
// //             <div className="flex items-center mt-2">
// //               <div className="w-full h-2 bg-gray-300 rounded-full">
// //                 <div
// //                   className="h-2 bg-yellow-400"
// //                   style={{ width: `${(averageRating / 5) * 100}%` }}
// //                 ></div>
// //               </div>
// //             </div>
// //             <p className="mt-2 text-xs sm:text-sm text-gray-600">{reviews.length} reviews</p>
// //           </div>

// //           <div className="product-delivery">
// //             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Delivery Time</h2>
// //             <p className="text-xs sm:text-sm text-gray-600">{product.deliveryTime || "5 to 7 days"}</p>
// //           </div>

// //           <div className="product-return">
// //             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Return Policy</h2>
// //             <p className="text-xs sm:text-sm text-gray-600">{product.returnPolicy || "12 days"}</p>
// //           </div>

// //           <div className="product-stock">
// //             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">In Stock</h2>
// //             <p className="text-xs sm:text-sm text-gray-600">{isInStock ? "Yes" : "Out of Stock"}</p>
// //           </div>

// //           <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:flex-row items-center justify-start sm:justify-between">
// //             {isProductInCart ? (
// //               <>
// //                 <div className="flex items-center gap-4">
// //                   <button
// //                     onClick={handleDecreaseQuantity}
// //                     className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
// //                   >
// //                     -
// //                   </button>

// //                   <span className="font-bold text-sm sm:text-xl text-black">{productInCart?.quantity}</span>

// //                   <button
// //                     onClick={handleIncreaseQuantity}
// //                     className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
// //                   >
// //                     +
// //                   </button>
// //                 </div>

// //                 <button
// //                   onClick={handleRemoveFromCart}
// //                   className="w-full sm:w-56 px-4 py-2 bg-red-600 text-white font-clash rounded-full hover:bg-red-700 transition-all duration-300"
// //                 >
// //                   ❌ Remove from Cart
// //                 </button>
// //               </>
// //             ) : (
// //               <button
// //                 onClick={handleAddToCart}
// //                 className="w-full sm:w-52 px-4 py-2 bg-gradient-to-r from-[#2a254b] to-[#3e3b63] text-white font-satoshi rounded-full hover:from-[#3e3b63] hover:to-[#2a254b] transition-all duration-300"
// //               >
// //                 🛒 Add to Cart
// //               </button>
// //             )}

// //             <button
// //               onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
// //               className="w-full sm:w-52 px-4 py-2 bg-[#2a254b] text-white font-satoshi transition-all  duration-300 rounded-full flex items-center justify-center gap-2 text-[14px]"
// //             >
// //               <FaHeart />
// //               {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
// //         <button
// //           onClick={handleAddToCart}
// //           className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#2a254b] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 text-[14px] font-satoshi"
// //         >
// //           🛒
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;




// "use client";

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { client } from "../../../sanity/lib/client";
// import Image from 'next/image';
// import { useCart } from '../../../context/cartContext';
// import { useWishlist } from '../../../context/wishListContext'; // Import Wishlist Context
// import TopNav from '@/app/components/nav';
// import { FaHeart } from 'react-icons/fa';

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   deliveryTime: string;
//   returnPolicy: string;
//   quantity: number;
//   rating: number;
// };

// type Review = {
//   _id: string;
//   rating: number;
// };

// const ProductDetail: React.FC = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [reviews, setReviews] = useState<Review[]>([]); // Updated to use Review type
//   const [loading, setLoading] = useState(true);
//   const { addToCart, removeFromCart, updateQuantity, cartItems = [] } = useCart();
//   const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

//   const productInCart = cartItems.find(item => item.product._id === id);
//   const isProductInCart = Boolean(productInCart);
//   const isInWishlist = isProductInWishlist(id);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         setLoading(true);
//         const productQuery = `*[_type == "product" && _id == $id]{
//           _id,
//           name,
//           price,
//           description,
//           dimensions { height, width, depth },
//           image { asset -> { url }},
//           deliveryTime,
//           returnPolicy,
//           quantity,
//           rating
//         }`;
//         const productResult = await client.fetch(productQuery, { id });
//         setProduct(productResult[0]);

//         const reviewQuery = `*[_type == "review" && references($id)]{
//           _id,
//           rating
//         }`;
//         const reviewResult = await client.fetch(reviewQuery, { id });
//         setReviews(reviewResult);
//         setLoading(false);
//       };
//       fetchProduct();
//     }
//   }, [id]);

//   const averageRating = reviews.length
//     ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
//     : 0;

//   const isInStock = (product?.quantity || 0) > 0;

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);
//     }
//   };

//   const handleRemoveFromCart = () => {
//     if (product) {
//       removeFromCart(product._id);
//     }
//   };

//   const handleIncreaseQuantity = () => {
//     if (productInCart) {
//       updateQuantity(productInCart.product._id, productInCart.quantity + 1);
//     }
//   };

//   const handleDecreaseQuantity = () => {
//     if (productInCart && productInCart.quantity > 1) {
//       updateQuantity(productInCart.product._id, productInCart.quantity - 1);
//     }
//   };

//   const handleAddToWishlist = () => {
//     if (product) {
//       addToWishlist(product);
//     }
//   };

//   const handleRemoveFromWishlist = () => {
//     if (product) {
//       removeFromWishlist(product._id);
//     }
//   };

//   if (loading) return <div className="text-center text-2xl">Loading...</div>;
//   if (!product) return <div className="text-center text-2xl">Product not found!</div>;

//   return (
//     <div className="product-detail mx-auto p-4 sm:p-6 w-full bg-gradient-to-r from-[#F3F4F6] to-[#FFFFFF]">
//       <div className="bg-[#2A254B] text-white text-center py-2 sm:py-3 font-clash text-sm sm:text-lg md:text-xl animate-moveSlow">
//         ✨ Free Delivery on Orders Over €500! ✨
//       </div>

//       <TopNav />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
//         <div className="product-image mb-6 sm:mb-8 flex justify-center rounded-lg shadow-xl overflow-hidden bg-white animate-slideIn hover:scale-105 transition-all duration-300">
//           <Image
//             src={product.image.asset.url || '/fallback-image.jpg'}
//             alt={product.name}
//             width={350}
//             height={300}
//             objectFit="contain"
//             className="rounded-lg transition-all duration-300"
//           />
//         </div>

//         <div className="product-info bg-white rounded-lg shadow-xl p-4 sm:p-6 space-y-4 sm:space-y-6 relative">
//           <h1 className="text-xl sm:text-2xl font-clash text-[#2a254b]">{product.name}</h1>
//           <div className="product-description">
//             <h2 className="text-lg sm:text-xl font-satoshi text-[#2a254b]">Description</h2>
//             <p className="text-xs sm:text-sm text-gray-600">{product.description || "No description available"}</p>
//           </div>

//           <p className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Price: €{product.price}</p>

//           <div className="product-rating">
//             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Rating</h2>
//             <div className="flex items-center mt-2">
//               <div className="w-full h-2 bg-gray-300 rounded-full">
//                 <div
//                   className="h-2 bg-yellow-400"
//                   style={{ width: `${(averageRating / 5) * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//             <p className="mt-2 text-xs sm:text-sm text-gray-600">{reviews.length} reviews</p>
//           </div>

//           <div className="product-delivery">
//             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Delivery Time</h2>
//             <p className="text-xs sm:text-sm text-gray-600">{product.deliveryTime || "5 to 7 days"}</p>
//           </div>

//           <div className="product-return">
//             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Return Policy</h2>
//             <p className="text-xs sm:text-sm text-gray-600">{product.returnPolicy || "12 days"}</p>
//           </div>

//           <div className="product-stock">
//             <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">In Stock</h2>
//             <p className="text-xs sm:text-sm text-gray-600">{isInStock ? "Yes" : "Out of Stock"}</p>
//           </div>

//           <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:flex-row items-center justify-start sm:justify-between">
//             {isProductInCart ? (
//               <>
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={handleDecreaseQuantity}
//                     className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
//                   >
//                     - 
//                   </button>

//                   <span className="font-bold text-sm sm:text-xl text-black">{productInCart?.quantity}</span>

//                   <button
//                     onClick={handleIncreaseQuantity}
//                     className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
//                   >
//                     + 
//                   </button>
//                 </div>

//                 <button
//                   onClick={handleRemoveFromCart}
//                   className="w-full sm:w-56 px-4 py-2 bg-red-600 text-white font-clash rounded-full hover:bg-red-700 transition-all duration-300"
//                 >
//                   ❌ Remove from Cart
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full sm:w-52 px-4 py-2 bg-gradient-to-r from-[#2a254b] to-[#3e3b63] text-white font-satoshi rounded-full hover:from-[#3e3b63] hover:to-[#2a254b] transition-all duration-300"
//               >
//                 🛒 Add to Cart
//               </button>
//             )}

//             <button
//               onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
//               className="w-full sm:w-52 px-4 py-2 bg-[#2a254b] text-white font-satoshi transition-all  duration-300 rounded-full flex items-center justify-center gap-2 text-[14px]"
//             >
//               <FaHeart />
//               {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
//         <button
//           onClick={handleAddToCart}
//           className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#2a254b] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 text-[14px] font-satoshi"
//         >
//           🛒
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;













"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useCart } from "../../../context/cartContext";
import { useWishlist } from "../../../context/wishListContext"; // Import Wishlist Context
import TopNav from "@/app/components/nav";
import { FaHeart } from "react-icons/fa";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  deliveryTime: string;
  returnPolicy: string;
  quantity: number;
  rating: number;
};

type Review = {
  _id: string;
  rating: number;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart, updateQuantity, cartItems = [] } = useCart();
  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();

  const productInCart = cartItems.find((item) => item.product._id === productId);
  const isProductInCart = Boolean(productInCart);
  const isInWishlist = isProductInWishlist(productId);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        setLoading(true);

        const productQuery = `*[_type == "product" && _id == $id] {
          _id,
          name,
          price,
          description,
          dimensions { height, width, depth },
          image { asset -> { url }},
          deliveryTime,
          returnPolicy,
          quantity,
          rating
        }`;
        const productResult = await client.fetch(productQuery, { id: productId });
        setProduct(productResult[0]);

        const reviewQuery = `*[_type == "review" && references($id)] {
          _id,
          rating
        }`;
        const reviewResult = await client.fetch(reviewQuery, { id: productId });
        setReviews(reviewResult);

        setLoading(false);
      };

      fetchProduct();
    }
  }, [productId]);

  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const isInStock = (product?.quantity || 0) > 0;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product._id);
    }
  };

  const handleIncreaseQuantity = () => {
    if (productInCart) {
      updateQuantity(productInCart.product._id, productInCart.quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (productInCart && productInCart.quantity > 1) {
      updateQuantity(productInCart.product._id, productInCart.quantity - 1);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      const wishlistItem = {
        ...product,
        image: product.image.asset.url, // Convert image to string
      };
      addToWishlist(wishlistItem);
    }
  };

  const handleRemoveFromWishlist = () => {
    if (product) {
      removeFromWishlist(product._id);
    }
  };

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (!product) return <div className="text-center text-2xl">Product not found!</div>;

  return (
    <div className="product-detail mx-auto p-4 sm:p-6 w-full bg-gradient-to-r from-[#F3F4F6] to-[#FFFFFF]">
      <div className="bg-[#2A254B] text-white text-center py-2 sm:py-3 font-clash text-sm sm:text-lg md:text-xl animate-moveSlow">
        ✨ Free Delivery on Orders Over €500! ✨
      </div>

      <TopNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
        <div className="product-image mb-6 sm:mb-8 flex justify-center rounded-lg shadow-xl overflow-hidden bg-white animate-slideIn hover:scale-105 transition-all duration-300">
          <Image
            src={product.image.asset.url || "/fallback-image.jpg"}
            alt={product.name}
            width={350}
            height={300}
            objectFit="contain"
            className="rounded-lg transition-all duration-300"
          />
        </div>

        <div className="product-info bg-white rounded-lg shadow-xl p-4 sm:p-6 space-y-4 sm:space-y-6 relative">
          <h1 className="text-xl sm:text-2xl font-clash text-[#2a254b]">{product.name}</h1>
          <div className="product-description">
            <h2 className="text-lg sm:text-xl font-satoshi text-[#2a254b]">Description</h2>
            <p className="text-xs sm:text-sm text-gray-600">{product.description || "No description available"}</p>
          </div>

          <p className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Price: €{product.price}</p>

          <div className="product-rating">
            <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Rating</h2>
            <div className="flex items-center mt-2">
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-yellow-400"
                  style={{ width: `${(averageRating / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">{reviews.length} reviews</p>
          </div>

          <div className="product-delivery">
            <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Delivery Time</h2>
            <p className="text-xs sm:text-sm text-gray-600">{product.deliveryTime || "5 to 7 days"}</p>
          </div>

          <div className="product-return">
            <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">Return Policy</h2>
            <p className="text-xs sm:text-sm text-gray-600">{product.returnPolicy || "12 days"}</p>
          </div>

          <div className="product-stock">
            <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">In Stock</h2>
            <p className="text-xs sm:text-sm text-gray-600">{isInStock ? "Yes" : "Out of Stock"}</p>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:flex-row items-center justify-start sm:justify-between">
            {isProductInCart ? (
              <>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
                  >
                    - 
                  </button>

                  <span className="font-bold text-sm sm:text-xl text-black">{productInCart?.quantity}</span>

                  <button
                    onClick={handleIncreaseQuantity}
                    className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
                  >
                    + 
                  </button>
                </div>

                <button
                  onClick={handleRemoveFromCart}
                  className="w-full sm:w-56 px-4 py-2 bg-red-600 text-white font-clash rounded-full hover:bg-red-700 transition-all duration-300"
                >
                  ❌ Remove from Cart
                </button>
              </>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full sm:w-52 px-4 py-2 bg-gradient-to-r from-[#2a254b] to-[#3e3b63] text-white font-satoshi rounded-full hover:from-[#3e3b63] hover:to-[#2a254b] transition-all duration-300"
              >
                🛒 Add to Cart
              </button>
            )}

            <button
              onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
              className="w-full sm:w-52 px-4 py-2 bg-[#2a254b] text-white font-satoshi transition-all  duration-300 rounded-full flex items-center justify-center gap-2 text-[14px]"
            >
              <FaHeart />
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
