import React from 'react'
import Image from 'next/image';
import House from '../../assets/img/House.png';
import Building from '../../assets/img/Building.png';
import Lot from '../../assets/img/Lot.png';
import Garage from '../../assets/img/Garage.png';
import Cart from '../../assets/img/Cart.png';
import Key from '../../assets/img/Key.png';



export const PropertyFilters = ({ title, minPrice, setMinPrice, maxPrice, setMaxPrice, city, setCity, prop, setProp, type, setType, showOnlyAvailable, setShowOnlyAvailable }) => {
    return (
        <div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-start">
                <h3 className="text-2xl sm:text-4xl font-bold">{title}</h3>
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


            <div className='w-full flex flex-col md:flex-row md:gap-9'>
                <label
                    htmlFor="UserEmail"
                    className="block w-full md:w-2/4 h-16 text-sm md:text-base overflow-hidden rounded-md my-5 border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span className=" font-medium mb-12 text-gray-700"> Ubicación</span>

                    <input
                        onChange={(e) => setCity(e.target.value.trim())}
                        type="text"
                        placeholder="Ciudad o barrio..."
                        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>


                <div className='w-full md:w-2/4 flex gap-3'>
                    <label
                        htmlFor="UserEmail"
                        className="block w-2/4 h-16 text-sm md:text-base overflow-hidden rounded-md my-5 border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className=" font-medium mb-12 text-gray-700"> Precio mínimo</span>

                        <input
                            onChange={(e) => setMinPrice(e.target.value.trim())}
                            type="text"
                            placeholder="Pesos o dólares"
                            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                    </label>


                    <label
                        htmlFor="UserEmail"
                        className="block w-2/4 h-16 text-sm md:text-base overflow-hidden rounded-md my-5 border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className=" font-medium mb-12 text-gray-700"> Precio máximo</span>

                        <input
                            onChange={(e) => setMaxPrice(e.target.value.trim())}
                            type="text"
                            placeholder="Pesos o dólares"
                            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                    </label>
                </div>
            </div>


            <div className="w-full my-5 grid grid-cols-2 gap-5 md:gap-0 md:flex flex-wrap items-center justify-between">
                <button
                    onClick={() => setType("Casa")}
                    className={`w-40 md:w-auto ${type == "Casa" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={House} />
                    Casa
                </button>
                <button
                    onClick={() => setType("Departamento")}
                    className={`w-40 md:w-auto ${type == "Departamento" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={Building} />
                    Departamento
                </button>
                <button
                    onClick={() => setType("Local Comercial")}
                    className={`w-40 md:w-auto ${type == "Local Comercial" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={Cart} />
                    Local Comercial
                </button>
                <button
                    onClick={() => setType("PH")}
                    className={`w-40 md:w-auto ${type == "PH" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={Key} />
                    PH
                </button>
                <button
                    onClick={() => setType("Terreno")}
                    className={`w-40 md:w-auto ${type == "Terreno" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={Lot} />
                    Terreno
                </button>
                <button
                    onClick={() => setType("Garage")}
                    className={`w-40 md:w-auto ${type == "Garage" ? "border-2 border-black" : "border-2 border-transparent duration-150"
                        } text-sm mb-3 md:mb-0 p-5`}
                >
                    <Image className='w-6 m-auto' src={Garage} />
                    Garage
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

        </div>
    )
}
