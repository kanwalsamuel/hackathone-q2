


"use client";

import "./globals.css";
import Footer from "./components/footer";
import { CartProvider } from "../context/cartContext";
import { WishlistProvider } from "@/context/wishListContext";
import { useState, useEffect } from "react";
import LoadingAnimation from "./components/loadingAnimation"; // Import the LoadingAnimation component

// Import local fonts

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust loading duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Furnio Application</title>
      </head>
      <body>
        {loading ? (
          <LoadingAnimation /> // Only show loading animation when loading
        ) : (
          <CartProvider>
            <WishlistProvider>
              <div className="mx-auto max-w-[1440px]">
                {children}
                <Footer />
              </div>
            </WishlistProvider>
          </CartProvider>
        )}
      </body>
    </html>
  );
}