import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

export default function CartSidebar() {
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="fixed top-0 right-0 w-32 h-full shadow-lg border-l border-l-gary-700 bg-pink-200 overflow-scroll">
      {loading ? (
        <div className="py-20 px-2">Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className="py-20 px-2 text-black">Cart is empty</div>
      ) : (
        <>
          <div className="py-20 flex flex-col items-center border-b border-b-gary-600 text-black">
            <div>
              <Link
                href="/cart"
                className="w-full text-center p-1 text-sm rounded-2xl border-2 border-green-600 bg-purple-400 hover:bg-slate-200"
              >
                Check out cart
              </Link>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="py-2 flex flex-col items-center border-b border-b-gary-600"
              >
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="p-1"
                ></Image>
                <div className="font-semibold">{item.name}</div>
                {/* change the numbers of these item */}
                <select
                  value={item.qty}
                  onChange={(e) =>
                    addToCartHandler(item, Number(e.target.value))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button
                  className="default-button mt-2"
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
