"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Concept",
    path: "#concept",
  },
  {
    title: "Menu",
    path: "#menu",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#FF4500] bg-opacity-90">
      <div className="flex flex-wrap item-center justify-between mx-auto px-4 py-2">
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
            className="px-2 text-xl md:text-3xl text-white py-3 font-semibold"
          >
            Takoyaki.LV
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {/* Check if the navbar is not open */}
          {!navbarOpen ? (
            // Render a button to open the navbar
            <button
              onClick={() => setNavbarOpen(true)} // Set the state to open the navbar when clicked
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
              {/* Render an icon for the 'bars' menu */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)} // Set the state to close the navbar when clicked
              className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
              {/* Render an icon for the 'X' mark */}
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="py-3">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <Link
              href="/cart"
              className="bg-orange-900 px-3 py-3 rounded-full hover:bg-slate-500"
            >
              <ShoppingCartIcon className="h-8 w-8 flex md:flex-row" />
            </Link>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
