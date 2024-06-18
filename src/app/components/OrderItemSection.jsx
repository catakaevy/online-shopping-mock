import React from "react";
import MenuItem from "./MenuItem";
import { data } from "../utils/data";

const OrderItemSection = ({}) => {
  const { products } = data;
  return (
    <section id="order">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-orange-500 bg-pink-100 sm:text-6xl mt-5 mb-5">
          Let&apos;s order & try Takoyaki!
        </h1>
      </div>
      <div className="text-slate-800 grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OrderItemSection;
