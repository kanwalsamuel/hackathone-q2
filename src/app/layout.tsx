

// import "./globals.css";
// import Footer from "./components/footer";
// import Providers from "../app/components/providers"; // Separate client logic

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>My Furnio Application</title>
//       </head>
//       <body>
//         <Providers>
//           <div className="mx-auto max-w-[1440px]">
//             {children}
            
//             <Footer />
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }


"use client"; // Required for using hooks

import "./globals.css";
import Footer from "./components/footer";
import Providers from "../app/components/providers";
import { usePathname } from "next/navigation"; // Import usePathname

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current path

  // Check if it's an authentication page
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Furnio Application</title>
      </head>
      <body>
        <Providers>
          <div className="mx-auto max-w-[1440px]">
            {children}

            {/* Hide footer on authentication pages */}
            {!isAuthPage && <Footer />}
          </div>
        </Providers>
      </body>
    </html>
  );
}
