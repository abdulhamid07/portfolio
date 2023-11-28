import Link from "next/link";
import {
  RiInstagramLine,
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-30">
      <Link
        href={"https://www.instagram.com/abdulham.id"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"mailto:abdulhamid.dev@gmail.com"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/abdulhamid07"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/abdulhamid07"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
