import { Inter } from "next/font/google";
import "./globals.css";
import App from "./components/App";
import { StoreProvider } from "./redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takoyaki.lv",
  description: "Welcome to our takoyaki website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
