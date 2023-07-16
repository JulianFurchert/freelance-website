"use client"
import React, { useRef } from 'react'
import { InterfaceDashboard } from '@/components/InterfaceDashboard'
import { InterfaceBlog } from '@/components/InterfaceBlog'
import { motion, useScroll, useTransform } from "framer-motion"
import { Scene } from './Fragment'
import colors from "tailwindcss/colors";

export const InterfaceSection: React.FC = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start center", "0.33 end"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ['80%', '100%']
  )

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ['80%', '100%']
  )

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ['32px', '32px']
  )

  return (
    <div>
      <div ref={target} className="relative" >   
          <div className='sticky top-0 flex justify-center items-center w-full h-screen max-w-[1480px] py-16 mx-auto px-6 max-md:px-4'>
            <motion.div style={{ width, height, borderRadius }} className='bg-indigo-200 flex justify-center items-center overflow-hidden'>
            <div className='w-full h-screen'>
              <Scene colorA={colors.violet[100]} colorB={colors.indigo[100]}/>
            </div>
            </motion.div>
          </div>

          <Item>
            <InterfaceDashboard className='w-full h-auto' />
          </Item>

          <Item>
            <InterfaceBlog className='w-full h-auto' />
          </Item>
      </div>
    </div>
  )
}

type ItemProp = {
  children?: React.ReactNode
}


const Item: React.FC<ItemProp >= ({ children }) => {
  const target = useRef(null);

  const {scrollYProgress} = useScroll({
    target: target,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85, 1]
  )
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['-30%', '0%', '0%']
  )

  return (     
    <div ref={target} className='sticky top-2 flex justify-center items-center w-full h-screen'>
      <motion.div style={{ scale, y }} className='bg-white border-gray-900 rounded-xl w-[900px] max-w-full overflow-hidden mx-4 shadow-2xl'>
        {children}
      </motion.div>
    </div>
  )
}