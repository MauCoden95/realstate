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
  faStar,
  faQuoteRight,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


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



  const reviews = [
    {
      name: 'Gerardo',
      reviews: 'Excelente servicio y atención personalizada. Encontraron la casa de mis sueños rápidamente. Altamente recomendados para cualquier búsqueda inmobiliaria. ¡Gracias por todo!',
      image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Gerardo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0dlcmFyZG8uanBnIiwiaWF0IjoxNzE4NjM5NTU2LCJleHAiOjY1NTcwMzk1NTZ9.gAq-nK9BXuWvSY6JOALW89BlMUDP458N69Fn6LyFimQ&t=2024-06-17T15%3A52%3A35.745Z',
      city: 'Buenos Aires'
    },
    {
      name: 'Lorena',
      reviews: 'Gran experiencia, equipo profesional y atento. Me ayudaron a encontrar la propiedad perfecta. Recomendados al 100%. ¡Servicio impecable y resultados increíbles!',
      image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Lorena.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0xvcmVuYS5qcGciLCJpYXQiOjE3MTg2Mzk1NzIsImV4cCI6NTYwNjYzOTU3Mn0.aXQYZ9B3TwvCCsjDrX1G02gyvdB3a7kBrMfiYkoibAU&t=2024-06-17T15%3A52%3A51.503Z',
      city: 'Buenos Aires'
    },
    {
      name: 'Felipe',
      reviews: '¡Fantástico servicio! Compré mi casa sin problemas gracias a su apoyo. Atención al cliente excepcional y propiedades de calidad. Muy satisfecho.',
      image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Felipe.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0ZlbGlwZS5qcGciLCJpYXQiOjE3MTg2Mzk1ODcsImV4cCI6OTQwODIzOTU4N30.5m9q1YSfLK-5tZems-cIo84clX7wDcGyGiuXdX1NL2Y&t=2024-06-17T15%3A53%3A07.189Z',
      city: 'Tucuman'
    },
    {
      name: 'Lucio',
      reviews: 'Muy satisfecho con el servicio recibido. El equipo fue eficiente y siempre disponible. Encontraron exactamente lo que buscaba. ¡Altamente recomendados!',
      image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Lucio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0x1Y2lvLmpwZyIsImlhdCI6MTcxODYzOTYwMywiZXhwIjozNTU5NTg2Mzk2MDN9.sQsMwAsIp2rW3G7sa0Wdj2mPK1FFKMmBP0q9q10KlWE&t=2024-06-17T15%3A53%3A23.173Z',
      city: 'La Plata'
    },
    {
      name: 'Fernando',
      reviews: '¡Impresionante! Encontré mi hogar ideal en poco tiempo. Profesionales, amables y muy dedicados. Una experiencia excelente de principio a fin.',
      image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Fernando.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0Zlcm5hbmRvLmpwZyIsImlhdCI6MTcxODYzOTYyMCwiZXhwIjo5NDU2MTkxNjIwfQ.ZUCFd9hErksY9CdWI2EHsUQctt68tf54K0HASCYbW6E&t=2024-06-17T15%3A53%3A39.540Z',
      city: 'Zarate'
    }
  ]


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
              onChange={(e) => setProp(e.target.value)}
            >
              <option value="">Operación</option>
              <option value="Venta">Comprar</option>
              <option value="Alquiler">Alquilar</option>
            </select>
            <input
              className="w-full md:w-2/5 h-full py-2 md:py-0 border-b-2 border-teal-600 px-6"
              placeholder="Ubicacion"
              type="text"
            />
            <button className="w-full md:w-1/5 py-2 md:py-0 text-white rounded-lg bg-teal-600 hover:bg-teal-800 duration-300">
              Buscar
            </button>
          </div>
        </div>
        <img
          data-aos="fade-left"
          className="w-full md:w-3/6 mt-24 md:mt-0"
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
              className={`${prop == "Venta"
                ? "bg-teal-600 hover:bg-teal-800 text-white"
                : ""
                } font-bold  p-2 rounded-md ml-3 duration-300`}
            >
              Comprar
            </button>
            <button
              onClick={() => setProp("Alquiler")}
              className={`${prop == "Alquiler"
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
            className={` ${type == "Casa" ? "text-teal-700 underline" : ""
              } text-xl`}
          >
            Casa
          </button>
          <button
            onClick={() => setType("Departamento")}
            className={` ${type == "Departamento" ? "text-teal-700 underline" : ""
              } text-xl`}
          >
            Departamento
          </button>
          <button
            onClick={() => setType("Local Comercial")}
            className={` ${type == "Local Comercial" ? "text-teal-700 underline" : ""
              } text-xl`}
          >
            Local Comercial
          </button>
          <button
            onClick={() => setType("PH")}
            className={` ${type == "PH" ? "text-teal-700 underline" : ""
              } text-xl`}
          >
            PH
          </button>
          <button
            onClick={() => setType("Terreno")}
            className={` ${type == "Terreno" ? "text-teal-700 underline" : ""
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












      <section className="w-full min-h-[30] px-14 mt-32 mb-12">
        <div className="flex items-start justify-between">
          <img className="w-2/4" src="https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/pexels-expect-best-79873-323705-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL3BleGVscy1leHBlY3QtYmVzdC03OTg3My0zMjM3MDUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3MTg2MzE0OTEsImV4cCI6Nzg2MTQ2MzE0OTF9.iKiA7_W3Fbk4q4gbih-r7CmxSaZ4vzIJiRk8H93J3eQ&t=2024-06-17T13%3A38%3A10.731Z" />
          <div className="w-2/4">
            <h2 className="text-4xl font-bold">
              Nosotros tenemos la <span className="text-teal-600">mejor propiedad</span> para vos
            </h2>
            <p className="text-justify mt-5">
              En Real State, entendemos que encontrar la propiedad perfecta es crucial. Por eso, ofrecemos una amplia gama de opciones que se adaptan a todas las necesidades y presupuestos. Desde apartamentos modernos en el corazón de la ciudad hasta tranquilas casas en suburbios, nuestro equipo está aquí para ayudarte a encontrar el lugar ideal para llamar hogar.
            </p>
            <button className="block w-auto px-7 m-auto bg-teal-600 text-white p-2 rounded-md mt-5 duration-300 hover:bg-teal-900">
              Ver más
            </button>
          </div>
        </div>


        <h3 className="text-center text-3xl mt-16 mb-10 font-bold">¿Qué dice la gente?</h3>
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
          {
            reviews.map((item, key) => (
              <SwiperSlide className="relative w-full rounded-md p-8 bg-gray-300 mb-12 flex" key={key}>
                <div className="w-full h-full flex">
                  <img className="w-40" src={item.image} />
                  <div className="ml-16">
                    <p className="text-xl text-justify">{item.reviews}</p>
                    <div className="w-full flex justify-between">
                      <h3 className="text-2xl font-bold mt-5">{item.name}</h3>
                      <h3 className="text-2xl font-bold mt-5">
                        <FontAwesomeIcon
                          className="w-7 text-yellow-600"
                          icon={faStar}
                          style={{ fontSize: "1.5rem" }}
                        />
                        <FontAwesomeIcon
                          className="w-7 text-yellow-600"
                          icon={faStar}
                          style={{ fontSize: "1.5rem" }}
                        />
                        <FontAwesomeIcon
                          className="w-7 text-yellow-600"
                          icon={faStar}
                          style={{ fontSize: "1.5rem" }}
                        />
                        <FontAwesomeIcon
                          className="w-7 text-yellow-600"
                          icon={faStar}
                          style={{ fontSize: "1.5rem" }}
                        />
                        <FontAwesomeIcon
                          className="w-7 text-yellow-600"
                          icon={faStar}
                          style={{ fontSize: "1.5rem" }}
                        />
                      </h3>
                    </div>
                    <h3 className="text-xl mt-1">{item.city}</h3>
                    <FontAwesomeIcon
                      className="absolute top-0 left-0 w-16 text-teal-600"
                      icon={faQuoteRight}
                      style={{ fontSize: "6rem" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>


      <section className="section-newsletter relative w-full h-[400px] mt-32">
        <div className="section-newsletter__div w-full h-full px-14 flex flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold z-40 text-white">Suscribite a nuestro newsletter</h2>
          <p className="text-white my-3">
            Suscríbete para recibir noticias sobre bienes raíces directamente en tu correo electrónico.
          </p>
          <div className="relative w-5/6 flex items-center">
            <input type="email" placeholder="Ingresa tu correo electrónico" className="w-full h-16 p-4 rounded-md focus:border-teal-600 shadow_style" required />
            <button className="absolute right-2 w-auto py-3 px-8 rounded-md bg-teal-600 hover:bg-teal-800 duration-300 text-white shadow_style">Suscribirse</button>
          </div>
        </div>
      </section>

      <footer className="w-full min-h-[300px]">
        <div className="w-full h-full px-14 py-10 flex items-start justify-between">
          <div className="w-2/5">
            <h3 className="text-2xl font-bold">
              Real <span className="text-orange-700">State</span>
            </h3>
            <p className="w-3/4 text-lg text-gray-600 mt-2">Tu portal confiable para bienes raíces</p>
          
            <div className="flex gap-3">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faYoutubeSquare} />
            </div>
          </div>

          <div className="w-1/4">
            <h3 className="font-bold">Acceso rápido</h3>
            <ul className="mt-3">
              <li><a className="hover:text-teal-600" href="/">Nosotros</a></li>
              <li><a className="hover:text-teal-600" href="/">Portfolio</a></li>
              <li><a className="hover:text-teal-600" href="/">Servicio</a></li>
              <li><a className="hover:text-teal-600" href="/">Blog</a></li>
            </ul>
          </div>

          <div className="w-1/4">
            <h3 className="font-bold">Servicios</h3>
            <ul className="mt-3">
              <li><a className="hover:text-teal-600" href="/">Centro de ayuda</a></li>
              <li><a className="hover:text-teal-600" href="/">Comprar</a></li>
              <li><a className="hover:text-teal-600" href="/">Alquilar</a></li>
              <li><a className="hover:text-teal-600" href="/">Vender</a></li>
            </ul>
          </div>

          <div className="w-1/4">
            <h3 className="font-bold">Contactanos</h3>
            <ul className="mt-3">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span className="ml-3">+54 351 4567890</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-3">info@realstate.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-20 bg-gray-200 flex items-center justify-center">
          <p className="text-center font-bold">Copyright 2024 - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
