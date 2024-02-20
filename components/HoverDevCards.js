import React from "react";
import { FiCreditCard,FiServer, FiCode, FiVideo, FiImage, FiYoutube,} from "react-icons/fi";
import {BiLogoDiscordAlt, BiLogoApple} from "react-icons/bi"

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Discord"
          subtitle="Desarrollo y Creación de Servidores de Discord"
          href="#"
          Icon={BiLogoDiscordAlt}
        />
        <Card title="Web" subtitle="Desarrollo y Creación de Paginas Web" href="#" Icon={FiCode} />
        <Card title="Videos" subtitle=" Edición de Videos Cortos para Redes Sociales" href="#" Icon={FiVideo} />
        <Card
          title="Portadas"
          subtitle="Creación de Portadas/Miniaturas exitosas"
          href="#"
          Icon={FiImage}
        />
        {/* Nueva carta */}
        <Card
          title="Banners"
          subtitle="Creación de Banners para tu canal o perfil "
          href="#"
          Icon={FiYoutube}
        />
        <Card
          title="Logos"
          subtitle="Logos profesionales para tu proyecto"
          href="#"
          Icon={BiLogoApple}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-black group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-bold text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="font-medium text-black group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
