
// components
import ServiceSlider1 from "../../components/ServiceSlider1";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"

const Work = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles/>
    <div className="container mx-auto">
      <div className="flex flex-col xl:fex-row gap-x-8">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
        <motion.h2 variants={fadeIn("up",0.2)} initial="hidden" animate="show" exit="hidden" 
        className="h2 xl:mt-8">Los Recursos que te ofrecemos<span className="text-accent"></span></motion.h2>
        <motion.p variants={fadeIn("up",0.4)} initial="hidden" animate="show" exit="hidden" 
        className="mb-4 max-w-[400px] mx-auto lg:mx-0">Echa un vistazo más de cerca a los recursos que vas a encontrar en New Prime University</motion.p>
        </div>
        
        {/* slider */}
        <motion.div variants={fadeIn("right",0.6)} initial="hidden" animate="show"  
        className="w-full xl:max-w-[65%] xl:flex xl:flex-col">
          
          <ServiceSlider1/>
        </motion.div>
        
      </div>
    </div>
    <Bulb/>
  </div>;
};

export default Work;
