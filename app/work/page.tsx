"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'front-end',
    title: 'Project 1',
    description: 'This is a project description',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "React" }],
    image: "/assets/work/thumb1.png",
    live: "https://live-project1.com",
    github: "https://github.com/user/project1"
  },
  {
    num: '02',
    category: 'back-end',
    title: 'Project 2',
    description: 'This is a project description',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "React" }],
    image: "/assets/work/thumb2.png",
    live: "https://live-project2.com",
    github: "https://github.com/user/project2"
  },
  {
    num: '03',
    category: 'full-stack',
    title: 'Project 3',
    description: 'This is a project description',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "React" }],
    image: "/assets/work/thumb3.png",
    live: "https://live-project3.com",
    github: "https://github.com/user/project3"
  },
];

const Work: React.FC = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="h-full flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h2 className="text-4xl text-accent">Meus trabalhos</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h2 className="text-2xl font-bold">Projetos</h2>
                  <p className="text-white/60">Confira abaixo alguns dos meus trabalhos.</p>
                  <Swiper
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setProject(projects[swiper.activeIndex])}
                  >
                    {projects.map((project, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-4">
                          <div className="relative w-full h-[300px]">
                            <Image
                              src={project.image}
                              fill
                              className="rounded-xl object-cover"
                              alt={project.title}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-3xl font-bold text-accent">{project.num}</div>
                            <div className="flex gap-4">
                              <Link href={project.live} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" target='_blank'>
                                <BsArrowUpRight />
                              </Link>
                              <Link href={project.github} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" target='_blank'>
                                <BsGithub />
                              </Link>
                            </div>
                          </div>
                          <h3 className="text-2 xl font-bold text-white">{project.title}</h3>
                          <p className="text-white/60">{project.description}</p>
                          <div className="flex gap-4">


                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <div className="relative w-full h-[400px]">
                <Image src={project.image} layout="fill" objectFit="cover" className="rounded-xl" alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
export default Work;
