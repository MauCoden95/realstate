import React from 'react'
import { useEffect, useState } from "react";



import useProperties from '../hooks/useProperties';
import { PropertyCard } from './PropertyCard';
import { PropertyFilters } from './PropertyFilters';
import useProperty from '../hooks/useProperty';

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

      <div className="w-full min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
