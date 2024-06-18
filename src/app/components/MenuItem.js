import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "./AddToCart";

export default function MenuItem({ product }) {
  return (
    <div className="card">
      <Link href={`product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg text-black font-bold mb-2">{product.name}</h2>
        </Link>
        <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  );
}
