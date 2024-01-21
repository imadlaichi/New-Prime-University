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
  </div>;
};

export default Socials;
