
const Slider = () => {
  return (
    <div className="lg:my-20 my-10">
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full relative">
    <img src="https://i.ibb.co/k1BBfQk/dubai-habbi.jpg" className="w-full h-[540px] rounded-3xl" />
    <h1 className='absolute text-4xl lg:text-5xl text-center pt-12 text-white  font-pop mt-48 ml-4 md:ml-56 lg:ml-80 font-bold '>Enjoy your free time <br />with us.</h1>
  </div> 
  <div id="item2" className="carousel-item w-full relative">
    <img src="https://i.ibb.co/C8bmSWQ/hotel-image.jpg" className="w-full h-[540px] rounded-3xl" />
    <h1 className='absolute text-4xl lg:text-5xl text-center pt-12 text-white  font-pop mt-48 ml-4 lg:ml-80 font-bold '>Enjoy your free time <br />with us.</h1>
  </div> 
  <div id="item3" className="carousel-item w-full relative">
    <img src="https://i.ibb.co/Pr85s7B/bote.jpg" className="w-full h-[540px] rounded-3xl" />
    <h1 className='absolute text-4xl lg:text-5xl text-center pt-12 text-white  font-pop mt-48 ml-4 lg:ml-80 font-bold '>Enjoy your free time <br />with us.</h1>
  </div> 
  <div id="item4" className="carousel-item w-full relative">
    <img src="https://i.ibb.co/8rzkBKX/suimming.jpg" className="w-full h-[540px] rounded-3xl" />
    <h1 className='absolute text-4xl lg:text-5xl text-center pt-12 text-white  font-pop mt-48 ml-4 lg:ml-80 font-bold '>Enjoy your free time <br />with us.</h1>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Slider;








// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



// const Slider = () => {
//     return (
//         <div className='lg:my-16 mt-24'>
          
//             <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
     
//     >
//       <SwiperSlide>
//       <img src="https://i.ibb.co/k1BBfQk/dubai-habbi.jpg" alt="" className='absolute w-full h-[450px] rounded-xl '/>
//      <h1 className='relative text-5xl text-center pt-12 text-white  font-pop mt-32 ml-20 font-bold '>Enjoy your free time <br />with us.</h1>
      
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src="https://i.ibb.co/C8bmSWQ/hotel-image.jpg" alt="" className='w-full h-[450px] rounded-xl' />
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src="https://i.ibb.co/Pr85s7B/bote.jpg" alt="" className='w-full h-[450px] rounded-xl'/>
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src="https://i.ibb.co/8rzkBKX/suimming.jpg" alt="" className='w-full h-[450px] rounded-xl' />
//       </SwiperSlide>
      
//     </Swiper>
//         </div>
//     );
// };

// export default Slider;





