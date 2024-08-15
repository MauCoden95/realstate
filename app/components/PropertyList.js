import React from 'react'

import { PropertyCard } from './PropertyCard'

export default function PropertyList({filteredProperties}) {
    return (
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
    )
}
