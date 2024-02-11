import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  
  RxArrowTopRight
} from "react-icons/rx";

const serviceData = [
  {
    icon: "🛜",
    title: 'YouTube',
    description: 'Conoce los mejores canales de YouTube para sacar tu prime y aprender la mentalidad ganadora.',
  },
  {
    icon: "🕑",
    title: 'Cursos de Famosos',
    description: 'Descubre los cursos estrategias y técnicas de los emprendedores más exitosos para ser como ellos.',
  },
  {
    icon: "📚",
    title: 'Libros',
    description: 'Los mejores libros para desarrolla habilidades y aprender a un solo click y en un mismo sitio.',
  },
  {
    icon: "🔧",
    title: 'Herramients',
    description: 'Perfecciona tus productos, videos y proyectos gracias a las mejores herramientas premium.',
  },
  {
    icon: "🎮",
    title: 'Programas',
    description: 'Obtén los mejores programas premium a coste 0 para tus proyectos, negocios y videos.',
  },
  {
    icon: "💪",
    title: 'Fitness',
    description: 'Explora programas de entrenamiento y nutrición para mejorar la salud y la forma física.',
  },
  {
    icon: "🔋",
    title: 'Hábitos',
    description: 'Descubre los mejores hábitos que puedes emprar para conseguir tu prime y fortalezer tu mente.',
  },
  {
    icon: "📋",
    title: 'Estudios',
    description: 'Mejora tu rendiminto académico gracias a diversos recursos y consejos.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "🎧",
    title: 'Podcasts',
    description: 'Descubre y escucha los mejores podcasts de desarollo personal y emprendiminto.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "📈",
    title: 'Desarollo Personal',
    description: 'Desarollat gracias a una variedad de cursos de desarollo personal.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "🧠",
    title: 'Mentalidad',
    description: 'Desarolla una mentalidad ganadora y aprende como pensar fuera de la caja.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "💸",
    title: 'Métodos de dinero',
    description: 'Consigue y descubre métodos inovadores para ganar dinero online.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
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
            <div className='bg-gradient-to-b from-[#919191] to-[#000000] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300'>
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
