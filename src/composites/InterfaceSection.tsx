"use client"
import React, { useRef } from 'react'
import { InterfaceDashboard } from '@/components/InterfaceDashboard'
import { InterfaceBlog } from '@/components/InterfaceBlog'
import { motion, useScroll, useTransform } from "framer-motion"
import { Scene } from './Fragment'

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
    ['32px', '0px']
  )

  return (
    <div>
      <div ref={target} className="relative" >   
          <div className='sticky top-0 flex justify-center items-center w-full h-screen'>
            <motion.div style={{ width, height, borderRadius }} className='absolute bg-gray-900 w-4/5 h-4/5 lex justify-center items-center overflow-hidden'>
              <div className='w-full h-screen'>
                <Scene />
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
    [0.9, 1]
  )
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['-30%', '0%', '0%']
  )

  return (     
    <div ref={target} className='sticky top-2 flex justify-center items-center w-full h-screen'>
      <motion.div style={{ scale, y }} className='bg-white border-gray-900 rounded-xl w-[900px] max-w-full h-4/6 mx-4 shadow-2xl'>
        {children}
      </motion.div>
    </div>
  )
}