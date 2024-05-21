"use client";
import React, { useContext } from "react";
import { PRODUCTS } from "../shop/product";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-item";
//import { useNavigate } from "react-router-dom";

const Page = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="w-full flex flex-col items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="w-full flex flex-col items-center">
          <p>Subtotal: ${totalAmount}</p>
          <button
            className="w-[150px] h-[50px] bg-black text-white border-none rounded-lg m-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button className="w-[150px] h-[50px] bg-black text-white border-none rounded-lg m-2 cursor-pointer">
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Page;
