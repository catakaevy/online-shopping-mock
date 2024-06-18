import Navbar from "../components/Navbar";
import ConceptSection from "../components/ConceptSection";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ContactSection from "../components/ContactSection";
import { data } from "../utils/data";
import OrderItemSection from "../components/OrderItemSection";

export default function Home() {
  const { products } = data;
  return (
    <main className="flex min-h-screen flex-col bg-pink-100">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ConceptSection />
        <MenuSection />
        <ContactSection />
        <OrderItemSection />
      </div>
    </main>
  );
}
