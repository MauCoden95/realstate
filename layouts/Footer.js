import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faYoutubeSquare,
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full min-h-[300px]">
        <div className="w-full h-full px-8 sm:px-14 py-10 flex flex-col sm:flex-row items-start justify-between">
          <div className="w-full sm:w-2/5 mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold">
              Real <span className="text-orange-700">State</span>
            </h3>
            <p className="w-full sm:w-3/4 text-lg text-gray-600 mt-2">Tu portal confiable para bienes raíces</p>
          
            <div className="flex gap-3 mt-4">
              <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl" />
              <FontAwesomeIcon icon={faInstagramSquare} className="text-2xl" />
              <FontAwesomeIcon icon={faYoutubeSquare} className="text-2xl" />
            </div>
          </div>

          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="font-bold">Acceso rápido</h3>
            <ul className="mt-3">
              <li><a className="hover:text-teal-600" href="/">Nosotros</a></li>
              <li><a className="hover:text-teal-600" href="/">Portfolio</a></li>
              <li><a className="hover:text-teal-600" href="/">Servicio</a></li>
              <li><a className="hover:text-teal-600" href="/">Blog</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="font-bold">Servicios</h3>
            <ul className="mt-3">
              <li><a className="hover:text-teal-600" href="/">Centro de ayuda</a></li>
              <li><a className="hover:text-teal-600" href="/">Comprar</a></li>
              <li><a className="hover:text-teal-600" href="/">Alquilar</a></li>
              <li><a className="hover:text-teal-600" href="/">Vender</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/4">
            <h3 className="font-bold">Contactanos</h3>
            <ul className="mt-3">
              <li>
                <FontAwesomeIcon icon={faPhone} className="text-lg" />
                <span className="ml-3">+54 351 4567890</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                <span className="ml-3">info@realstate.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-20 px-8 sm:px-14 bg-gray-200 flex items-center justify-center">
          <p className="text-center font-bold">Copyright 2024 - Todos los derechos reservados</p>
        </div>
      </footer>
  )
}
