// components
import Circles from "../../components/Circles";

// icons
import {BsArrowRight} from "react-icons/bs"

// framer
import {motion} from "framer-motion"

// variants
import {fadeIn} from "../../variants";
import Avatar from "../../components/Avatar";


const Contact = () => {
  return <div className="h-full">
    <Circles/>
    <motion.div variants={fadeIn("right", 0.2, )} initial="hidden"animate="show" exit="hidden"
    className="hidden xl:flex absolute bottom-0 
    -left-[370px] ">
      <Avatar/>
    </motion.div>
    <div className="container mx-auto py-32 text-center xl:text-left flex xl:text-left flex items-center justify-center h-full">
      {/* text and form */}
    <div className="flex flex-col w-full max-w-[700px] ">
      {/* text */}
      <motion.h2 variants={fadeIn("up",0.2)} initial="hidden" animate="show" exit="hidden"
      className="h2 text-center mb-12">Ponte en contacto con nosotros</motion.h2>
      {/* form */}
      <motion.form 
      variants={fadeIn("up",0.4)} initial="hidden" animate="show" exit="hidden"
      className="flex-1 flex flex-col gap-6 w-full mx-auto">
        {/* input group */}
        <div className="flex gap-x-6 w-full">
          <input type="text" placeholder="Nombre" className="input"/>
          <input type="mail" placeholder="Email" className="input"/>
        </div>
        <input type="text" placeholder="Asunto" className="input"/>
        <textarea placeholder="Mensaje" className="textarea"></textarea>
        <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justiy-center overflow-hidden hover:border-accent group">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Enviar</span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] "/>
        </button>
      </motion.form>
    </div>
    </div>
          
  </div>;
};

export default Contact;
