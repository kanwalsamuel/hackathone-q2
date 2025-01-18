
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client } from "../../../sanity/lib/client";
import Image from 'next/image';
import { useCart } from '../../../context/cartContext';
import TopNav from '@/app/components/nav';

// Product Type
type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart, updateQuantity, cartItems = [] } = useCart();

  const productInCart = cartItems.find(item => item.product._id === id);
  const isProductInCart = Boolean(productInCart);

  // Fetch Product Details
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        setLoading(true);
        const query = `*[_type == "product" && _id == $id]{
          _id,
          name,
          price,
          description,
          image {
            asset -> {
              url
            }
          }
        }`;
        const result = await client.fetch(query, { id });
        setProduct(result[0]);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

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

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-detail mx-auto p-6 w-full">
      {/* 🎉 Free Delivery Banner Above TopNav */}
      <div className="bg-[#2A254B] text-white text-center py-3 font-clash text-lg md:text-xl animate-slide  sm:text-[16px]">
        ✨ Free Delivery on Orders Over €500! ✨
      </div>

      {/* Top Navigation Bar */}
      <TopNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Product Image */}
        <div className="product-image mb-8 flex justify-center">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={500}
            height={400}
            objectFit="contain"
            className="rounded-lg shadow-2xl border border-gray-300"
          />
        </div>

        {/* Product Details */}
        <div className="product-info">
          <h1 className="text-3xl  font-clash text-[#2a254b]">{product.name}</h1>
          <p className="text-xl mt-2 font-satoshi text-[#2a254b]">€ {product.price}</p>

          <div className="product-description mt-6">
            <h2 className="text-2xl  font-satoshi text-[#2a254b]">Description</h2>
            <p className="text-lg text-gray-600 mt-2">{product.description || "No description available"}</p>
          </div>

          {/* Add to Cart / Remove from Cart Button & Quantity Controls */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row items-center justify-start sm:justify-between">
            {isProductInCart ? (
              <>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="px-4 py-2 bg-[#2a254b] text-white font-bold rounded-md hover:bg-[#3e3b63] transition-all duration-300"
                  >
                    -
                  </button>

                  <span className="font-bold text-xl text-black">{productInCart?.quantity}</span>

                  <button
                    onClick={handleIncreaseQuantity}
                    className="px-4 py-2 bg-[#2a254b] text-white font-bold rounded-md hover:bg-[#3e3b63] transition-all duration-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleRemoveFromCart}
                  className="w-full sm:w-56 px-6 py-3 bg-red-600 text-white font-clash  rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  ❌ Remove from Cart
                </button>
              </>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full sm:w-52 px-6 py-3 bg-[#2a254b] text-white font-bold rounded-md hover:bg-[#3e3b63] transition-all duration-300"
              >
                🛒 Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
