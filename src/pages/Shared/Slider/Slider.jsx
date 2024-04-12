
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const Slider = () => {
    return (
        <div className=' my-16'>
          
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
      <img src="https://i.ibb.co/k1BBfQk/dubai-habbi.jpg" alt="" className='absolute w-full h-[450px] rounded-xl '/>
     <h1 className='relative text-5xl text-center pt-12 text-white  font-pop mt-32 ml-20 font-bold '>Enjoy your free time <br />with us.</h1>
      
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://i.ibb.co/C8bmSWQ/hotel-image.jpg" alt="" className='w-full h-[450px] rounded-xl' />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://i.ibb.co/Pr85s7B/bote.jpg" alt="" className='w-full h-[450px] rounded-xl'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://i.ibb.co/8rzkBKX/suimming.jpg" alt="" className='w-full h-[450px] rounded-xl' />
      </SwiperSlide>
      
    </Swiper>
        </div>
    );
};

export default Slider;





