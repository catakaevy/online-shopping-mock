"use client";
import React from "react";
import Navbar from "./Navbar";
import CartSidebar from "./CartSidebar";
import { useEffect } from "react";
import { hideLoading } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function App({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <CartSidebar />
    </div>
  );
}
