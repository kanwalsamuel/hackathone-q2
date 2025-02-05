// // pages/index.tsx

// import Features from "./components/feature";
// import FeaturesSection from "./components/featureBlock"
// import Hero from "./components/hero";
// import ListingComponent from "./components/listing";
// import TopNav from "./components/nav";
// import Products from "./components/product";
// import ReviewComponent from "./components/review";


// export default function Home() {
//   return (
//     <div>
//       {/* Top Navigation Bar */}
//       <TopNav/>
//       <Hero/>
      
//       <FeaturesSection/>
//       <ListingComponent/>
//       <Products/>
//       <Features/>
//       <ReviewComponent/>
//     </div>
//   );      
// }


// pages/index.tsx
"use client";  // Add this line to mark this component as client-side

import { useState } from "react";  // Now you can use useState
import Features from "./components/feature";
import FeaturesSection from "./components/featureBlock";
import Hero from "./components/hero";
import ListingComponent from "./components/listing";
import TopNav from "./components/nav";
import Product from "./components/product";
import ProductClerk from "./components/ProductClerk"; // Import ProductClerk component

export default function Home() {
  const [cart, setCart] = useState([]); // Cart state

  // Function to handle adding products to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />
      <Hero />
      
      <FeaturesSection />
      <ListingComponent />

      {/* Use ProductClerk component here to display products */}
      <ProductClerk addToCart={handleAddToCart} /> {/* Pass addToCart function */}

      <Features />
      

      {/* You can add a cart summary here */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {cart.length}</p>
        {/* Add more details about the cart, like total price */}
      </div>
    </div>
  );
}
