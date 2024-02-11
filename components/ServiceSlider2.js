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
    description: '⭐⭐⭐⭐⭐ Increíble todo el contenido de valor que hay en esta comunidad. Súper recomendable!!! ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Samuel Diaz',
    description: '⭐⭐⭐⭐⭐ Esta muy bueno el server muy completo la verdad tienen cursos valiososㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Joaquín Hernández',
    description: '⭐⭐⭐⭐⭐ Son increibles, la mejor comunidad!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Manuel.Torres_',
    description: '⭐⭐⭐⭐⭐ Que gran server, fue lo que esperabaㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'NICOLAS serrano PALOMINO',
    description: '⭐⭐⭐⭐⭐ Uno de los mejores servidores de Discord, dan mucha información gratis y de buena calidad, poca gente así, lo recomiendo',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Luis Lara',
    description: '⭐⭐⭐⭐⭐ Es el mejor grupo para poder crecer gratuitamente ! Las 5 estrellas se las lleva mas que merecidas por todo el contenido gratuito que tiene !!',
  },
   {
    icon: <RxDiscordLogo/>,
    title: 'Garci Bx',
    description: '⭐⭐⭐⭐⭐ El mejor sitio para aprender y para conocer gente, es increible como te acojen y te explican cada cosa de la cual tienes duda',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'terremotolava',
    description: '⭐⭐⭐⭐⭐ Muy alegres con estés discord, me ha servido mucho para poder formarme, y aprender de todoㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
   {
    icon: <RxDiscordLogo/>,
    title: 'cliente',
    description: '⭐⭐⭐⭐⭐ Un servidor muy completo. Si quieres empezar en el mundo de el emprendimiento, lo recomiendo un montón!!! ㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Joshua',
    description: '⭐⭐⭐⭐⭐  Lo que me gusta de prime es su contenido de alto valor, lo mejor es que es gratuitoㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'iYounse',
    description: '⭐⭐⭐⭐⭐  El mejor servidor si quieres empezar a formarte y ganar dineroㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Manuela Pérez',
    description: '⭐⭐⭐⭐⭐  Gran server el de New Prime University, muy amigable y muchos recursosㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Roger Cases',
    description: '⭐⭐⭐⭐⭐  Muy buen club de emprendiento. Completo y actualizadoㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Brais _pk',
    description: '⭐⭐⭐⭐⭐  Genial, gente muy interesante y mucho contenido de valorㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Tex_YT',
    description: '⭐⭐⭐⭐⭐  Es una faking bestialidad, uno de los mejores servers en los que he estadoㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Yoel',
    description: '⭐⭐⭐⭐⭐  Muy interesante lo que te pueden llegar a aportarㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Samuel Diaz',
    description: '⭐⭐⭐⭐⭐  Esta muy bueno el server muy completo la verdad tienen cursos valiososㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Imad Laichi',
    description: '⭐⭐⭐⭐⭐ Este servidor de emprendimiento es el mejor que he encontrado.🎓ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'TecnoAtraccion” Officia',
    description: '⭐⭐⭐⭐ Espléndida bienvenida y muy increíbleㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
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
            <div className='bg-gradient-to-b from-[#7289DA] to-[#282B30] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all duration-300'>
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
