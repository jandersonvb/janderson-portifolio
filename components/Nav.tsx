"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

const Nav: React.FC = () => {
  const pathname = usePathname()


  return (
    <nav className="flex justify-between items-center py-8 xl:py-12 text-white gap-8" >
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2  border-accent"} capitalize font-medium hover:text-accent transition-all duration-500`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav;