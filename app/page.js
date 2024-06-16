"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHandshake,
  faBuilding,
  faBed,
  faInfoCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [prop, setProp] = useState("");
  const [type, setType] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    fetchData();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [prop, type, properties, showOnlyAvailable]);

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const authorization = process.env.NEXT_PUBLIC_AUTHORIZATION;

    const response = await fetch(
      "https://ggvktlgwmfhumvfhiliw.supabase.co/rest/v1/Properties?select=*&limit=9",
      {
        method: "GET",
        headers: {
          apiKey: apiKey,
          authorization: authorization,
        },
      }
    );
    const data = await response.json();
    setProperties(data);
    setFilteredProperties(data); 
  };

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
    <div>
      <section className="relative w-full min-h-[30rem] flex gap-7 items-center px-14 py-8">
        <div data-aos="fade-right" className="w-3/6 h-full">
          <h2 className="text-4xl">
            Encontrá tu <span className="text-teal-600">lugar perfecto</span>{" "}
            para vivir
          </h2>
          <p className="text-justify my-5">
            Encuentra tu hogar ideal con Real State. Ofrecemos las mejores
            propiedades y asesoramiento personalizado para hacer realidad tus
            sueños inmobiliarios. ¡Descubre tu nuevo hogar hoy mismo!
          </p>
          <div className="absolute w-[600px] h-12 mt-6 flex gap-3">
            <select
              className="w-1/5 h-full text-center border-b-2 border-teal-600"
              id="opciones"
              name="opciones"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Tipo</option>
              <option value="Departamento">Departamento</option>
              <option value="Casa">Casa</option>
              <option value="Quinta">Quinta</option>
              <option value="Terreno">Terreno</option>
              <option value="Galpón">Galpón</option>
              <option value="Local">Local</option>
            </select>
            <select
              className="w-1/5 h-full text-center border-b-2 border-teal-600"
              id="opciones"
              name="opciones"
              onChange={(e) => setProp(e.target.value)}
            >
              <option value="">Operación</option>
              <option value="Venta">Comprar</option>
              <option value="Alquiler">Alquilar</option>
            </select>
            <input
              className="w-2/5 h-full border-b-2 border-teal-600 px-6"
              placeholder="Ubicacion"
              type="text"
            />
            <button className="w-1/5 text-white rounded-lg bg-teal-600 hover:bg-teal-800 duration-300">
              Buscar
            </button>
          </div>
        </div>
        <img
          data-aos="fade-left"
          className="w-3/6"
          src="https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Banner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0Jhbm5lci5wbmciLCJpYXQiOjE3MTgzMzMxNzUsImV4cCI6MTAzNTgzMzMxNzV9.gh5wRj7HpBSkR9ndE0ykOwQoSUsardNg8CNOBf0ifpE&t=2024-06-14T02%3A46%3A14.668Z"
        />
      </section>

      <section className="w-full min-h-[30] px-14 mb-12">
        <h2 className="text-center my-12 text-4xl">¿Porque elegirnos?</h2>
        <div className="w-5/6 m-auto flex gap-3 items-center justify-between">
          <article className="w-1/3 flex flex-col items-center py-12">
            <FontAwesomeIcon
              className="w-10 text-teal-600"
              icon={faCheckCircle}
              style={{ fontSize: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Experiencia comprobada</h3>
            <p className="text-center">
              Décadas de éxito en el mercado inmobiliario
            </p>
          </article>
          <article className="w-1/3 flex flex-col items-center py-12">
            <FontAwesomeIcon
              className="w-10 text-teal-600"
              icon={faHandshake}
              style={{ fontSize: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Atención personalizada</h3>
            <p className="text-center">
              Servicios adaptados a tus necesidades y deseos
            </p>
          </article>
          <article className="w-1/3 flex flex-col items-center py-12">
            <FontAwesomeIcon
              className="w-10 text-teal-600"
              icon={faBuilding}
              style={{ fontSize: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Variedad de propiedades</h3>
            <p className="text-center">
              Opciones para todos los gustos y presupuestos
            </p>
          </article>
        </div>
      </section>

      <section className="w-full min-h-[30] px-14 mt-20 mb-12">
        <div className="w-full flex items-center justify-start">
          <h3 className="text-4xl font-bold">Propiedades destacadas</h3>
          <div className="ml-20">
            <button
              onClick={() => setProp("Venta")}
              className={`${
                prop == "Venta"
                  ? "bg-teal-600 hover:bg-teal-800 text-white"
                  : ""
              } font-bold  p-2 rounded-md ml-3 duration-300`}
            >
              Comprar
            </button>
            <button
              onClick={() => setProp("Alquiler")}
              className={`${
                prop == "Alquiler"
                  ? "bg-teal-600 hover:bg-teal-800 text-white"
                  : ""
              } font-bold  p-2 rounded-md ml-3 duration-300`}
            >
              Alquilar
            </button>
          </div>
        </div>
        <div className="w-full my-12 flex items-center justify-between">
          <button
            onClick={() => setType("Casa")}
            className={` ${
              type == "Casa" ? "text-teal-700 underline" : ""
            } text-xl`}
          >
            Casa
          </button>
          <button
            onClick={() => setType("Departamento")}
            className={` ${
              type == "Departamento" ? "text-teal-700 underline" : ""
            } text-xl`}
          >
            Departamento
          </button>
          <button
            onClick={() => setType("Local Comercial")}
            className={` ${
              type == "Local Comercial" ? "text-teal-700 underline" : ""
            } text-xl`}
          >
            Local Comercial
          </button>
          <button
            onClick={() => setType("PH")}
            className={` ${
              type == "PH" ? "text-teal-700 underline" : ""
            } text-xl`}
          >
            PH
          </button>
          <button
            onClick={() => setType("Terreno")}
            className={` ${
              type == "Terreno" ? "text-teal-700 underline" : ""
            } text-xl`}
          >
            Terreno
          </button>
        </div>
        <label>
        <input
          type="checkbox"
          checked={showOnlyAvailable}
          onChange={(e) => setShowOnlyAvailable(e.target.checked)}
        />
          <span className="ml-3">Mostrar sólo propiedades disponibles</span>
        </label>
        <br />
        <div className="w-full min-h-[300px] grid gap-6 grid-cols-3">
          {filteredProperties.length == 0 ? (
            <div className="col-span-3 text-center text-xl mt-12 text-gray-500">
              No hay propiedades disponibles para este filtro.
            </div>
          ) : (
            filteredProperties.map((item, key) => (
              <div
                className="relative shadow_style w-full min-h-[50px] mt-16 bg-gray-200 p-2 rounded-md"
                key={key}
              >
                <span
                  className={`${
                    item.state == "Disponible"
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
                <h2 className="text-left mt-5 mb-1 font-bold text-xl">
                  {item.address}
                </h2>
                <h2 className="text-left mb-2">{item.city}</h2>
                <div className="w-full flex">
                  <h3 className="text-center my-2">{item.type}</h3>
                  <h3 className="text-center my-2 ml-5">{item.operation}</h3>
                </div>
                <h2 className="text-left mb-2 text-2xl text-teal-800">
                  {item.price}
                </h2>
                <h3>
                  <FontAwesomeIcon
                    className="w-7 text-teal-600"
                    icon={faBed}
                    style={{ fontSize: "1.3rem" }}
                  />
                  <span className="text-xl ml-3">{item.ambients}</span>
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
    </div>
  );
}
