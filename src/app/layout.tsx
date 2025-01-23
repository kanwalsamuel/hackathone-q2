
// // "use client"
// // import localFont from "next/font/local";
// // import "./globals.css";
// // import Footer from "../app/components/footer";
// // import { CartProvider } from "../context/cartContext"; // ✅ Import CartProvider
// // import { WishlistProvider } from "@/context/wishListContext"; // ✅ Import WishlistProvider
// // import { useState, useEffect } from "react";
// // import LoadingAnimation from "../app/components/loadingAnimation"; // Import LoadingAnimation

// // const geistSans = localFont({
// //   src: "./fonts/GeistVF.woff",
// //   variable: "--font-geist-sans",
// //   weight: "100 900",
// // });

// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });


// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 3000); // Adjust loading duration
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <html lang="en">
// //       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
// //         {loading ? (
// //           <LoadingAnimation /> // Only show loading animation when loading
// //         ) : (
// //           <CartProvider>
// //             <WishlistProvider>
// //               <div className="mx-auto max-w-[1440px]">
// //                 {children}
// //                 <Footer />
// //               </div>
// //             </WishlistProvider>
// //           </CartProvider>
// //         )}
// //       </body>
// //     </html>
// //   );
// // }



// "use client";

// import localFont from "next/font/local";
// import "./globals.css";
// import Footer from "./components/footer";
// import { CartProvider } from "../context/cartContext";
// import { WishlistProvider } from "@/context/wishListContext";
// import { useState, useEffect } from "react";
// import LoadingAnimation from "./components/loadingAnimation"; // Import the LoadingAnimation component

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000); // Adjust loading duration
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {loading ? (
//           <LoadingAnimation /> // Use the LoadingAnimation component
//         ) : (
//           <CartProvider>
//             <WishlistProvider>
//               <div className="mx-auto max-w-[1440px]">
//                 {children}
//                 <Footer />
//               </div>
//             </WishlistProvider>
//           </CartProvider>
//         )}
//       </body>
//     </html>
//   );
// }



// layout.tsx (Client-side component)
"use client"; 

import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import { CartProvider } from "../context/cartContext";
import { WishlistProvider } from "@/context/wishListContext";
import { useState, useEffect } from "react";
import LoadingAnimation from "./components/loadingAnimation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {loading ? (
          <LoadingAnimation />
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
