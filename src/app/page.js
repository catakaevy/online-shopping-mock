import Image from "next/image";
import Navbar from "./components/Navbar";
import ConceptSection from "./components/ConceptSection";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
// import ShopSection from "./components/ShopSection";
// import CartSection from "./components/CartSection";
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";
// import ShopContextProvider from "./components/shop-context";

/* <ShopSection />
        <CartSection />
        <EmailSection /> */

/* <Footer /> */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-pink-100">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ConceptSection />
        <MenuSection />
        <ContactSection />
      </div>
    </main>
  );
}
