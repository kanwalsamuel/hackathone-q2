

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { client } from "../../sanity/lib/client";

// // const ProductSanityPage: React.FC = () => {
// //   const [products, setProducts] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       setLoading(true);
// //       const query = `*[_type == "product"]{_id, name, price, image { asset -> { url }} }`;
// //       const productsResult = await client.fetch(query);
// //       setProducts(productsResult);
// //       setLoading(false);
// //     };
// //     fetchProducts();
// //   }, []);

// //   if (loading) return <div>Loading products...</div>;

// //   return (
// //     <div className="product-listing">
// //       <h1 className="text-3xl font-clash text-[#2a254b] text-center mt-8 mb-4">Our Products</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.map((product) => (
// //           <ProductCard key={product._id} product={product} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductSanityPage;





// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "../../sanity/lib/client"
// import ProductCard from "../components/ProductCard";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const ProductSanityPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       const query = `*[_type == "product"]{_id, name, price, image { asset -> { url }} }`;
//       const productsResult = await client.fetch(query);
//       setProducts(productsResult);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading products...</div>;

//   return (
//     <div className="product-listing">
//       <h1 className="text-3xl font-clash text-[#2a254b] text-center mt-8 mb-4">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductSanityPage;



"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductSanityPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const query = `*[_type == "product"]{_id, name, price, image { asset -> { url }} }`;
      const productsResult = await client.fetch(query);
      setProducts(productsResult);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="product-listing">
      <h1 className="text-3xl font-clash text-[#2a254b] text-center mt-8 mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border border-gray-200 p-4 rounded-lg shadow-md">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image.asset.url}
                alt={product.name}
                layout="fill" // Ensures the image covers the entire container
                objectFit="contain" // Ensures the image fits within the container without cropping
                className="rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-[#2A254B]">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSanityPage;
