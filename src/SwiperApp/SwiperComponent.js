import React from 'react';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = ({children, data}) => {
const clonedchildren= data.map((element)=>  <SwiperSlide>{React.cloneElement(children , {item : element}) }</SwiperSlide> )
console.log(clonedchildren)
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {clonedchildren}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
