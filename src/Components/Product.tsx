import React from "react";
import Cart from "./Cart";

export interface ProductType {
  productName: string;
  averageRating: number;
  numberOfReviews: number;
  price: number;
  priceRange: string;
  tag: string;
  category: string;
  imageUrl: string; // Added imageUrl property
}

const products: ProductType[] = [
  {
    productName: "Product 1",
    averageRating: 4.5,
    numberOfReviews: 100,
    price: 25,
    priceRange: "$",
    tag: "1000 and 1 flowers",
    category: "Category 1",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/product_20research.png?v=1702995315", // Example image URL
  },
  {
    productName: "Product 2",
    averageRating: 3.8,
    numberOfReviews: 80,
    price: 15,
    priceRange: "$",
    tag: "1000 and 1 flowers",
    category: "Category 2",
    imageUrl:
      "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", // Example image URL
  },
  // Add more products here
];

const ProductList: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product, index) => (
          // <div
          //   key={index}
          //   className="border border-gray-200 p-4 rounded-md shadow-md"
          // >
          //   <img
          //     src={product.imageUrl}
          //     alt={product.productName}
          //     className="w-full mb-2 rounded-md"
          //   />
          //   <h2 className="text-lg font-semibold mb-2">
          //     {product.productName}
          //   </h2>
          //   <p className="text-gray-700 mb-2">{product.category}</p>
          //   <p className="text-gray-700 mb-2">{product.tag}</p>
          //   <p className="text-gray-700 mb-2">
          //     Average Rating: {product.averageRating}
          //   </p>
          //   <p className="text-gray-700 mb-2">
          //     Number of Reviews: {product.numberOfReviews}
          //   </p>
          //   <p className="text-gray-700 mb-2">
          //     Price Range: {product.priceRange}
          //   </p>
          //   <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          // </div>
          <Cart key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
