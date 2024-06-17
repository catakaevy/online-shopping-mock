import React from "react";
import User from "../User";
import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="flex">
        <Link href={"/"}>
          <Image
            className="hover:scale-125"
            src="/images/Takoyakichan.png"
            width={50}
            height={50}
            alt="Takoyakichan"
          />
        </Link>
        <Link
          href={"/"}
          className="px-2 text-xl md:text-3xl text-black py-3 font-semibold"
        >
          Takoyaki.LV
        </Link>
      </div>
      <User />
    </div>
  );
};

export default Header;
