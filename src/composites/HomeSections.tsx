"use client"
import React, { useRef } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { motion, useScroll, useTransform } from "framer-motion"

export const AboutSection: React.FC = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.6]
  )

  return (
    <motion.div ref={target} className="py-40">
      <Container >
        <motion.div className='flex justify-center' style={{ scale }}>
          <Headline as='h1' variant='intro' className="max-w-7xl">
            I’m a software engineer with a soft spot for design systems and user interfaces.
          </Headline>
        </motion.div>
      </Container>
    </motion.div>
  )
}

export const SkillSection: React.FC = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0.8]
  )

  return (
    <motion.div ref={target} className="py-40">
      <Container >
        <motion.div className='flex justify-center' >
          <motion.div style={{ scale }}>
            <Headline as='h1' variant='intro' className="max-w-7xl">
              I’m a software engineer with a soft spot for design systems and user interfaces.
            </Headline>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  )
}
