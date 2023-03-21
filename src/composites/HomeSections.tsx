"use client"
import React, { useRef } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { InterfaceDashboard } from '@/components/InterfaceDashboard'
import { InterfaceBlog } from '@/components/InterfaceBlog'
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
// import { Scene } from './Fragment'

export const AboutSection: React.FC = () => {
  return (
    <Container className="pb-40 pt-52">
      <div className='flex justify-center relative'>
        <Headline as='h1' variant='intro' className="max-w-[900px] text-center">
          I’m a software engineer with a soft spot for design systems and user interfaces.
        </Headline>
      </div>
    </Container>
  )
}

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
    ['12px', '0px']
  )

  return (
    <div>
      <div ref={target} className="relative" >   
          <div className='sticky top-0 flex justify-center items-center w-full h-screen'>
            <motion.div style={{width, height, borderRadius}} className='absolute bg-gray-900 w-4/5 h-4/5' />
          </div>

          <div className='sticky top-0 flex justify-center items-center w-full h-screen'>
            <div className='bg-white border-gray-900 rounded-xl w-[900px] max-w-full h-4/6 mx-4 shadow-2xl'>
              <InterfaceDashboard className='w-full h-auto' />
            </div>
          </div>

          <div className='sticky top-2 flex justify-center items-center w-full h-screen'>
            <div className='bg-white border-gray-900 rounded-xl w-[900px] max-w-full h-4/6 mx-4 shadow-2xl'>
              <InterfaceBlog className='w-full h-auto' />
            </div>
          </div>
      </div>
    </div>
  )
}

// export const SkillSection: React.FC = () => {
//   const target = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: target,
//     offset: ["start 500px", "center center"],
//   });

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log("scrollYProgress changed to", latest)
//   })

//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [500, 0]
//   )

//   useMotionValueEvent(y, "change", (latest) => {
//     console.log("top changed to", latest)
//   })

//   return (
//     <Container>
//       <div className="relative" ref={target} >
//         <div className='flex justify-center items-center absolute inset-0 z-40'>
//           <motion.div className='bg-white rounded-xl w-[900px] max-w-full h-4/6 mx-4' style={{ y }} />
//         </div>
//         <motion.div className='flex justify-center'>
//           <Scene />
//         </motion.div>
//       </div>
//     </Container>
//   )
// }

export const SystemSection: React.FC = () => {
  return (
    <div className='bg-gray-50'>
      <Container className="py-56">
        <div className='flex justify-center relative'>
          <Headline as='h1' variant='intro' className="max-w-[900px] text-center">
            I love to create design systems and component libraries.
          </Headline>
        </div>
      </Container>
    </div>
  )
}

export const AnimationSection: React.FC = () => {
  return (
    <div className='bg-gray-900'>
      <Container className="py-56">
        <div className='flex justify-center relative'>
          <Headline as='h1' variant='intro' className="max-w-[900px] text-center text-white">
            ... and animation and interaction that are to the point. 
          </Headline>
        </div>
      </Container>
    </div>
  )
}
