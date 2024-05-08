import React from "react";
import Image from "next/image";

const MenuData = [
  {
    id: 1,
    name: "Takoyaki(plane)",
    description: "",
    price: "5",
  },
  {
    id: 2,
    name: "Takoyaki(cheese)",
    description: "",
    price: "6.5",
  },
  {
    id: 3,
    name: "Takoyaki(chili source)",
    description: "",
    price: "6.5",
  },
  {
    id: 4,
    name: "Takoyaki(garlic source)",
    description: "",
    price: "6.5",
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

      <p className="text-black py-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ullam et
        ab, natus dolorum eveniet doloremque in voluptas ad porro dolores
        tenetur itaque ipsam temporibus perferendis? Cum corporis illum
        possimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Expedita enim consequuntur, magnam ipsum deleniti blanditiis provident,
        odio perferendis veritatis culpa itaque nemo at dolores dolorem quos,
        repudiandae doloribus corrupti quam? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Fugit repellat dolore cupiditate, quis
        perferendis numquam corrupti neque. Accusamus ullam odio consequatur.
        Quo asperiores quibusdam alias sint eveniet possimus architecto
        assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis debitis officia voluptatum fugit illo doloremque sunt nostrum
        perspiciatis nulla. A sunt harum ab veritatis tempore placeat laboriosam
        est quaerat possimus!
      </p>
    </section>
  );
};

export default MenuSection;
