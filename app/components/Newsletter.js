import React from 'react'

export const Newsletter = () => {
    return (
        <section className="section-newsletter relative w-full h-[400px] mt-32 sm:h-[300px]">
            <div className="section-newsletter__div w-full h-full px-4 sm:px-14 flex flex-col items-center justify-center">
                <h2 className="text-center text-3xl sm:text-4xl font-bold z-40 text-white">Suscribite a nuestro newsletter</h2>
                <p className="text-white my-3 text-sm sm:text-base">
                    Suscríbete para recibir noticias sobre bienes raíces directamente en tu correo electrónico.
                </p>
                <div className="relative w-full sm:w-2/3 flex items-center">
                    <input type="email" placeholder="Ingresa tu correo electrónico" className="w-full h-12 text-xs md:text-base sm:h-16 p-2 sm:p-4 rounded-md focus:border-teal-600 shadow_style" required />
                    <button className="absolute right-2 w-auto py-2 text-xs md:text-base sm:py-3 px-4 sm:px-8 rounded-md bg-teal-600 hover:bg-teal-800 duration-300 text-white shadow_style">Suscribirse</button>
                </div>
            </div>
        </section>
    )
}
