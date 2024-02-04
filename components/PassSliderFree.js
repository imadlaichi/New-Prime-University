import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  
  RxCheckbox
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 1',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 2',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 3',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 4',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 5',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 6',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 7',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 8',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 9',
    description: 'Descripción recompensa',
  },
  {
    icon: <RxCheckbox/>,
    title: 'Recompensa 10',
    description: 'Descripción recompensa',
  },
  
  

];

const ServiceSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='bg-gradient-to-b from-[#4a4a4a] to-[#1e1e1e] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300'>
              <div className="text-5xl text-accent mb-4 color: #3498db;">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
