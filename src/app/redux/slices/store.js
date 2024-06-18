import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // 修正点

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
