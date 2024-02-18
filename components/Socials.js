// links
import Link from "next/link";

// icons 
import {RiYoutubeLine, RiTiktokLine,RiTwitterLine, RiInstagramLine, RiStarLine} from "react-icons/ri";


const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={""} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiYoutubeLine/>
    </Link>

    <Link href={"https://www.tiktok.com/@prime.university"} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiTiktokLine/>
    </Link>

    <Link href={"https://www.instagram.com/__primeuniversity__/"} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiInstagramLine/>
    </Link>

    <Link href={""} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiTwitterLine/>
    </Link>
    <Link href={"https://es.trustpilot.com/review/new-prime-university.netlify.app"} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiStarLine/>
    </Link>
    <a href="agency" className="inline-block relative">
  <button className="group relative bg-gradient-to-b from-[#ffffff] to-[#000000] h-max rounded-lg py-1 px-3 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
    <span className="absolute -inset-0.5 bg-gradient-to-b from-[#ffffff] to-[#1e1e1e] rounded-lg blur opacity-0 group-hover:opacity-100"></span>
    <span className="relative z-10">Servicios</span>
  </button>
</a>
    <a href="https://primebrand.store" className="inline-block relative">
  <button className="group relative bg-gradient-to-b from-[#FFD700] to-[#ffffff] h-max rounded-lg py-1 px-3 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
    <span className="absolute -inset-0.5 bg-gradient-to-b from-[#FFD700] to-[#1e1e1e] rounded-lg blur opacity-0 group-hover:opacity-100"></span>
    <span className="relative z-10">Prime Brand</span>
  </button>
</a>
  </div>;
};

export default Socials;
