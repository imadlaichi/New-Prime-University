// next image 
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion 
import {motion} from "framer-motion";

// variants 
import {fadeIn} from "../variants";
import Particles from "react-tsparticles";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* badge */}
      <a
        className="copyrighted-badge absolute bottom-2 left-2 z-10"
        title="Copyrighted.com Registered &amp; Protected"
        target="_blank"
        href="https://app.copyrighted.com/website/qSCxo2ScWWigcxQt"
      >
        <img
          alt="Copyrighted.com Registered &amp; Protected"
          border="0"
          width="125"
          height="25"
          srcset="https://static.copyrighted.com/badges/125x25/02_2_2x.png 2x"
          src="https://static.copyrighted.com/badges/125x25/02_2.png"
        />
      </a>

      {/* Resto del contenido */}
      <div className="h-full relative">
        {/* text */}
        <div className="w-full h-full from-primary/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* tittle */}
            <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
              New Prime <br /> <span className="text-accent">University</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
              ¡Donde el futuro del emprendimiento cobra vida! 🚀 Descubre, aprende y crece con nuestra plataforma llena de recursos GRATIS. ¡El éxito está a un clic de distancia! 💡📈
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative z-10">
              <ProjectsBtn className="z-10" />
            </div>
            <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex ">
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <ParticlesContainer />
          {/* logo img */}
          <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }} className="w-full h-full max-w-[737px] max-h-[678] absolute -bottom-32 lg:bottom-[-10%] lg:right-[4%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
