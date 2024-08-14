import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHandshake,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

export const Banner = () => {

  const router = useRouter();


  const [type, setType] = useState("");
  const [operation, setOperation] = useState("");
  const [location, setLocation] = useState("");


  const searchProperty = (e) => {
    e.preventDefault();



    console.log(type,operation,location);


  };

  return (
    <div>
      <section className="relative w-full min-h-[30rem] flex flex-col md:flex-row gap-7 items-center px-8 md:px-14 py-8">
        <div data-aos="fade-right" className="w-full md:w-3/6 h-full">
          <h2 className="text-4xl text-center md:text-left">
            Encontrá tu <span className="text-teal-600">lugar perfecto</span>{" "}
            para vivir
          </h2>
          <p className="text-justify my-5">
            Encuentra tu hogar ideal con Real State. Ofrecemos las mejores
            propiedades y asesoramiento personalizado para hacer realidad tus
            sueños inmobiliarios. ¡Descubre tu nuevo hogar hoy mismo!
          </p>
          <div className="absolute md:relative w-full md:w-[600px] h-12 mt-6 md:mt-20 grid grid-cols-2 md:flex gap-3">
            <select
              className="w-full md:w-1/5 h-full text-center py-2 md:py-0 border-b-2 border-teal-600"
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
              className="w-full md:w-1/5 h-full text-center py-2 md:py-0 border-b-2 border-teal-600"
              id="opciones"
              name="opciones"
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="">Operación</option>
              <option value="Venta">Comprar</option>
              <option value="Alquiler">Alquilar</option>
            </select>
            <input
              className="w-full md:w-2/5 h-full py-2 md:py-0 border-b-2 border-teal-600 px-6"
              placeholder="Ubicacion"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={searchProperty} className="w-full md:w-1/5 py-2 md:py-0 md:z-40 text-white rounded-lg bg-teal-600 hover:bg-teal-800 duration-300">
              Buscar
            </button>
          </div>
        </div>
        <img
          data-aos="fade-left"
          className="w-full md:w-3/6 mt-36 md:mt-0 md:z-20"
          src="https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Banner2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0Jhbm5lcjIucG5nIiwiaWF0IjoxNzIzNTg2Nzc3LCJleHAiOjI3NjQzNTg2Nzc3fQ.kn0-39DfVDtyWk2L9LaeeWFrPii42qsCWZbyzURhfv4&t=2024-08-13T22%3A06%3A15.529Z"
        />
      </section>
      <section className="w-full min-h-[30] px-4 sm:px-14 mb-12">
        <h2 className="text-center my-12 text-xl sm:text-2xl md:text-4xl">¿Por qué elegirnos?</h2>
        <div className="w-full sm:w-5/6 m-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          <article className="w-full sm:w-1/3 flex flex-col items-center py-6 sm:py-12">
            <FontAwesomeIcon
              className="w-8 sm:w-10 text-teal-600"
              icon={faCheckCircle}
              style={{ fontSize: "2rem", sm: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Experiencia comprobada</h3>
            <p className="text-center">
              Décadas de éxito en el mercado inmobiliario
            </p>
          </article>
          <article className="w-full sm:w-1/3 flex flex-col items-center py-6 sm:py-12">
            <FontAwesomeIcon
              className="w-8 sm:w-10 text-teal-600"
              icon={faHandshake}
              style={{ fontSize: "2rem", sm: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Atención personalizada</h3>
            <p className="text-center">
              Servicios adaptados a tus necesidades y deseos
            </p>
          </article>
          <article className="w-full sm:w-1/3 flex flex-col items-center py-6 sm:py-12">
            <FontAwesomeIcon
              className="w-8 sm:w-10 text-teal-600"
              icon={faBuilding}
              style={{ fontSize: "2rem", sm: "2.5rem" }}
            />
            <h3 className="font-bold my-4">Variedad de propiedades</h3>
            <p className="text-center">
              Opciones para todos los gustos y presupuestos
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
