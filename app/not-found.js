import React from 'react'
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='my-32'>
        <h3 className='text-center text-6xl mb-12'>404</h3>
        <h1 className='text-center text-4xl'>Error, página no encontrada</h1>
        <Link className="block w-auto my-10 text-center text-3xl text-teal-900 hover:text-teal-700 duration-300" href="/">
            Volver a inicio
        </Link>
    </div>
  )
}

export default NotFound;
