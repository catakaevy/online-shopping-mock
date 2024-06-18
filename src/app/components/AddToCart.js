"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../redux/slices/cartSlice";

export default function AddToCart({
  product,
  showQty = true,
  increasePerClick = false,
  redirect = false,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          return alert("No more Takoyaki :(");
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));
    if (redirect) router.push("/cart");
  };
  return (
    <>
      {product.countInStock > 0 && showQty && (
        <div className="mb-2 flex justify-between">
          <div>Qty</div>
          <div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div>
        {product.countInStock > 0 ? (
          <button
            className="mt-auto self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors w-full"
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        ) : (
          <button disabled>Out of Takoyaki</button>
        )}
      </div>
    </>
  );
}
