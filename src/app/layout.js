import { Inter } from "next/font/google";
import "./globals.css";
import { ShopContextProvider } from "./context/shop-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takoyaki.lv",
  description: "Welcome to our takoyaki website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopContextProvider>{children}</ShopContextProvider>
      </body>
    </html>
  );
}
