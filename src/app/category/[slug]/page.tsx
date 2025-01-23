






// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// // Define Product type
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   slug: string;
// }

// // Fetch products by category slug
// async function getProductsByCategory(slug: string): Promise<Product[]> {
//   const query = `*[_type == "product" && category->slug.current == $slug] {
//     _id,
//     name,
//     price,
//     "image": image.asset->url,
//     "slug": slug.current // Ensure slug is returned as a string
//   }`;
//   return client.fetch(query, { slug });
// }

// // Fetch all categories for dynamic paths
// export async function generateStaticParams() {
//   const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
//   return categories.map((category: { slug: string }) => ({
//     slug: category.slug,
//   }));
// }

// // Page Component
// export default async function CategoryPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   // Handle undefined slug
//   if (!slug) {
//     return notFound();
//   }

//   // Fetch products
//   const products = await getProductsByCategory(slug);

//   // Handle no products found
//   if (!products || products.length === 0) {
//     return notFound();
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Top Navigation */}
//       <nav className="bg-[#2A254B] text-white p-4 mb-6">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/" className="text-2xl  font-clash">
//             Avion
//           </Link>
//           <div className="space-x-6 font-satoshi">
//             <Link href="/" className="hover:underline">Home</Link>
//             <Link href="/about" className="hover:underline">About</Link>
//             <Link href="/contact" className="hover:underline">Contact</Link>
//             <Link href="/products" className="hover:underline">Products</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Dynamic Category Name */}
//       <h1 className="text-4xl font-bold capitalize mb-6 text-[#2A254B]">
//         {slug} Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border border-gray-200 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//           >
//             {/* Product Image */}
//             <div className="relative w-full h-64 mb-4"> {/* Increased height here */}
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 layout="fill" // Ensures it covers the container area
//                 objectFit="contain" // Ensures the image is not cropped
//                 className="rounded-md"
//               />
//             </div>
//             <h2 className="text-lg font-semibold mt-4 text-[#2A254B]">
//               {product.name}
//             </h2>
//             <p className="text-gray-600 mt-2">${product.price}</p>
//             {/* Product Details Link */}
//             <Link
//               href={`/product/${product.slug}`} // Use product.slug as a string
//               className="inline-block mt-4 px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               More Info
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// // Define Product type
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   slug: string;
// }

// // Fetch products by category slug
// async function getProductsByCategory(slug: string): Promise<Product[]> {
//   const query = `*[_type == "product" && category->slug.current == $slug] {
//     _id,
//     name,
//     price,
//     "image": image.asset->url,
//     "slug": slug.current // Ensure slug is returned as a string
//   }`;
//   return client.fetch(query, { slug });
// }

// // Fetch all categories for dynamic paths
// export async function generateStaticParams() {
//   const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
//   return categories.map((category: { slug: string }) => ({
//     slug: category.slug,
//   }));
// }

// // Page Component
// export default async function CategoryPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } =  await params;

//   // Handle undefined slug
//   if (!slug) {
//     return notFound();
//   }

//   // Fetch products
//   const products = await getProductsByCategory(slug);

//   // Handle no products found
//   if (!products || products.length === 0) {
//     return notFound();
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Top Navigation */}
//       <nav className="bg-[#2A254B] text-white p-4 mb-6">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/" className="text-2xl  font-clash">
//             Avion
//           </Link>
//           <div className="space-x-6 font-satoshi">
//             <Link href="/" className="hover:underline">Home</Link>
//             <Link href="/about" className="hover:underline">About</Link>
//             <Link href="/contact" className="hover:underline">Contact</Link>
//             <Link href="/products" className="hover:underline">Products</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Dynamic Category Name */}
//       <h1 className="text-4xl font-bold capitalize mb-6 text-[#2A254B]">
//         {slug} Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border border-gray-200 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//           >
//             {/* Product Image */}
//             <div className="relative w-full h-64 mb-4"> {/* Increased height here */}
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 layout="fill" // Ensures it covers the container area
//                 objectFit="contain" // Ensures the image is not cropped
//                 className="rounded-md"
//               />
//             </div>
//             <h2 className="text-lg font-semibold mt-4 text-[#2A254B]">
//               {product.name}
//             </h2>
//             <p className="text-gray-600 mt-2">${product.price}</p>
//             {/* Product Details Link */}
//             <Link
//               href={`/product/${product.slug}`} // Use product.slug as a string
//               className="inline-block mt-4 px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               More Info
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { client } from "../../../sanity/lib/client"; // Adjust your path as needed
import Image from "next/image";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link"; // Import Link for navigation
import TopNav from "@/app/components/nav"; // Import your custom NavBar

// Define the ImageSource type
interface ImageSource {
  asset: {
    _ref: string;
  };
}

// Create an image builder
const builder = imageUrlBuilder(client);
function urlFor(source: ImageSource) {
  return builder.image(source);
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: ImageSource;  // Use ImageSource type
  slug: {
    current: string; // Assuming slug is available in your data
  };
}

// Define metadata for the page
export const metadata = {
  title: 'New Arrivals | My Store',
  description: 'Check out the latest new arrivals at our store!',
};

export default async function NewArrivalsPage() {
  // Fetch data for products tagged as "Best seller"
  const query = `*[_type == "product" && "Best seller" in tags] {
    _id,
    name,
    description,
    price,
    image,
    slug
  }`;

  let products = [];

  try {
    products = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }

  if (!products || products.length === 0) {
    notFound(); // Handle 404 if no products are found
  }

  return (
    <div>
      <TopNav /> {/* Include the NavBar */}
      
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#2a254b] font-satoshi ml-10">
          New Arrivals
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <div className="col-span-4 text-center">No products found</div>
          ) : (
            products.map((product: Product) => {
              const imageUrl = product.image
                ? urlFor(product.image).width(300).height(300).url()
                : "/fallback-image.jpg"; // Fallback image path

              return (
                <div
                  key={product._id}
                  className="border p-4 rounded-lg shadow flex flex-col justify-between h-full"
                >
                  {/* Image Container with Fixed Dimensions */}
                  <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={imageUrl || "/fallback-image.jpg"}
                      alt={product.name}
                      width={300} // Adjust the size as needed
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-grow mt-4">
                    <h2 className="text-lg font-semibold text-[#2a254b] font-satoshi">
                      {product.name}
                    </h2>
                    <p className="text-[#2a254b] font-satoshi mt-2 text-sm flex-grow">
                      {product.description}
                    </p>
                    <p className="font-bold text-[#2a254b] font-satoshi mt-2">
                      ${product.price}
                    </p>
                  </div>

                  {/* More Info Button */}
                  <div className="mt-4">
                    <Link
                      href={`/product/${product.slug.current}`} // Corrected path for product details
                      className="block w-full px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
