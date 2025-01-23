






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


import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

// Fetch products by category slug
async function getProductsByCategory(slug: string): Promise<Product[]> {
  const query = `*[_type == "product" && category->slug.current == $slug] {
    _id,
    name,
    price,
    "image": image.asset->url,
    "slug": slug.current // Ensure slug is returned as a string
  }`;
  return client.fetch(query, { slug });
}

// Fetch all categories for dynamic paths
export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }));
}

// Page Component
export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Handle undefined slug
  if (!slug) {
    return notFound();
  }

  // Fetch products
  const products = await getProductsByCategory(slug);

  // Handle no products found
  if (!products || products.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      {/* Top Navigation */}
      <nav className="bg-[#2A254B] text-white p-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl  font-clash">
            Avion
          </Link>
          <div className="space-x-6 font-satoshi">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/products" className="hover:underline">Products</Link>
          </div>
        </div>
      </nav>

      {/* Dynamic Category Name */}
      <h1 className="text-4xl font-bold capitalize mb-6 text-[#2A254B]">
        {slug} Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 mb-4"> {/* Increased height here */}
              <Image
                src={product.image}
                alt={product.name}
                layout="fill" // Ensures it covers the container area
                objectFit="contain" // Ensures the image is not cropped
                className="rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-[#2A254B]">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            {/* Product Details Link */}
            <Link
              href={`/product/${product.slug}`} // Use product.slug as a string
              className="inline-block mt-4 px-4 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300"
            >
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
