"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const TotalItemsPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <main className="flex min-h-screen flex-col bg-pink-100">
      <div className="py-20 text-black font-bold">
        <h1 className="mb-4 text-xl">Shopping Cart</h1>
        {loading ? (
          <div>Loading...</div>
        ) : cartItems.length === 0 ? (
          <div className="flex flex-col">
            <div className="mb-5">Cart is empty.</div>
            <Link
              href="/home#order"
              className="mt-auto self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="md:grid-cols-4 md:gap-5 flex flex-col">
            <div className="overflow-x-auto md:col-span-3">
              <table className="min-w-3/4 bg-green-300">
                <thead className="border-b">
                  <tr>
                    <th className="p-5 text-left text-black">Food</th>
                    <th className="p-5 text-right text-black">Quantity</th>
                    <th className="p-5 text-right text-black">Price</th>
                    <th className="p-5 text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="text-black font-semibold flex items-center text-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="p-1"
                        ></Image>
                        {item.name}
                      </td>
                      <td className="p-5 text-right">
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
                      </td>
                      <td className="p-5 text-right text-black font-semibold">
                        €{item.price}
                      </td>
                      <td className="p-5 text-center">
                        <button
                          className="mt-auto self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-black">
              <div className="p-5 w-3/4 bg-blue-200">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      Total ({cartItems.reduce((a, c) => a + c.qty, 0)}): €
                      {TotalItemsPrice}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/shipping")}
                      className="mt-auto self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors w-full"
                    >
                      Let&apos;s Order!
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
