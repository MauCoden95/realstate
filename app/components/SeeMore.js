import React from 'react'

export const SeeMore = () => {
    return (
        <div className="px-8 md:px-14 flex flex-col sm:flex-row items-start justify-between">
            <img className="w-full sm:w-2/4" src="https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/pexels-expect-best-79873-323705-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL3BleGVscy1leHBlY3QtYmVzdC03OTg3My0zMjM3MDUtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3MTg2MzE0OTEsImV4cCI6Nzg2MTQ2MzE0OTF9.iKiA7_W3Fbk4q4gbih-r7CmxSaZ4vzIJiRk8H93J3eQ&t=2024-06-17T13%3A38%3A10.731Z" />
            <div className="w-full sm:w-2/4">
                <h2 className="mt-5 md:mt-0 text-center md:text-left text-2xl sm:text-4xl font-bold">
                    Nosotros tenemos la <span className="text-teal-600">mejor propiedad</span> para vos
                </h2>
                <p className="text-justify mt-5">
                    En Real State, entendemos que encontrar la propiedad perfecta es crucial. Por eso, ofrecemos una amplia gama de opciones que se adaptan a todas las necesidades y presupuestos. Desde apartamentos modernos en el corazón de la ciudad hasta tranquilas casas en suburbios, nuestro equipo está aquí para ayudarte a encontrar el lugar ideal para llamar hogar.
                </p>
                <button className="block w-auto px-7 m-auto bg-teal-600 text-white p-2 rounded-md mt-5 duration-300 hover:bg-teal-900">
                    Ver más
                </button>
            </div>
        </div>
    )
}
