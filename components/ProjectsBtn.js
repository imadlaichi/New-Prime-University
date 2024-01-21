// next image
import Image from "next/image";

// next link 
import Link from "next/link";

// icons 
import { HiAcademicCap} from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 z-10">
     <Link href={"https://discord.gg/xM576kRdWH"} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleS  tar bg-cover bg-center bg-no-repeat group">
      < Image src={"/join-text.png"} width={141} height={148} alt="" 
      className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
        <HiAcademicCap className="absolute text-5xl group-hover:text-6xl transition-all duration-300 "/>
     </Link>
  </div>;
};

export default ProjectsBtn;
