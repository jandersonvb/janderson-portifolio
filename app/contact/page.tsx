"use client"

import Photo from "@/components/Photo"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(35) 99810-2070",
    path: "https://wa.me/5535998102070",


  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jandersonvb.dev@gmail.com",
    path: "mailto:jandersonvb.dev@gmail.com",
  },
  // {
  //   icon: <FaMapMarkedAlt />,
  //   title: "Endereço",
  //   description: "Avenida padre lourenço da costa, 3415, Itajubá - MG",
  //   path: "https://www.google.com/maps?q=Av.+Padre+Lourenço+da+Costa-Rodovia+Br-459,+3415,+Itajubá+-+MG",

  // }
]

const Contact: React.FC = () => {


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h2 className="text-4xl text-accent">Vamos trabalhar juntos?</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h2 className="text-2xl font-bold">Informações de contato</h2>
                  <p className="text-white/60 mb-9">Entre em contato comigo através dos meios abaixo.</p>
                  <div className="flex flex-col gap-4">
                    {infos.map((item, index) => (
                      <div key={index} className="gap-4">
                        <Link href={item.path} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" target='_blank'>
                          {item.icon}
                        </Link>
                        <div>
                          <h3 className="font-bold text-accent">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
