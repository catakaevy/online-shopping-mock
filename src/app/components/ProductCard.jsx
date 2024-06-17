// components/ProductCard.jsx
import React from "react";
import Image from "next/image";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-64">
        <Image src={image} alt={name} layout="fill" objectFit="contain" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h5 className="text-xl text-black font-bold mb-2">{name}</h5>
        <p className="text-purple-500 font-bold">€{price}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="mt-auto self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
