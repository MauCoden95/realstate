"use client";

import React,{useState} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {

  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <header className="w-full h-24 px-8 md:px-14 flex items-center justify-between">
      <Link className="text-teal-800 text-3xl" href="/">
        Real <span className="text-orange-700">State</span>
      </Link>
      <nav className={`absolute ${nav ? "right-0" : "-right-[1500px]"} top-0 duration-700 z-40 w-full h-full bg-gray-300 md:bg-transparent md:relative md:right-0 md:w-3/5 md:h-full`}>
        <button onClick={handleNav}>
          <FontAwesomeIcon
            className="absolute md:hidden right-0 w-10 text-black"
            icon={faTimes}
            style={{ fontSize: "2.1rem" }}
          />
        </button>
        <ul className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between h-full md:h-auto">
          <Link className="my-5 hover:text-teal-700 duration-300" href="/">
            Inicio
          </Link>
          <Link className="my-5 hover:text-teal-700 duration-300" href="/">
            Nosotros
          </Link>
          <Link className="my-5 hover:text-teal-700 duration-300" href="/">
            Propiedades
          </Link>
          <Link className="my-5 hover:text-teal-700 duration-300" href="/">
            Contacto
          </Link>
        </ul>
      </nav>

      <button className="md:hidden" onClick={handleNav}>
        <FontAwesomeIcon
          className="w-10 text-teal-600"
          icon={faBars}
          style={{ fontSize: "1.3rem" }}
        />
      </button>

      <Link
        className="text-sm md:text-xl px-5 py-3 bg-teal-600 hover:bg-teal-800 duration-300 text-white rounded-md"
        href="/"
      >
        Login
      </Link>
    </header>
  );
};
