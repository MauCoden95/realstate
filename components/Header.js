import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-24 px-14 flex items-center justify-between">
      <Link className="text-teal-800 text-3xl" href="/">
        Real <span className="text-orange-700">State</span>
      </Link>
      <nav className="w-2/5 h-full">
        <ul className="w-full h-full flex items-center justify-between">
          <Link className="hover:text-teal-700 duration-300" href="/">
            Inicio
          </Link>
          <Link className="hover:text-teal-700 duration-300" href="/">
            Nosotros
          </Link>
          <Link className="hover:text-teal-700 duration-300" href="/">
            Propiedades
          </Link>
          <Link className="hover:text-teal-700 duration-300" href="/">
            Contacto
          </Link>
        </ul>
      </nav>
      <Link
        className="text-xl px-5 py-3 bg-teal-600 hover:bg-teal-800 duration-300 text-white rounded-md"
        href="/"
      >
        Login
      </Link>
    </header>
  );
};
