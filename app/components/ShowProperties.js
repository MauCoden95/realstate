import React from 'react'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faInfoCircle,
    faHeart
  } from "@fortawesome/free-solid-svg-icons";
  
import Link from "next/link";
import useProperties from '../hooks/useProperties';

export const ShowProperties = () => {
    
    
  const [prop, setProp] = useState("");
  const [type, setType] = useState("");
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const properties = useProperties();
  const [filteredProperties, setFilteredProperties] = useState(properties);

  

  useEffect(() => {
    filterProperties();
  }, [prop, type, properties, showOnlyAvailable]);

 

  const filterProperties = () => {
    let propFilter = properties.filter((item) => {
      let matchesOperation = (!prop || item.operation === prop);
      let matchesType = (!type || item.type === type);

      if (showOnlyAvailable) {
        return matchesOperation && matchesType && item.state === "Disponible";
      } else {
        return matchesOperation && matchesType;
      }
    });

    setFilteredProperties(propFilter);
  };

  return (
    <section className="w-full min-h-[30] px-4 sm:px-14 mt-20 mb-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-start">
          <h3 className="text-2xl sm:text-4xl font-bold">Propiedades destacadas</h3>
          <div className="mt-4 sm:mt-0 sm:ml-20 flex flex-wrap">
            <button
              onClick={() => setProp("Venta")}
              className={`${prop == "Venta"
                ? "bg-teal-600 hover:bg-teal-800 text-white"
                : ""
                } font-bold p-2 rounded-md ml-3 duration-300`}
            >
              Comprar
            </button>
            <button
              onClick={() => setProp("Alquiler")}
              className={`${prop == "Alquiler"
                ? "bg-teal-600 hover:bg-teal-800 text-white"
                : ""
                } font-bold p-2 rounded-md ml-3 duration-300`}
            >
              Alquilar
            </button>
          </div>
        </div>
        <div className="w-full my-12 flex flex-wrap items-center justify-between">
          <button
            onClick={() => setType("Casa")}
            className={` ${type == "Casa" ? "text-teal-700 underline" : ""
              } text-lg sm:text-xl`}
          >
            Casa
          </button>
          <button
            onClick={() => setType("Departamento")}
            className={` ${type == "Departamento" ? "text-teal-700 underline" : ""
              } text-lg sm:text-xl`}
          >
            Departamento
          </button>
          <button
            onClick={() => setType("Local Comercial")}
            className={` ${type == "Local Comercial" ? "text-teal-700 underline" : ""
              } text-lg sm:text-xl`}
          >
            Local Comercial
          </button>
          <button
            onClick={() => setType("PH")}
            className={` ${type == "PH" ? "text-teal-700 underline" : ""
              } text-lg sm:text-xl`}
          >
            PH
          </button>
          <button
            onClick={() => setType("Terreno")}
            className={` ${type == "Terreno" ? "text-teal-700 underline" : ""
              } text-lg sm:text-xl`}
          >
            Terreno
          </button>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={(e) => setShowOnlyAvailable(e.target.checked)}
          />
          <span className="ml-3 text-sm sm:text-base">Mostrar sólo propiedades disponibles</span>
        </label>
        <br />
        <div className="w-full min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.length == 0 ? (
            <div className="col-span-1 sm:col-span-3 text-center text-xl mt-12 text-gray-500">
              No hay propiedades disponibles para este filtro.
            </div>
          ) : (
            filteredProperties.map((item, key) => (
              <div
                className="relative shadow_style w-full min-h-[50px] mt-16 bg-gray-200 p-2 rounded-md"
                key={key}
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
                <button className="absolute right-14 bottom-2 hover:bg-teal-400 duration-300 p-1 rounded-md border border-teal-500">
                  <FontAwesomeIcon
                    className="w-7 text-black duration-300"
                    icon={faHeart}
                    style={{ fontSize: "1rem" }}
                  />
                </button>
                <Link
                  href={`/info-propiedad/${item.id}`}
                  className="absolute right-2 bottom-2"
                >
                  <FontAwesomeIcon
                    className="w-10 text-teal-600 duration-300 hover:text-teal-900"
                    icon={faInfoCircle}
                    style={{ fontSize: "1.8rem" }}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
  )
}
