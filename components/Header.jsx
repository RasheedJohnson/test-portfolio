import Link from "next/link";
import Image from "next/image";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-6 mb-5 text-white sticky top-0 backdrop-blur-md bg-primary/50 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-4xl flex justify-center font-semibold">
            <Image
              src="/favicon.png"
              width={30}
              height={30}
              className="rounded-md"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-9">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
