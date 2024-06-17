import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

const MenuData = [
  {
    id: 1,
    name: "Takoyaki",
    description:
      "The skin is crispy, the inside is soft, and the octopus is plump. Signature takoyaki is absolutely delicious!!",
    price: "6.5",
    image: "/images/product/1takoyaki.png",
  },
  {
    id: 2,
    name: "Teritama",
    description:
      "The piping hot takoyaki is topped with a generous amount of our special teriyaki sauce and fresh egg salad made in-house. A rich and tasty takoyaki that is very satisfying to eat.",
    price: "7.0",
    image: "/images/product/2teritama.png",
  },
  {
    id: 3,
    name: "Negidako",
    description:
      "This refreshing Japanese-style takoyaki is made by topping hot takoyaki with fresh, crunchy spring onions and dipping it in the special tempura sauce that comes with it.",
    price: "7.0",
    image: "/images/product/3negidako.png",
  },
  {
    id: 4,
    name: "Cheese Mentai",
    description:
      "Hot takoyaki topped with a generous amount of special mentaiko mayonnaise made with Hakata mentaiko and two types of cheese (Parmesan and mozzarella). These takoyaki are popular for their rich flavor.",
    price: "7.0",
    image: "/images/product/4cheesementai.png",
  },
  {
    id: 5,
    name: "Family Pack (16 pieces)",
    description:
      "Absolutely delicious!! Get even more value for your money on takoyaki! Enjoy them with your friends or family :)",
    price: "12.5",
    image: "/images/product/5_16takoyakiset.png",
  },
  {
    id: 6,
    name: "Danran Pack (24 pieces)",
    description:
      "Absolutely delicious!! Let's all enjoy takoyaki! Enjoy them in a party or special events with your family or friends!",
    price: "18.5",
    image: "/images/product/6_24takoyakiset.png",
  },
];

const MenuSection = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="py-10" id="menu">
      <div className="flex flex-wrap justify-between py-4 bg-purple-200 rounded-lg">
        <div className="text-purple-200">test</div>
        <Image
          className=""
          src="/images/Takoyakichan.png"
          width={100}
          height={200}
          alt="Takoyakichan"
        />
        <h2 className="text-center text-4xl font-bold text-black mt-7 mb-8 md:mb-12">
          Menu
        </h2>
        <Image
          className=""
          src="/images/Takoyakichan.png"
          width={100}
          height={200}
          alt="Takoyakichan"
        />
        <div className="text-purple-200">test</div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-5">
        {MenuData.map((product) => {
          const discountedPrice = session
            ? `${(product.price * 0.8).toFixed(2)} (Discounted!)`
            : product.price;
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={discountedPrice}
              image={product.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;
