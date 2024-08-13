import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarked,
  faKey,
  faHome,
  faCheckCircle,
  faBuilding,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";



export const DataProperty = ({ property }) => {
  return (
    <div>
      <section className='w-full min-h-[400px] px-4 md:px-14 rounded-lg border-2 border-gray-500 my-14 py-5'>
        <div className='w-full flex flex-col md:flex-row gap-6'>
          <img src={property.image} className='w-full md:w-2/4 h-[200px] md:h-[300px] rounded-md' />
          <div className='w-full md:w-2/4'>
            <h2 className='text-lg sm:text-xl font-bold my-3'> <FontAwesomeIcon
              className="w-6 sm:w-8 md:w-10 mr-3 text-teal-600 duration-300 hover:text-teal-900"
              icon={faMapMarked}
              style={{ fontSize: "1.2rem" }}
            />{property.address}, {property.city}</h2>
            <h2 className='my-4 text-lg sm:text-xl'>
              <FontAwesomeIcon
                className="w-5 sm:w-6 md:w-7 mr-3 text-teal-600 duration-300 hover:text-teal-900"
                icon={faKey}
                style={{ fontSize: "1rem" }}
              />{property.operation} desde {property.price}</h2>
            <h2 className='mt-7 mb-3 text-justify'>{property.description}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h2 className='my-4 sm:my-7'> <FontAwesomeIcon
                className="w-5 sm:w-6 md:w-7 mr-3 text-teal-600 duration-300 hover:text-teal-900"
                icon={faHome}
                style={{ fontSize: "1rem" }}
              />{property.ambients}</h2>
              <h2 className='my-7'> <FontAwesomeIcon
                className="w-5 sm:w-6 md:w-7 mr-3 text-teal-600 duration-300 hover:text-teal-900"
                icon={faCheckCircle}
                style={{ fontSize: "1rem" }}
              /><span className={`${property.state == "Disponible"
                ? "bg-green-700"
                : property.state == "Vendida"
                  ? "bg-red-700"
                  : property.state == "Reservada"
                    ? "bg-orange-700"
                    : property.state == "Alquilado"
                      ? "bg-blue-700"
                      : ""
                } text-white p-2 rounded-lg`}>{property.state}</span></h2>
              <h2 className=''> <FontAwesomeIcon
                className="w-5 sm:w-6 md:w-7 mr-3 text-teal-600 duration-300 hover:text-teal-900"
                icon={faBuilding}
                style={{ fontSize: "1rem" }}
              />{property.type}</h2>
            </div>
            <button className='w-full bg-teal-600 hover:bg-teal-900 duration-300 p-3 sm:p-4 md:p-5 rounded-lg mt-8'>
              Contactar
              <FontAwesomeIcon
                className="w-5 sm:w-6 md:w-7"
                icon={faEnvelope}
                style={{ fontSize: "1rem" }}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
