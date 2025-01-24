

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useCart } from "../../../context/cartContext";
import { useWishlist } from "../../../context/wishListContext";
import TopNav from "@/app/components/nav";
import { FaHeart } from "react-icons/fa";
import Head from "next/head"; // For SEO improvements

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
  const [error, setError] = useState<string | null>(null); // Track error message
  const {
    addToCart,
    removeFromCart,
    updateQuantity,
    cartItems = [],
  } = useCart();
  const { addToWishlist, removeFromWishlist, isProductInWishlist } =
    useWishlist();

  const productInCart = cartItems.find(
    (item) => item.product._id === productId
  );
  const isProductInCart = Boolean(productInCart);
  const isInWishlist = isProductInWishlist(productId);



  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null); // Reset error message

      try {
        const productQuery = `*[_type == "product" && _id == $id] {
          _id,
          name,
          price,
          description,
          dimensions { height, width, depth },
          image { asset -> { url }} ,
          deliveryTime,
          returnPolicy,
          quantity,
          rating
        }`;
        const productResult = await client.fetch(productQuery, { id: productId });

        if (!productResult.length) {
          throw new Error("Product not found.");
        }

        setProduct(productResult[0]);

        const reviewQuery = `*[_type == "review" && references($id)] {
          _id,
          rating
        }`;
        const reviewResult = await client.fetch(reviewQuery, { id: productId });
        setReviews(reviewResult);
      } catch (error: any) {
        console.error('Error fetching product data:', error);
        setError('There was an issue loading the product.');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
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
  if (error) return <div className="text-center text-2xl text-red-600">{error}</div>;
  if (!product)
    return <div className="text-center text-2xl">Product not found!</div>;

  return (
    <>
      <Head>
        <title>{product.name} - Your Store</title>
        <meta name="description" content={product.description || "No description available"} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description || "No description available"} />
        <meta property="og:image" content={product.image.asset.url} />
        <meta property="og:type" content="product" />
        {/* Adding Structured Data for Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: product.image.asset.url,
              sku: product._id,
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                price: product.price,
                availability: product.quantity > 0 ? "InStock" : "OutOfStock",
                url: window.location.href, // The product page URL
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: averageRating,
                reviewCount: reviews.length,
              },
            }),
          }}
        />
      </Head>

      <div className="product-detail mx-auto p-4 sm:p-6 w-full bg-gradient-to-r from-[#F3F4F6] to-[#FFFFFF]">
        <div className="bg-[#2A254B] text-white text-center py-2 sm:py-3 font-clash text-sm sm:text-lg md:text-xl animate-moveSlow">
          ✨ Free Delivery on Orders Over €500! ✨
        </div>

        <TopNav />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {/* Product Image */}
          <div className="product-image flex justify-center rounded-lg shadow-xl overflow-hidden bg-white animate-slideIn hover:scale-105 transition-all duration-300 h-full">
            <Image
              src={product.image.asset.url || "/fallback-image.jpg"}
              alt={product.name}
              width={350}
              height={300}
              objectFit="contain"
              priority
              className="rounded-lg transition-all duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="product-info bg-white rounded-lg shadow-xl p-4 sm:p-6 space-y-4 sm:space-y-6 relative h-full flex flex-col justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-clash text-[#2a254b]">
                {product.name}
              </h1>
              <div className="product-description mt-4">
                <h2 className="text-lg sm:text-xl font-satoshi text-[#2a254b]">
                  Description
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  {product.description || "No description available"}
                </p>
              </div>

              <p className="text-sm sm:text-lg font-satoshi text-[#2a254b] mt-4">
                Price: €{product.price}
              </p>

              <div className="product-rating mt-4">
                <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">
                  Rating
                </h2>
                <div className="flex items-center mt-2">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-2 bg-yellow-400"
                      style={{ width: `${(averageRating / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  {reviews.length} reviews
                </p>
              </div>

              <div className="product-delivery mt-4">
                <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">
                  Delivery Time
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  {product.deliveryTime || "5 to 7 days"}
                </p>
              </div>

              <div className="product-return mt-4">
                <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">
                  Return Policy
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  {product.returnPolicy || "12 days"}
                </p>
              </div>

              <div className="product-stock mt-4">
                <h2 className="text-sm sm:text-lg font-satoshi text-[#2a254b]">
                  In Stock
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  {isInStock ? "Yes" : "Out of Stock"}
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:flex-row items-center justify-start sm:justify-between">
              {isProductInCart ? (
                <>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleDecreaseQuantity}
                      aria-label="Decrease quantity"
                      className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
                    >
                      -
                    </button>

                    <span className="font-bold text-sm sm:text-xl text-black">
                      {productInCart?.quantity}
                    </span>

                    <button
                      onClick={handleIncreaseQuantity}
                      aria-label="Increase quantity"
                      className="px-2 sm:px-3 py-1 bg-[#2a254b] text-white font-bold rounded-full hover:bg-[#3e3b63] transition-all duration-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleRemoveFromCart}
                    aria-label="Remove from cart"
                    className="w-full sm:w-56 px-4 py-2 bg-red-600 text-white font-clash rounded-full hover:bg-red-700 transition-all duration-300"
                  >
                    ❌ Remove from Cart
                  </button>
                </>
              ) : (
                <button
                  onClick={handleAddToCart}
                  aria-label="Add to cart"
                  className="w-full sm:w-52 px-4 py-2 bg-[#2a254b] text-white font-satoshi transition-all duration-300 rounded-full flex items-center justify-center gap-2 text-[14px]"
                >
                  🛒 <span>Add to Cart</span>
                </button>
              )}

              <button
                onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
                aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                className="w-full sm:w-52 px-4 py-2 bg-[#2a254b] text-white font-satoshi transition-all duration-300 rounded-full flex items-center justify-center gap-2 text-[14px]"
              >
                <FaHeart />
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
