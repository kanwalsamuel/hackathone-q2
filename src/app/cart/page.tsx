


// components/ShoppingCart.tsx
import React from "react";
import Image from "next/image";
import TopNav from "../components/nav";

const ShoppingCart: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <TopNav />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-4 py-8 mt-24">
        <h1 className="text-3xl font-bold text-center mb-28 text-[#2A254B] font-clash">
          Your Shopping Cart
        </h1>
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-4">
              {/* Product 1 */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/Product Image (1).png" // Replace with actual image URL
                    alt="Gray Vase"
                    width={64}
                    height={64}
                    className="object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-[#2A254B]">Graystone Vase</h3>
                    <p className="text-gray-500 text-sm">A beautiful stone vase</p>
                  </div>
                </div>
                <p className="font-semibold text-[#2A254B]">£85</p>
              </div>

              {/* Product 2 */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/Product Image.png" // Replace with actual image URL
                    alt="Wood Vase"
                    width={64}
                    height={64}
                    className="object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-[#2A254B]">Basic Wood Vase</h3>
                    <p className="text-gray-500 text-sm">A sleek wooden vase</p>
                  </div>
                </div>
                <p className="font-semibold text-[#2A254B]">£85</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#2A254B]">Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-[#2A254B]">
                <span>Subtotal</span>
                <span className="font-semibold">£170</span>
              </div>
              <div className="flex justify-between text-[#2A254B]">
                <span>Shipping</span>
                <span className="font-semibold">£40</span>
              </div>
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between font-bold text-lg text-[#2A254B]">
              <span>Total</span>
              <span>£210</span>
            </div>
            <button className="w-full mt- bg-[#4E4D93] text-white py-3 rounded-lg text-center font-medium hover:bg-blue-700">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

