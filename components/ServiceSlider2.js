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
    description: '⭐⭐⭐⭐⭐ Increíble todo el contenido de valor que hay en esta comunidad. Súper recomendable!!!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Samuel Diaz',
    description: '⭐⭐⭐⭐⭐ Esta muy bueno el server muy completo la verdad tienen cursos valiosos',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Joaquín Hernández',
    description: '⭐⭐⭐⭐⭐ Son increibles, la mejor comunidad!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Manuel.Torres_',
    description: '⭐⭐⭐⭐⭐ Que gran server, fue lo que esperaba',
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
    description: '⭐⭐⭐⭐⭐ Muy alegres con estés discord, me ha servido mucho para poder formarme, y aprender de todo',
  },
   {
    icon: <RxDiscordLogo/>,
    title: 'cliente',
    description: '⭐⭐⭐⭐⭐ Un servidor muy completo. Si quieres empezar en el mundo de el emprendimiento, lo recomiendo un montón!!!',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Joshua',
    description: '⭐⭐⭐⭐⭐  Lo que me gusta de prime es su contenido de alto valor, lo mejor es que es gratuito',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'iYounse',
    description: '⭐⭐⭐⭐⭐  El mejor servidor si quieres empezar a formarte y ganar dinero',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Manuela Pérez',
    description: '⭐⭐⭐⭐⭐  Gran server el de New Prime University, muy amigable y muchos recursos',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Roger Cases',
    description: '⭐⭐⭐⭐⭐  Muy buen club de emprendiento. Completo y actualizado',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Brais _pk',
    description: '⭐⭐⭐⭐⭐  Genial, gente muy interesante y mucho contenido de valor',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Tex_YT',
    description: '⭐⭐⭐⭐⭐  Es una faking bestialidad, uno de los mejores servers en los que he estado',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Yoel',
    description: '⭐⭐⭐⭐⭐  Muy interesante lo que te pueden llegar a aportar',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Samuel Diaz',
    description: '⭐⭐⭐⭐⭐  Esta muy bueno el server muy completo la verdad tienen cursos valiosos',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'Imad Laichi',
    description: '⭐⭐⭐⭐⭐ Este servidor de emprendimiento es el mejor que he encontrado. Ofrece una variedad de contenido para aprender y crecer, y la comunidad es positiva y llena de personas de alto valor. Muy recomendado.🎓',
  },
  {
    icon: <RxDiscordLogo/>,
    title: 'TecnoAtraccion” Officia',
    description: '⭐⭐⭐⭐ Espléndida bienvenida y muy increíble',
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
