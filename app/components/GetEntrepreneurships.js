import React, { useRef, useState } from 'react';

import useEnrepreneurships from '../hooks/useEntrepreneurships'
import { EntrepreneurCard } from './EntrepreneurCard';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination } from 'swiper/modules';


export const GetEntrepreneurships = () => {

    const entrepreneurships = useEnrepreneurships();

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                {
                    entrepreneurships.map((item, key) => (
                        <SwiperSlide>
                            <EntrepreneurCard item={item} key={key} />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>

          

        </div >
    )
}
