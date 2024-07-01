"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiNestjs, SiNextdotjs } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"

const about = {
  title: "Sobre",
  description: "Olá, eu sou o Janderson, 34 anos, sou graduado em Engenharia da computação pelo INATEL e trabalho com desenvolvimento de software desde 2021. Atualmente sou desenvolvedor fullstack na minha empresa VBTech , onde trabalho com tecnologias como React, Node.js, Nest.js, Next.js, TailwindCSS, Figma, entre outras. Sou apaixonado por tecnologia e sempre estou estudando e aprendendo novas tecnologias.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Janderson Pizzially Vilas Boas"
    },
    {
      fieldName: "Telefone",
      fieldValue: "(35) 99810-2070"
    },
    {
      fieldName: "Experiência",
      fieldValue: "3 anos"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Email",
      fieldValue: "jandersonvb.dev@gmail.com"
    },
    {
      fieldName: "Línguas",
      fieldValue: "Português, Inglês e Espanhol"
    }
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description: "Trabalho com desenvolvimento de software desde 2021, onde já desenvolvi diversos projetos, tanto pessoais quanto profissionais. Atualmente sou desenvolvedor fullstack na minha empresa VBTech, onde trabalho com tecnologias como React, Node.js, Nest.js, Next.js, TailwindCSS, Figma, entre outras.",
  items: [
    {
      company: "VBTech",
      position: "Desenvolvedor Fullstack",
      duration: "2024 - Atualmente",
    },
    {
      company: "Nexatlas",
      position: "Desenvolvedor Fullstack",
      duration: "2022 - 2024",
    },
    {
      company: "OnEL",
      position: "IT Customer Support",
      duration: "2020 - 2021",
    },
    {
      company: "Hivelabs",
      position: "Estagiário front-end",
      duration: "2016 - 2017",
    },

  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha formação",
  description: "Sou graduado em Engenharia da computação pelo INATEL, onde tive a oportunidade de estudar diversas disciplinas relacionadas a computação, como programação, redes, sistemas embarcados, entre outras.",
  items: [
    {
      institution: "INATEL",
      degree: "Engenharia da computação",
      duration: "2010 - 2016",
    }
  ]
}

const skills = {
  title: "Minhas Skills",
  description: "Aqui estão algumas das tecnologias que eu trabalho atualmente.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    }
  ]

}

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="h-full flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container" mx-auto>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger className="text-lg font-bold" value="experience">Experiência</TabsTrigger>
            <TabsTrigger className="text-lg font-bold" value="education">Educação</TabsTrigger>
            <TabsTrigger className="text-lg font-bold" value="skills">Skills</TabsTrigger>
            <TabsTrigger className="text-lg font-bold" value="about">Sobre mim</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col ap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((info, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4 text-white/60">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p><span className="text-white">{info.fieldName}: </span>{info.fieldValue}</p>
                      </li>
                    )
                  })}
                </ul>
                {/* Botão do WhatsApp */}

              </div>
              <div className="mt-4">
                <a
                  href="https://wa.me/5535998102070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 mt-4 text-white bg-accent rounded hover:bg-accent-hover transition-colors"
                >
                  Fale comigo no WhatsApp
                </a></div>

            </TabsContent>
          </div>
        </Tabs>
      </div >
    </motion.div >
  )
}

export default About;