"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {

  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const handleLogin = () => {
    setLogin(!login);
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
          <Link className="my-5 hover:text-teal-700 duration-300" href="/nosotros">
            Nosotros
          </Link>
          <Link className="my-5 hover:text-teal-700 duration-300" href="/">
            Propiedades
          </Link>
          <Link className="my-5 hover:text-teal-700 duration-300" href="/contacto">
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

      <button
        onClick={handleLogin}
        className="text-sm md:text-xl px-5 py-3 bg-teal-600 hover:bg-teal-800 duration-300 text-white rounded-md"
      >
        Login
      </button>
      <form        
        className={`${login ? 'login-show' : 'login-hidden'} absolute top-24 right-0 w-60 h-auto z-50 bg-gray-300 rounded-lg`}>
        <h2 className="text-center text-2xl my-1">Login</h2>
        <input
          className="block w-5/6 m-auto my-2 appearance-none duration-300 border-2 focus:outline-none focus:shadow-outline focus:border-teal-700 py-1 px-2"
          type="text"
          placeholder="Correo electrónico"
        />
        <input
          className="block w-5/6 m-auto my-2 appearance-none duration-300 border-2 focus:outline-none focus:shadow-outline focus:border-teal-700 py-1 px-2"
          type="password"
          placeholder="Contraseña"
        />
        <input
          className="cursor-pointer block w-5/6 m-auto my-2 duration-300 border bg-cyan-400 hover:bg-cyan-600 py-1 px-2"
          type="submit"
        />
        <h3 className="mt-4 mb-2 text-center">¿No tiene cuenta?</h3>
        <Link
          className="block w-auto text-center mb-3 text-cyan-900 hover:text-cyan-600 duration-300"
          href="/registro">
          Registrese acá
        </Link>
      </form>
    </header>
  );
};
