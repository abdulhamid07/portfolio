import Link from "next/link";
import Image from "next/image";
import Socials from "./socials";

const Header = () => {
  return (
    <header className="absolute z-8 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo_name.png"}
              width={220}
              height={48}
              alt="logo"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
