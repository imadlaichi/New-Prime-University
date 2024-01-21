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
    icon: "🛍️",
    title: 'Dropshipping',
    description: 'Aprende a gestionar un negocio de comercio electrónico sin la necesidad de tener inventario.',
  },
  {
    icon: "🪙",
    title: 'Trading',
    description: 'Descubre las estrategias y técnicas para operar en los mercados financieros.',
  },
  {
    icon: "💻",
    title: 'Programacion',
    description: 'Desarrolla habilidades de programación y codificación para crear aplicaciones y sitios web.',
  },
  {
    icon: "⌨️",
    title: 'Copywriting',
    description: 'Perfecciona tus habilidades de redacción persuasiva para crear contenido efectivo.',
  },
  {
    icon: "📓",
    title: 'Smma',
    description: 'Aprende a ofrecer servicios de marketing digital a pequeñas y medianas empresas.',
  },
  {
    icon: "💪",
    title: 'Fitness',
    description: 'Explora programas de entrenamiento y nutrición para mejorar la salud y la forma física.',
  },
  {
    icon: "📦",
    title: 'Amazon',
    description: 'Descubre estrategias para vender productos en la plataforma de comercio electrónico Amazon.',
  },
  {
    icon: "🏠",
    title: 'Inmobiliaria',
    description: 'Conoce los fundamentos del mercado inmobiliario y las inversiones en bienes raíces.',
  },
  {
    icon: "📻",
    title: 'Social Ads',
    description: 'Aprende a crear y gestionar campañas publicitarias efectivas en redes sociales.',
  },
  {
    icon: "🦾",
    title: 'Wordpress Seo',
    description: 'Optimiza tu sitio web de WordPress para mejorar su visibilidad en los motores de búsqueda.',
  },
  {
    icon: "👕",
    title: 'Clothing Brand',
    description: 'Crea y gestiona tu propia marca de ropa, desde el diseño hasta la comercialización.',
  },
  {
    icon: "🛒",
    title: 'Shopify Themes',
    description: 'Descubre cómo utilizar y personalizar temas en la plataforma de comercio electrónico Shopify.',
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
            <div className='bg-[rgba(255,255,255,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300'>
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
