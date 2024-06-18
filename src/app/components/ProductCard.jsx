"use client";
// components/ProductCard.jsx
import React from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";

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
      </div>
    </div>
  );
};

export default ProductCard;
