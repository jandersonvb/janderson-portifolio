import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">

          <h1 className="text-4xl font-semibold">
            Janderson
            <span className="text-accent ml-4">
              {`${"</>"}`}
            </span>
          </h1>
        </Link>
        {/* Desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://wa.me/5535998102070"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              className="bg-accent hover:bg-accent-hover transition-colors duration-300 ease-in-out"
            >Contrate-me</Button>
          </Link>

        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header >
  )
}

export default Header;