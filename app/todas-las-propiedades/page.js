"use client"

import React, { useEffect, useState } from 'react'
import useAllProperties from '../hooks/useAllProperties'
import PropertyList from '../components/PropertyList';
import { PropertyFilters } from '../components/PropertyFilters';
import { ShowEntrepreneurships } from '../components/ShowEntrepreneurships';



export default function Propiedades() {

    const properties = useAllProperties();


    const [minPrice, setMinPrice] = useState('1');
    const [maxPrice, setMaxPrice] = useState('10000000');
    const [city, setCity] = useState("");
    const [prop, setProp] = useState("");
    const [type, setType] = useState("");
    const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);


    const [filteredProperties, setFilteredProperties] = useState(properties);




    useEffect(() => {
        filterProperties();
    }, [minPrice, maxPrice, city, prop, type, properties, showOnlyAvailable]);



    const filterProperties = () => {
        let propFilter = properties.filter((item) => {
            let priceSplit = item.price.split(' ');
            let matchesMinPrice = (!minPrice || parseInt(priceSplit[0]) > parseInt(minPrice));
            let matchesMaxPrice = (!maxPrice || parseInt(priceSplit[0]) < parseInt(maxPrice));
            let matchesOperation = (!prop || item.operation === prop);
            let matchesType = (!type || item.type === type);
            let matchesCity = (!city || item.city.toLowerCase().includes(city.toLowerCase()));
            

            if (showOnlyAvailable) {
                return matchesMinPrice && matchesMaxPrice && matchesCity && matchesOperation && matchesType && item.state === "Disponible";
            } else {
                return matchesMinPrice && matchesMaxPrice && matchesCity && matchesOperation && matchesType;
            }
        });

        setFilteredProperties(propFilter);
    };


    useEffect(() => {
        //console.log(properties);
    }, [properties]);

    return (
        <section className='w-full min-h-[500px] px-8 sm:px-14 my-20'>
            <p className='my-12 text-base sm:text-xl text-justify'>
                En esta sección, descubrirás una amplia variedad de opciones para encontrar tu hogar ideal. Desde acogedores apartamentos en el corazón de la ciudad hasta amplias casas en tranquilos suburbios, cada propiedad ha sido seleccionada con atención a los detalles. Explora las descripciones, fotos y características que te ayudarán a tomar la mejor decisión para tu próxima inversión o residencia.
            </p>

            <PropertyFilters
                title="Todas las propiedades"
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                city={city}
                setCity={setCity}
                prop={prop}
                setProp={setProp}
                type={type}
                setType={setType}
                showOnlyAvailable={showOnlyAvailable}
                setShowOnlyAvailable={setShowOnlyAvailable}
            />

            <PropertyList filteredProperties={filteredProperties} />


            <ShowEntrepreneurships />
        </section>
    )
}
