import React from 'react'

export default function page() {
    return (
        <div>
            <section className='w-full min-h-[300px]'>
                <div className='w-full h-full px-8 sm:px-14 py-10'>
                    <h2 className='text-3xl sm:text-4xl font-bold'>Contacto</h2>
                    <p className='text-base mt-8 sm:text-lg text-justify text-gray-900'>
                        Bienvenido a nuestra página de contacto. Aquí puedes enviarnos tus preguntas, comentarios o solicitudes. Estamos comprometidos a responder de manera rápida y eficiente para asegurar tu satisfacción y mejorar continuamente nuestro servicio.
                    </p>

                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                        <form className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mt-8'>
                            <div className='mb-4'>
                                <label htmlFor='fullName' className='block text-gray-700 text-sm font-bold mb-2'>Nombre Completo:</label>
                                <input type='text' id='fullName' name='fullName' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-700 duration-300' required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
                                <input type='email' id='email' name='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-700 duration-300' required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='phone' className='block text-gray-700 text-sm font-bold mb-2'>Teléfono:</label>
                                <input type='text' id='phone' name='phone' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-700 duration-300' required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='subject' className='block text-gray-700 text-sm font-bold mb-2'>Asunto:</label>
                                <input type='text' id='subject' name='subject' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-700 duration-300' required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>Mensaje:</label>
                                <textarea id='message' name='message' rows='4' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-700 duration-300' required></textarea>
                            </div>
                            <div className='flex items-center justify-between'>
                                <button type='submit' className='w-full md:w-auto bg-teal-500 hover:bg-teal-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                                    Enviar
                                </button>
                            </div>
                        </form>
                        <img className='w-full md:w-1/2 lg:w-3/5 xl:w-2/3 mt-8 md:mt-0' src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/undraw_personal_email_re_4lx7.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL3VuZHJhd19wZXJzb25hbF9lbWFpbF9yZV80bHg3LnN2ZyIsImlhdCI6MTcxODY3MjM5NSwiZXhwIjo1MDEwMjY3MjM5NX0.iM3Y3W3dCd8o4txy2i5jxH83PPCG2fnwGLuZN8KKjao&t=2024-06-18T00%3A59%3A53.946Z' alt='contacto' />
                    </div>
                </div>
            </section>
        </div>
    )
}
