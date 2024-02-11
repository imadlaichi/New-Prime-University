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
    description: 'Descubre las estrategias y técnicas para operar en los mercados financieros.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "💻",
    title: 'Programacion',
    description: 'Desarrolla habilidades de programación y codificación para crear aplicaciones y sitios web.',
  },
  {
    icon: "📈",
    title: 'Ventas y Setter',
    description: 'Perfecciona tus habilidades en ventas para cerrar acuerdos exitosos y alcanzar tus metas comerciales con eficacia',
  },
  {
    icon: "⌨️",
    title: 'Copywriting',
    description: 'Perfecciona tus habilidades de redacción persuasiva para crear contenido efectivo.ㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "📓",
    title: 'Smma',
    description: 'Aprende a ofrecer servicios de marketing digital a pequeñas y medianas empresas.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },

  {
    icon: "💪",
    title: 'Fitness',
    description: 'Explora programas de entrenamiento y nutrición para mejorar la salud y la forma física.',
  },
  {
    icon: "📦",
    title: 'Amazon Fba',
    description: 'Descubre estrategias para vender productos en la plataforma de comercio electrónico Amazon.',
  },
    {
    icon: "📱",
    title: 'Tiktok',
    description: 'Aprende a crear contenido cautivador en TikTok y destaca en esta plataforma de alcance global.',
  },
  {
    icon: "🏠",
    title: 'Inmobiliaria',
    description: 'Conoce los fundamentos del mercado inmobiliario y las inversiones en bienes raíces.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "📻",
    title: 'Social Ads',
    description: 'Aprende a crear y gestionar campañas publicitarias efectivas en redes sociales.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "🤖",
    title: 'IA y Prompts',
    description: 'Desarrolla tu expertise en inteligencia artificial para impulsar tus negocios con herramientas secretas.',
  },
    {
    icon: "🔴",
    title: 'Youtube',
    description: 'Descubre las claves para crear contenido exitoso en YouTube y destacar en esta plataforma de videos.',
  },
  {
    icon: "🗣️",
    title: 'Aprendizaje de idiomas',
    description: 'Aprende y domina nuevos idiomas de manera sencilla para enriquecer tu comunicación internacional.ㅤㅤ',
  },
   {
    icon: "🚫",
    title: 'Seduccion',
    description: 'Domina el arte de la seducción para crear conexiones significativas y relaciones exitosas."ㅤㅤ',
  },
  {
    icon: "📂",
    title: 'Creacion de cursos',
    description: 'Perfecciona tu habilidad en la creación de cursos para inspirar el aprendizaje y el desarrollo personal en otros.',
  },
  {
    icon: "🎨",
    title: 'Diseño gráfico',
    description: 'Desarolla tu creatividad y aprende a ofrecer tus servicios de diseño grafico como un profesional.ㅤㅤ',
  },
  {
    icon: "🦾",
    title: 'Wordpress Seo',
    description: 'Optimiza tu sitio web de WordPress para mejorar su visibilidad en los motores de búsqueda.',
  },
  {
    icon: "👕",
    title: 'Clothing Brand',
    description: 'Crea y gestiona tu propia marca de ropa, desde el diseño hasta la comercialización.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
  },
  {
    icon: "🚚",
    title: 'Reparacion de celulares',
    description: 'Conviértete en un experto en reparación de celulares para solucionar problemas tecnológicos con precisión.',
  },
  {
    icon: "🛒",
    title: 'Shopify Themes',
    description: 'Descubre cómo utilizar y personalizar temas en la plataforma de comercio electrónico Shopify.',
  },
  {
    icon: "📸",
    title: 'Fotoperiodismo y Fotografia',
    description: 'Desarrolla habilidades de fotografía y periodismo de alta calidad para destacar en tu carrera.ㅤㅤ',
  },
   {
    icon: "💿",
    title: 'Edicion de videos',
    description: 'Perfecciona tus habilidades en edición de videos para crear contenido visual impactante y cautivador.',
  },
  {
    icon: "🖥️",
    title: 'Ofimatica',
    description: 'Adquiere competencias en el manejo de herramientas de ofimática, como Excel, para optimizar tu desempeño profesional.',
  },
    {
    icon: "💵",
    title: 'Finanzas y economia',
    description: 'Desarrolla tus habilidades en finanzas y economía para tomar decisiones estratégicas con confianza y éxito empresarial.',
  },
  {
    icon: "🪮",
    title: 'Barbería',
    description: 'Conviertete en un profesional de los cortes de pelo y barba con nuestro curso profesional.ㅤㅤ',
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
