"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { Heart } from 'react-feather';
import { Scene } from './Fragment'
import { useInView } from "framer-motion"
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
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const _ref = useRef(null)
    const isInView = useInView(_ref, { once: true, amount: 1 })

    useEffect(()=>{
      if(isInView){
        setSelectedId('1')
      }
    },[isInView])

    return (
      <Container ref={_ref} className="h-screem my-16">
        <div className=' relative flex justify-center bg-gray-900 min-h-[80vh] items-center rounded-[40px] overflow-hidden'>
            <div className='w-full h-screen absolute'>
              <Scene colorA={colors.gray[600]} colorB={colors.gray[800]} />
            </div>
            <Headline as='h1' variant='intro' className="z-20 max-w-[900px] text-center text-white">
              ... and animations and interactions to enhance user experiences.
              <span className='inline-flex self-center'>
                <Heart className='h-[1em] w-[1em] color-current relative top-[.125em] ml-2 text-red' />
              </span>
            </Headline>
          {/* <div className="z-10 grid-cols-[2fr_1fr_2fr] grid grid-rows-2 w-full gap-6">
            {items.map(item => (
              <motion.div layoutId={item.id} onClick={() => setSelectedId(selectedId === item.id ? null: item.id)} className="rounded-xl h-[200px] bg-[#1f2937]">
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} onClick={() => setSelectedId(null)} className="z-20 absolute rounded-xl h-[500px] w-[80%] bg-[#1f2937] flex justify-center items-center">
              <motion.div>
                <Headline as='h1' variant='intro' className="z-20 max-w-[900px] text-center text-white">
                ... and animations and interactions to enhance user experiences.
                <span className='inline-flex self-center'>
                  <Heart className='h-[1em] w-[1em] color-current relative top-[.125em] ml-2 text-red' />
                </span>
                </Headline>
              </motion.div>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence> */}
        </div>
      </Container>
    )
  }
  