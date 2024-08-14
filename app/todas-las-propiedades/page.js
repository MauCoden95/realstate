"use client"

import React, { useEffect, useState } from 'react'
import useAllProperties from '../hooks/useAllProperties'
import { PropertyCard } from '../components/PropertyCard';
import { PropertyFilters } from '../components/PropertyFilters';


export default function Propiedades() {

    const properties = useAllProperties();

    const [prop, setProp] = useState("");
    const [type, setType] = useState("");
    const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);


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



    useEffect(() => {
        console.log(properties);
    }, [properties]);

    return (
        <section className='w-full min-h-[500px] px-8 sm:px-14 my-20'>
            <p className='my-12 text-base sm:text-xl text-justify'>
                En esta sección, descubrirás una amplia variedad de opciones para encontrar tu hogar ideal. Desde acogedores apartamentos en el corazón de la ciudad hasta amplias casas en tranquilos suburbios, cada propiedad ha sido seleccionada con atención a los detalles. Explora las descripciones, fotos y características que te ayudarán a tomar la mejor decisión para tu próxima inversión o residencia.
            </p>

            <PropertyFilters
                title="Todas las propiedades"
                prop={prop}
                setProp={setProp}
                type={type}
                setType={setType}
                showOnlyAvailable={showOnlyAvailable}
                setShowOnlyAvailable={setShowOnlyAvailable}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProperties.length == 0 ? (
                    <div className="col-span-1 sm:col-span-3 text-center text-xl mt-12 text-gray-500">
                        No hay propiedades disponibles para este filtro.
                    </div>
                ) : (
                    filteredProperties.map((item, key) => (
                        <PropertyCard item={item} key={key} />
                    ))
                )}
            </div>

        </section>
    )
}
