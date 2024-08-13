import React from 'react'



export default function Nosotros() {
    return (
        <div>
            <section className='w-full min-h-[300px]'>
                <div className='w-full h-full px-4 sm:px-14 py-10'>
                    <div className='w-full'>
                        <h2 className='text-3xl sm:text-4xl font-bold'>Nosotros</h2>
                        <div className='w-full mt-12 flex flex-col sm:flex-row gap-8 items-start justify-between'>
                            <p className='text-base sm:text-lg text-justify text-gray-900'>
                                En nuestra empresa de bienes raíces, estamos profundamente comprometidos con la excelencia y la integridad, esforzándonos siempre por ofrecer un servicio de la más alta calidad y a un precio justo. Nuestro objetivo principal es satisfacer completamente las necesidades de nuestros clientes, asegurando una experiencia excepcional en cada interacción. Creemos firmemente en la importancia de construir relaciones duraderas basadas en la confianza y el respeto mutuo.
                            </p>
                            <img className="w-full sm:w-2/4" src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/apartment-2094666_1280.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL2FwYXJ0bWVudC0yMDk0NjY2XzEyODAuanBnIiwiaWF0IjoxNzE4NTUwMDM0LCJleHAiOjUxODMwNTUwMDM0fQ.4UrMXwhXy5jb2uT_kTfEa6cE90woxppXLcFvOHeu5NE&t=2024-06-16T15%3A00%3A34.450Z' alt='nosotros' />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='w-full mt-12 flex flex-col sm:flex-row gap-8 items-start justify-between'>
                            <img className="w-full sm:w-2/4" src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Terreno_bald_o_en_calle_Espa_a.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL1RlcnJlbm9fYmFsZF9vX2VuX2NhbGxlX0VzcGFfYS5qcGciLCJpYXQiOjE3MTgzNjQ0MTMsImV4cCI6NDA1OTgzNjQ0MTN9.MRPIIyZmmAvdy0fygIDH03QhRaYvy1GYehYVn4JNHFM&t=2024-06-14T11%3A26%3A53.864Z' alt='nosotros' />
                            <p className='text-base sm:text-lg text-justify text-gray-900'>
                                En nuestra agencia inmobiliaria, nos dedicamos a proporcionar servicios excepcionales con un enfoque en la satisfacción del cliente y la transparencia. Nuestro equipo de expertos trabaja incansablemente para asegurar que cada cliente encuentre su hogar ideal, ofreciendo asesoramiento personalizado y atención detallada en cada paso del proceso. Valoramos la confianza de nuestros clientes y nos comprometemos a mantener relaciones sólidas y duraderas con cada uno de ellos.
                            </p>
                        </div>
                    </div>
                    <div className='w-full mt-16'>
                        <h3 className='text-xl sm:text-2xl font-bold'>Nuestro Equipo</h3>
                        <div className='flex flex-wrap justify-center items-center gap-8 mt-6 mb-24'>
                            <div className='w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-full'>
                                <img src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Daniela.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0RhbmllbGEuanBnIiwiaWF0IjoxNzE4NjcwOTU1LCJleHAiOjQ4Mzc0NjcwOTU1fQ.p2kpFL6siQ8vTOd05IgyMX5yWfrpS5Jh4_u9cc-7ULs&t=2024-06-18T00%3A35%3A53.848Z' alt='Miembro del equipo' className='w-full h-full rounded-full object-cover' />
                                <p className='text-center font-bold mt-6 text-base sm:text-lg text-gray-900'>
                                    Daniela
                                </p>

                            </div>
                            <div className='w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-full'>
                                <img src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Sergio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL1Nlcmdpby5qcGciLCJpYXQiOjE3MTg2NzEwMzcsImV4cCI6NTAxMDI2NzEwMzd9.Xk9Z1M4s7sB7mVUa8Aslz0F878liE0Ze1VMk0nHYPBQ&t=2024-06-18T00%3A37%3A16.088Z' alt='Miembro del equipo' className='w-full h-full rounded-full object-cover' />
                                <p className='text-center font-bold mt-6 text-base sm:text-lg text-gray-900'>
                                    Sergio
                                </p>

                            </div>
                            <div className='w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-full'>
                                <img src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Marcela.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL01hcmNlbGEuanBnIiwiaWF0IjoxNzE4NjcxMTMzLCJleHAiOjk0NTYyMjMxMzN9.Zy4vwmf2-uNxLddM89PZBCkjKGChWN-JDFtU4ooSmVs&t=2024-06-18T00%3A38%3A51.967Z' alt='Miembro del equipo' className='w-full h-full rounded-full object-cover' />
                                <p className='text-center font-bold mt-6 text-base sm:text-lg text-gray-900'>
                                    Marcela
                                </p>

                            </div>
                        </div>
                        <p className='text-center mt-6 text-base sm:text-lg text-gray-900'>
                            Conoce a los profesionales apasionados que hacen posible nuestro éxito. Cada miembro de nuestro equipo aporta una rica diversidad de conocimientos y experiencia, comprometidos con brindar el mejor servicio.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
