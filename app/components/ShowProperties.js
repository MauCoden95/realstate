import React from 'react'
import { useEffect, useState } from "react";



import useProperties from '../hooks/useProperties';
import { PropertyCard } from './PropertyCard';
import { PropertyFilters } from './PropertyFilters';
import PropertyList from './PropertyList';

export const ShowProperties = () => {

  const [city, setCity] = useState("");
  const [prop, setProp] = useState("");
  const [type, setType] = useState("");
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const properties = useProperties();
  const [filteredProperties, setFilteredProperties] = useState(properties);

 

  
  useEffect(() => {
    filterProperties();
  }, [city, prop, type, properties, showOnlyAvailable]);



  const filterProperties = () => {
    let propFilter = properties.filter((item) => {
      let matchesOperation = (!prop || item.operation === prop);
      let matchesType = (!type || item.type === type);
      let matchesCity = (!city || item.city.toLowerCase().includes(city.toLowerCase()));

      if (showOnlyAvailable) {
        return matchesCity && matchesOperation && matchesType && item.state === "Disponible";
      } else {
        return matchesCity && matchesOperation && matchesType;
      }
    });

    setFilteredProperties(propFilter);
  };

  return (
    <section className="w-full min-h-[30] px-8 sm:px-14 mt-20 mb-12">
      <PropertyFilters
        title="Propiedades destacadas"
        city={city}
        setCity={setCity}
        prop={prop}
        setProp={setProp}
        type={type}
        setType={setType}
        showOnlyAvailable={showOnlyAvailable}
        setShowOnlyAvailable={setShowOnlyAvailable}
      />

      <br />

     <PropertyList filteredProperties={filteredProperties}/>
    </section>
  )
}
