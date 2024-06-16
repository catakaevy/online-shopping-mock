import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

const MenuData = [
  {
    id: 1,
    name: "Takoyaki",
    description:
      "The skin is crispy, the inside is soft, and the octopus is plump. Signature takoyaki is absolutely delicious!!",
    price: "3.44",
    image: "/images/product/1takoyaki.png",
  },
  {
    id: 2,
    name: "Teritama",
    description:
      "The piping hot takoyaki is topped with a generous amount of our special teriyaki sauce and fresh egg salad made in-house. A rich and tasty takoyaki that is very satisfying to eat.",
    price: "4.04",
    image: "/images/product/2teritama.png",
  },
  {
    id: 3,
    name: "Negidako",
    description:
      "This refreshing Japanese-style takoyaki is made by topping hot takoyaki with fresh, crunchy spring onions and dipping it in the special tempura sauce that comes with it.",
    price: "4.04",
    image: "/images/product/3negidako.png",
  },
  {
    id: 4,
    name: "Cheese Mentai",
    description:
      "Hot takoyaki topped with a generous amount of special mentaiko mayonnaise made with Hakata mentaiko and two types of cheese (Parmesan and mozzarella). These takoyaki are popular for their rich flavor.",
    price: "4.04",
    image: "/images/product/4cheesementai.png",
  },
  {
    id: 5,
    name: "Family Pack (16 pieces)",
    description:
      "Absolutely delicious!! Get even more value for your money on takoyaki!",
    price: "6.83",
    image: "/images/product/5_16takoyakiset.png",
  },
  {
    id: 6,
    name: "Danran Pack (24 pieces)",
    description: "Absolutely delicious!! Let's all enjoy takoyaki!",
    price: "9.97",
    image: "/images/product/6_24takoyakiset.png",
  },
];

const MenuSection = () => {
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
        {MenuData.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
