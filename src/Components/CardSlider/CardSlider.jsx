
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from "../../assets/slider/1.png"
import img2 from "../../assets/slider/2.png"
import img3 from "../../assets/slider/3.png"
import img4 from "../../assets/slider/4.png"
import img5 from "../../assets/slider/5.png"
import img6 from "../../assets/slider/6.png"
import img7 from "../../assets/slider/7.png"

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const CardSlider = () => {
    return (
        <div className='py-[100px]'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='rounded-full' src={`${img1}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-md' src={`${img2}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-full' src={`${img3}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-md' src={`${img4}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-full' src={`${img5}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-md' src={`${img6}`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-full' src={`${img7}`} alt="" />
        </SwiperSlide>
      </Swiper> 
        </div>
    );
};

export default CardSlider;