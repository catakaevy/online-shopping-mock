import { Inter } from "next/font/google";
import "../globals.css";
import App from "../components/App";
import { StoreProvider } from "../redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Takoyaki.lv",
  description: "Welcome to our takoyaki home page",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
