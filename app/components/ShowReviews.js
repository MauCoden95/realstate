import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faQuoteRight
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const ShowReviews = () => {

    const reviews = [
        {
          name: 'Gerardo',
          reviews: 'Excelente servicio y atención personalizada. Encontraron la casa de mis sueños rápidamente. Altamente recomendados para cualquier búsqueda inmobiliaria. ¡Gracias por todo!',
          image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Gerardo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0dlcmFyZG8uanBnIiwiaWF0IjoxNzE4NjM5NTU2LCJleHAiOjY1NTcwMzk1NTZ9.gAq-nK9BXuWvSY6JOALW89BlMUDP458N69Fn6LyFimQ&t=2024-06-17T15%3A52%3A35.745Z',
          city: 'Buenos Aires'
        },
        {
          name: 'Lorena',
          reviews: 'Gran experiencia, equipo profesional y atento. Me ayudaron a encontrar la propiedad perfecta. Recomendados al 100%. ¡Servicio impecable y resultados increíbles!',
          image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Lorena.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0xvcmVuYS5qcGciLCJpYXQiOjE3MTg2Mzk1NzIsImV4cCI6NTYwNjYzOTU3Mn0.aXQYZ9B3TwvCCsjDrX1G02gyvdB3a7kBrMfiYkoibAU&t=2024-06-17T15%3A52%3A51.503Z',
          city: 'Buenos Aires'
        },
        {
          name: 'Felipe',
          reviews: '¡Fantástico servicio! Compré mi casa sin problemas gracias a su apoyo. Atención al cliente excepcional y propiedades de calidad. Muy satisfecho.',
          image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Felipe.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0ZlbGlwZS5qcGciLCJpYXQiOjE3MTg2Mzk1ODcsImV4cCI6OTQwODIzOTU4N30.5m9q1YSfLK-5tZems-cIo84clX7wDcGyGiuXdX1NL2Y&t=2024-06-17T15%3A53%3A07.189Z',
          city: 'Tucuman'
        },
        {
          name: 'Lucio',
          reviews: 'Muy satisfecho con el servicio recibido. El equipo fue eficiente y siempre disponible. Encontraron exactamente lo que buscaba. ¡Altamente recomendados!',
          image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Lucio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0x1Y2lvLmpwZyIsImlhdCI6MTcxODYzOTYwMywiZXhwIjozNTU5NTg2Mzk2MDN9.sQsMwAsIp2rW3G7sa0Wdj2mPK1FFKMmBP0q9q10KlWE&t=2024-06-17T15%3A53%3A23.173Z',
          city: 'La Plata'
        },
        {
          name: 'Fernando',
          reviews: '¡Impresionante! Encontré mi hogar ideal en poco tiempo. Profesionales, amables y muy dedicados. Una experiencia excelente de principio a fin.',
          image: 'https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/Fernando.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL0Zlcm5hbmRvLmpwZyIsImlhdCI6MTcxODYzOTYyMCwiZXhwIjo5NDU2MTkxNjIwfQ.ZUCFd9hErksY9CdWI2EHsUQctt68tf54K0HASCYbW6E&t=2024-06-17T15%3A53%3A39.540Z',
          city: 'Zarate'
        }
      ];


    return (
        <section className="w-full min-h-[30] px-4 sm:px-14 mt-32 mb-12">
            <h3 className="text-center text-2xl sm:text-3xl mt-16 mb-10 font-bold">¿Qué dice la gente?</h3>
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                {
                    reviews.map((item, key) => (
                        <SwiperSlide className="relative w-full rounded-md p-8 bg-gray-300 mb-12 flex flex-col sm:flex-row" key={key}>
                            <img className="w-full sm:w-40" src={item.image} />
                            <div className="ml-0 sm:ml-16 mt-4 sm:mt-0">
                                <p className="text-lg sm:text-xl text-justify">{item.reviews}</p>
                                <div className="w-full flex justify-between">
                                    <h3 className="text-xl sm:text-2xl font-bold mt-5">{item.name}</h3>
                                    <h3 className="text-xl sm:text-2xl font-bold mt-5">
                                        <FontAwesomeIcon
                                            className="w-7 text-yellow-600"
                                            icon={faStar}
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                        <FontAwesomeIcon
                                            className="w-7 text-yellow-600"
                                            icon={faStar}
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                        <FontAwesomeIcon
                                            className="w-7 text-yellow-600"
                                            icon={faStar}
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                        <FontAwesomeIcon
                                            className="w-7 text-yellow-600"
                                            icon={faStar}
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                        <FontAwesomeIcon
                                            className="w-7 text-yellow-600"
                                            icon={faStar}
                                            style={{ fontSize: "1.5rem" }}
                                        />
                                    </h3>
                                </div>
                                <h3 className="text-lg sm:text-xl mt-1">{item.city}</h3>
                                <FontAwesomeIcon
                                    className="absolute top-0 left-0 w-16 text-teal-600"
                                    icon={faQuoteRight}
                                    style={{ fontSize: "6rem" }}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}
