import React from 'react'
import { GetEntrepreneurships } from './GetEntrepreneurships'

export const ShowEntrepreneurships = () => {




  return (
    <section className='w-full min-h-[400px] my-20 border-t-2 border-b-2 border-gray-600'>
        <h2 className='text-3xl font-bold mt-9 text-center'>Emprendimientos inmobiliarios</h2>
        <p className='text-justify text-xl my-7'>
            Edificios en construcción que pronto estarán disponibles para la venta. Estos proyectos ofrecen departamentos modernos y de alta calidad, diseñados para satisfacer las necesidades de los compradores más exigentes. Con ubicaciones estratégicas y acabados premium, cada emprendimiento promete una inversión segura y un estilo de vida sofisticado.
        </p>
        <GetEntrepreneurships />
    </section>
  )
}
