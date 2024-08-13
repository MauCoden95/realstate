"use client"

import React, { useEffect } from 'react'
import useProperty from '../hooks/useProperty';
import { DataProperty } from './DataProperty';

export const ShowDataProperty = ({id}) => {

  const propertyId = id;

  const property = useProperty({propertyId});



  useEffect(() => {
    console.log(property);
  }, [property]);

  return (
    <div>
        <DataProperty property={property}/>
    </div>
  )
}
