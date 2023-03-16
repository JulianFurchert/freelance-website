"use client"
import React, { useRef } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { motion, useScroll, useTransform } from "framer-motion"
// import { Scene } from './Flag'
import { Scene } from './Fragment'

export const AboutSection: React.FC = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  )

  return (
      <motion.div ref={target} className="py-48">
        <Container >
          <div className='flex justify-center relative'>
            <Headline as='h1' variant='intro' className="max-w-7xl">
              I’m a software engineer with a soft spot for design systems and user interfaces.
            </Headline>
          </div>
        </Container>
      </motion.div>
  )
}

export const SkillSection: React.FC = () => {
  return (
    <Container className="pb-48">
      <div className='flex justify-center'>
        <Scene />
      </div>
    </Container>
  )
}
