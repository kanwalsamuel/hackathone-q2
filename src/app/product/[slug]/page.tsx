

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













