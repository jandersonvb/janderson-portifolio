"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

// rounded-full bg-gradient-to-br from-accent to-primary relative
// top-0 left-0 right-0 bottom-0 m-auto bg-gradient-to-br from-accent to-primary rounded-full





const Photo: React.FC = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten flex 
          items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary absolute top-0 left-0 right-0 bottom-0 m-auto mt-6'
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Janderson Vilas Boas"
            className='object-contain mt-4'
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#014EFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={
              {
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360]
              }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>

    </div >
  )


}

export default Photo;