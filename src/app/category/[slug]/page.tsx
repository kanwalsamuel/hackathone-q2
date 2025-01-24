








// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Link from "next/link";

// // Helper to build image URLs from Sanity
// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source).url();
// }

// // Function to fetch all category slugs for generating static paths
// export async function generateStaticParams() {
//   const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
//   return categories.map((category: { slug: string }) => ({
//     slug: category.slug,
//   }));
// }

// // Function to fetch data for a specific category
// async function getCategoryData(slug: string) {
//   const query = `*[_type == "category" && slug.current == $slug][0] {
//     title,
//     "products": *[_type == "product" && references(^._id)] {
//       _id,
//       name,
//       description,
//       price,
//       image,
//       slug
//     }
//   }`;

//   const data = await client.fetch(query, { slug });
//   return data;
// }

// // Top Navigation Bar Component
// const TopNav = () => {
//   return (
//     <nav className="bg-[#2A254B] p-4 shadow-lg mt-4">
//       <div className="container mx-auto flex justify-between items-center mb-2">
//         <h1 className="text-white font-clash text-[22px]">Avion</h1>
//         <div>
//           <Link href="/" className="text-white mx-4">Home</Link>
//           <Link href="/about" className="text-white mx-4">About</Link>
//           <Link href="/contact" className="text-white mx-4">Contact</Link>
//           <Link href="/products" className="text-white mx-4">Products</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Category Page Component
// export default async function CategoryPage({ params }: { params: { slug: string } }) {
//   const { slug } = await params;

//   if (!slug) {
//     return notFound();
//   }

//   // Fetch category data
//   const data = await getCategoryData(slug);

//   if (!data || !data.products.length) {
//     return notFound();  // Return 404 if no products are found
//   }

//   const { title, products } = data;

//   return (
//     <div>
//       {/* Top Navigation Bar */}
//       <TopNav />

//       <div className="container mx-auto py-8">
//         {/* Category Title - Dynamically displaying category name */}
//         <h1 className="text-4xl font-bold mb-6 text-[#2a254b]">{title} Products</h1>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product: any) => (
//             <div
//               key={product._id}
//               className="border p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col"
//             >
//               {/* Product Image */}
//               <div className="w-full h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
//                 <Image
//                   src={urlFor(product.image)}
//                   alt={product.name}
//                   width={400}  // Fixed width
//                   height={300} // Fixed height
//                   className="object-cover"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="flex flex-col mt-4 flex-grow">
//                 <h2 className="text-lg font-semibold text-[#2a254b]">{product.name}</h2>
//                 <p className="text-gray-600 mt-2">{product.description}</p>
//                 <p className="font-bold text-[#2a254b] mt-2">${product.price}</p>
//               </div>

//               {/* More Info Button - Fixed size and aligned */}
//               <div className="mt-auto flex justify-center">
//                 <Link
//                   href={`/product/${product.slug.current}`}
//                   className="px-6 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300 w-full max-w-xs"
//                 >
//                   More Info
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

// Helper to build image URLs from Sanity
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

// Function to fetch all category slugs for generating static paths
export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ "slug": slug.current }`);
  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }));
}

// Function to fetch data for a specific category
async function getCategoryData(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    title,
    "products": *[_type == "product" && references(^._id)] {
      _id,
      name,
      description,
      price,
      image,
      slug
    }
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

// Top Navigation Bar Component
const TopNav = () => {
  return (
    <nav className="bg-[#2A254B] p-4 shadow-lg mt-4">
      <div className="container mx-auto flex justify-between items-center mb-2">
        <h1 className="text-white font-clash text-[22px]">Avion</h1>
        <div>
          <Link href="/" className="text-white mx-4">Home</Link>
          <Link href="/about" className="text-white mx-4">About</Link>
          <Link href="/contact" className="text-white mx-4">Contact</Link>
          <Link href="/products" className="text-white mx-4">Products</Link>
        </div>
      </div>
    </nav>
  );
};

// Category Page Component
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  // Fetch category data
  const data = await getCategoryData(slug);

  if (!data || !data.products.length) {
    return notFound();  // Return 404 if no products are found
  }

  const { title, products } = data;

  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />

      <div className="container mx-auto py-8">
        {/* Category Title - Dynamically displaying category name */}
        <h1 className="text-4xl font-bold mb-6 text-[#2a254b]">{title} Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <div
              key={product._id}
              className="border p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={urlFor(product.image)}
                  alt={product.name}
                  width={400}  // Fixed width
                  height={300} // Fixed height
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col mt-4 flex-grow">
                <h2 className="text-lg font-semibold text-[#2a254b]">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="font-bold text-[#2a254b] mt-2">${product.price}</p>
              </div>

              {/* More Info Button - Fixed size and aligned */}
              <div className="mt-auto flex justify-center">
                <Link
                  href={`/product/${product.slug.current}`}
                  className="px-6 py-2 text-center text-white bg-[#2A254B] rounded-lg hover:bg-blue-600 transition duration-300 w-full max-w-xs"
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

