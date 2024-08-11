import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-4xl flex justify-center font-semibold">
            <Image
              src="/Untitled.png"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-9">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
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
