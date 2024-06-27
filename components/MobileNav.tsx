"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "serviços",
    path: "/services"
  },
  {
    name: "sobre",
    path: "/about"
  },
  {
    name: "trabalhos",
    path: "/work"
  },
  {
    name: "contato",
    path: "/contact"
  }
]
const MobileNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-50 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              <span className="text-accent ml-4">
                {`${"</>"}`}
              </span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2  border-accent "} capitalize font-medium hover:text-accent transition-all`}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;