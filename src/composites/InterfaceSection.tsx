"use client"
import React, { useRef } from 'react'
import { InterfaceDashboard } from '@/components/InterfaceDashboard'
import { InterfaceBlog } from '@/components/InterfaceBlog'
import { motion, useScroll, useTransform } from "framer-motion"
// import { Scene } from './Fragment'

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
