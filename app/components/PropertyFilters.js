import React from 'react'

export const PropertyFilters = ({ title, city, setCity, prop, setProp, type, setType, showOnlyAvailable, setShowOnlyAvailable }) => {
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


            <label
                htmlFor="UserEmail"
                className="block overflow-hidden rounded-md my-12 border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <span className=" font-medium mb-12 text-gray-700"> Ubicación</span>

                <input
                    onChange={(e) => setCity(e.target.value.trim())}
                    type="text"
                    placeholder="Ciudad o barrio..."
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
            </label>


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
                <button
                    onClick={() => setType("Garage")}
                    className={` ${type == "Garage" ? "text-teal-700 underline" : ""
                        } text-lg sm:text-xl`}
                >
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
