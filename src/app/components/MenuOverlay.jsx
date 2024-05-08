import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      <Link
        href="/cart"
        className="bg-orange-400 px-2 py-2 rounded-full hover:bg-slate-500"
      >
        <ShoppingCartIcon className="h-8 w-8 flex md:flex-row" />
      </Link>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
