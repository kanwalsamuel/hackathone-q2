"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define Wishlist Item Type
interface WishlistItem {
  _id: string;
  name: string;
  price: number;
  image: string;
}
 
// Define Context Type
interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isProductInWishlist: (id: string) => boolean;
}

// Create Context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Wishlist Provider Component
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Load Wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  // Save Wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add to Wishlist
  const addToWishlist = (item: WishlistItem) => {
    if (!wishlistItems.some((wishlistItem) => wishlistItem._id === item._id)) {
      setWishlistItems((prev) => [...prev, item]);
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Check if Product is in Wishlist
  const isProductInWishlist = (id: string) => {
    return wishlistItems.some((item) => item._id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isProductInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to Use Wishlist Context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
