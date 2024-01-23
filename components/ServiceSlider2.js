import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  
  RxDiscordLogo
} from "react-icons/rx";

const serviceData = [
   {
    icon: <RxDiscordLogo/>,
    title: 'Sara',
    description: '⭐⭐⭐⭐⭐/ Increíble todo el contenido de valor que hay en esta comunidad. Súper recomendable!!!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Samuel Diaz',
    description: '⭐⭐⭐⭐⭐/Esta muy bueno el server muy completo la verdad tienen cursos valiosos ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Joaquín Hernández',
    description: '⭐⭐⭐⭐⭐/ Son increibles, la mejor comunidad!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Manuel.Torres_',
    description: '⭐⭐⭐⭐⭐/Que gran server, fue lo que esperaba',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'NICOLAS serrano PALOMINO',
    description: '⭐⭐⭐⭐⭐/ Uno de los mejores servidores de Discord, dan mucha información gratis y de buena calidad, poca gente así, lo recomiendo',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Luis Lara',
    description: '⭐⭐⭐⭐⭐/ Es el mejor grupo para poder crecer gratuitamente ! Las 5 estrellas se las lleva mas que merecidas por todo el contenido gratuito que tiene !!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Imad Laichi',
    description: '⭐⭐⭐⭐⭐/ Una experiencia increíble. Este servidor de emprendimiento es el mejor que he encontrado. Ofrece una variedad de contenido para aprender y crecer, y la comunidad es positiva y llena de personas de alto valor. Muy recomendado.🎓',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Usuario 8',
    description: '⭐⭐⭐⭐⭐/ El server esta bien pero le faltan cosas.... ( Poner lo que querais )',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Usuario 9',
    description: '⭐⭐⭐⭐⭐/ El server esta bien pero le faltan cosas.... ( Poner lo que querais )',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Usuario 10',
    description: '⭐⭐⭐⭐⭐/ El server esta bien pero le faltan cosas.... ( Poner lo que querais )',
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
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
