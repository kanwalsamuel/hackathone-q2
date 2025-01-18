"use client";

import React, { useEffect, useState } from "react";
import client from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        description,
        image {
          asset -> {
            url
          }
        }
      }`;

      try {
        const result: Product[] = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Link key={product._id} href={`/productSanity/${product._id}`}>
          <div className="product-card border p-4 shadow-lg hover:shadow-xl transition duration-300 rounded-md">
            <Image
              src={product.image.asset.url}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-bold mt-2">{product.name}</h3>
            <p className="text-lg text-gray-700">€ {product.price}</p>
            <p className="text-sm text-gray-500 mt-2">
              {product.description.slice(0, 100)}...
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
