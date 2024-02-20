import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import HoverDevCards from "../../components/HoverDevCards";
import Avatar from "../../components/Avatar";
const Agency = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-hidden">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* Texto */}
          <div className="text-center lg:w-[50%] lg:text-left mb-4 lg:mb-0 lg:order-1">
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden">
              <h2 className="h2 lg:mt-8">Servicios Prime<span className="text-accent"></span></h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Haz que tu proyecto alcance su prime con nuestros servicios de calidad.</p>
         
         
            </motion.div>
          </div>

          

        </div>
        <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden">
          <HoverDevCards/>
        </motion.div>
        
      </div>
      
      
    </div>
  );
};

export default Agency;
