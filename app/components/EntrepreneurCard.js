import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faInfoCircle,
    faClock
} from "@fortawesome/free-solid-svg-icons";

import Swal from 'sweetalert2';

import '@/assets/css/Styles.css'


export const EntrepreneurCard = ({ item }) => {



    return (
        <div
            className="relative shadow_style w-full min-h-[50px] mt-16 bg-gray-200 p-2 rounded-md duration-200"

        >
            <span
                className={`${item.state == "Disponible"
                    ? "bg-green-800"
                    : item.state == "Terminado"
                        ? "bg-red-800"
                        : item.state == "En construccion"
                            ? "bg-blue-800"
                            : ""
                    } absolute -right-8 top-4 text-white rounded-md px-3 rotate-45 z-40`}
            >
                {item.state}
            </span>
            <img className="w-full h-48 rounded-md" src={item.image} />
            <h2 className="text-left mt-5 mb-1 font-bold text-lg sm:text-3xl">
                {item.price}
            </h2>
            <h2 className="text-left mb-2 text-base sm:text-2xl">{item.city}</h2>
            <h2 className="text-left mb-2 text-xl sm:text-lg">
                {item.address}
            </h2>
            <div className="w-full flex justify-between">
                <h3 className="text-center my-2 text-sm sm:text-base">{item.type}</h3>
                <h3 className="text-center my-2 ml-5 text-sm sm:text-base">{item.operation}</h3>
            </div>

            <h3>
                <FontAwesomeIcon
                    className="w-5 mr-1"
                    icon={faClock}
                    style={{ fontSize: "1.1rem" }}
                />
                {item.ending}
            </h3>

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
