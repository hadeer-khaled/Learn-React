import React from 'react';

/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperComponent = ({children, data , slidesPerView , navigation ,pagination }) => {
const clonedchildren= data.map((element)=>  <SwiperSlide>{React.cloneElement(children , {item : element}) }</SwiperSlide> )
console.log(clonedchildren)
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView ? slidesPerView : 3}
        pagination={ pagination  ? pagination : false}
        navigation={navigation ? navigation :true}
      >
        {clonedchildren}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
