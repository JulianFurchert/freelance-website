"use client"
import React, { useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { Scene } from './Fragment'
import { useInView, useMotionValue, motion, Variants, useAnimate } from "framer-motion"
import colors from "tailwindcss/colors";

const items = [
  {
    id: '1',
    subtitle: 'test',
    title: 'title',
  },
  {
    id: '2',
    subtitle: 'test',
    title: 'title',
  },
  {
    id: '3',
    subtitle: 'test',
    title: 'title',
  },
  {
    id: '4',
    subtitle: 'test',
    title: 'title',
  }
]

export const AnimationSection: React.FC = () => {
    const _ref = useRef(null)
    const [scope, animate] = useAnimate()
    const isInView = useInView(_ref, { once: false, amount: 1 })

   useEffect(() => {
    const animation = async () => {
      console.log({isInView})
      animate(scope.current, { opacity: 1 })
      await animate('#outline', { strokeDashoffset: 0 }, {delay: 0.1, duration: 0.8})
      animate('#fill', { opacity: 1 })
      animate('#fill', { scale: 1 }, { type: 'spring' })
    }
    
    if(isInView){
      animation()
    } else {
      animate(scope.current, { opacity: 0 })
      animate('#outline', { strokeDashoffset: 100 })
      animate('#fill', { scale: 0.1, opacity: 0 })
    }
    }, [isInView])


    return (
      <Container ref={_ref} className="h-screem my-16">
        <div className=' relative flex justify-center bg-gray-900 min-h-[80vh] items-center rounded-[40px] overflow-hidden'>
            <div className='w-full h-screen absolute'>
              <Scene colorA={colors.gray[600]} colorB={colors.gray[800]} />
            </div>
            <Headline as='h1' variant='intro' className="z-20 max-w-[900px] text-center text-white">
              ... and animations and interactions to enhance user experiences.
              <span ref={scope} style={{opacity: 0}} className='inline-flex self-center'>
                <svg className="h-[1em] w-[1em] color-current relative top-[.125em] ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path id="outline" stroke-dasharray={100} stroke-dashoffset={100} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  <motion.path id="fill" fill="currentColor" style={{ scale: 0.1 }} opacity={0} stroke-dasharray={100} stroke-dashoffset={100} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></motion.path>
                </svg>
              </span>
            </Headline>
        </div>
      </Container>
    )
  }
  