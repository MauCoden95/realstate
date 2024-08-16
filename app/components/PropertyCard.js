import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faInfoCircle,
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

  import Swal from 'sweetalert2';

import '@/assets/css/Styles.css'

export const PropertyCard = ({ item }) => {

    const addFavourite = () => {
        Swal.fire({
          title: 'Error',
          text: 'Debe estar logueado para agregar propiedad como favorita.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#d33'
        });
      };

    return (
        <div
            className="relative shadow_style w-full min-h-[50px] mt-16 bg-gray-200 p-2 rounded-md duration-200"
            
        >
            <span
                className={`${item.state == "Disponible"
                    ? "bg-green-800"
                    : item.state == "Vendida"
                        ? "bg-red-800"
                        : item.state == "Reservada"
                            ? "bg-orange-800"
                            : item.state == "Alquilado"
                                ? "bg-blue-800"
                                : ""
                    } absolute -right-5 text-white rounded-md px-3 rotate-45`}
            >
                {item.state}
            </span>
            <img className="w-full h-48 rounded-md" src={item.image} />
            <h2 className="text-left mt-5 mb-1 font-bold text-lg sm:text-xl">
                {item.address}
            </h2>
            <h2 className="text-left mb-2 text-base sm:text-lg">{item.city}</h2>
            <div className="w-full flex justify-between">
                <h3 className="text-center my-2 text-sm sm:text-base">{item.type}</h3>
                <h3 className="text-center my-2 ml-5 text-sm sm:text-base">{item.operation}</h3>
            </div>
            <h2 className="text-left mb-2 text-xl sm:text-2xl text-teal-800">
                {item.price}
            </h2>
            <h3 className="flex items-center">
                <FontAwesomeIcon
                    className="w-7 text-teal-600"
                    icon={faBed}
                    style={{ fontSize: "1.3rem" }}
                />
                <span className="text-lg sm:text-xl ml-3">{item.ambients}</span>
            </h3>
            <button onClick={addFavourite} className="absolute right-14 bottom-2 hover:bg-teal-400 duration-300 p-1 rounded-md border border-teal-500">
                <FontAwesomeIcon
                    className="w-7 text-black duration-300"
                    icon={faHeart}
                    style={{ fontSize: "1rem" }}
                />
            </button>
            <Link
                href={`/propiedad/${item.id}`}
                className="absolute right-2 bottom-2"
            >
                <FontAwesomeIcon
                    className="w-10 text-teal-600 duration-300 hover:text-teal-900"
                    icon={faInfoCircle}
                    style={{ fontSize: "1.8rem" }}
                />
            </Link>
        </div>
    )
}
