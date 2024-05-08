import React from "react";
import Image from "next/image";

const ConceptSection = () => {
  return (
    <section className="text-black" id="concept">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-green-400 rounded-full">
        <Image
          src="/images/Takoyaki_sets_oct.png"
          width={500}
          height={500}
          alt="desktopImg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
          <p className="text-base md:text-lg">
            Takoyaki (たこ焼き or 蛸焼), literally meaning “grilled octopus”, is
            a popular Japanese snack and street food, especially at summer
            festivals in Japan. It originated from Osaka, and has since spread
            to various parts of Japan and even globally.
            <br />
            Takoyaki is a ball-shaped dish made of a wheat flour-based batter
            and cooked in a special molded pan. The batter is typically filled
            with minced or diced octopus (tako), tempura scraps (tenkasu),
            pickled ginger (beni shoga), and green onion (negi).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
