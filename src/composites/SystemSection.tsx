"use client"
import React, { useRef } from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { AccordionDemo } from '@/demo-components/AccordionDemo'
// import { CardDemo } from '@/demo-components/CardDemo'
import { GalleryDemo } from '@/demo-components/GalleryDemo'
import { LoaderDemo } from '@/demo-components/LoaderDemo'
import { RadioGroupDemo } from '@/demo-components/RadioGroupDemo'
import { SliderDemo } from '@/demo-components/SliderDemo'
import { SwitchDemo } from '@/demo-components/SwitchDemo'
import { ButtonDemo } from '@/demo-components/ButtonDemo'
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion"
import classNames from '../utils/classNames'

const topLeft = '1 / 1 / 3 / 3'
const topRight = '1 / 4 / 3 / 6'
const bottomRight = '5 / 4 / 7 / 6'
const bottomLeft = '5 / 1 / 7 / 3'
const center = '3 / 2 / 5 / 5'
const centerLeft = '3 / 1 / 5 / 2'
const centerTop = '1 / 3 / 3 / 4'
const centerRight = '3 / 5 / 5 / 6'
const centerBottom = '5 / 3 / 7 / 4'

export const SystemSection: React.FC = () => {
  const target = useRef(null);

  const scrollA= useScroll({
    target: target,
    offset: ["start end", 0.7],
    smooth: 10
  });

  const scrollYProgress = useSpring(scrollA.scrollYProgress, {
    stiffness: 200,
    damping: 120,
    restDelta: 0.001
  });

  return (
    <div ref={target}  className='bg-white py-[100px]'>
      <Container className="bg-white">
        <div className="rounded-[32px] relative grid grid-rows-6 grid-cols-5 gap-3">
          <Item gridArea={center} scrollYProgress={scrollYProgress} offsetX={0} offsetY={0}>
            <Headline as='h1' variant='intro' className="max-w-[900px] text-center">
              I love building <br /> component libraries ...
            </Headline>
          </Item>
          <Item gridArea={topLeft} className='rounded-tl-[40px]' scrollYProgress={scrollYProgress} offsetX={-100} offsetY={-80}>
            <GalleryDemo />
          </Item>
          <Item gridArea={topRight} className='rounded-tr-[40px]' scrollYProgress={scrollYProgress} offsetX={120} offsetY={-40}>
            <RadioGroupDemo />
          </Item>
          <Item gridArea={bottomLeft} className='rounded-bl-[40px]' scrollYProgress={scrollYProgress} offsetX={-60} offsetY={60}>
            <AccordionDemo />
          </Item>
          <Item gridArea={bottomRight} className='rounded-br-[40px]' scrollYProgress={scrollYProgress} offsetX={50} offsetY={20}>
            {/* <CardDemo /> */}
          </Item>
          <Item gridArea={centerTop} scrollYProgress={scrollYProgress} offsetX={0} offsetY={-100}>
            <LoaderDemo />
          </Item>
          <Item gridArea={centerBottom} scrollYProgress={scrollYProgress} offsetX={0} offsetY={100}>
            <SliderDemo />
          </Item>
          <Item gridArea={centerLeft} scrollYProgress={scrollYProgress} offsetX={-100} offsetY={-20}>
            <SwitchDemo />
          </Item>
          <Item gridArea={centerRight} scrollYProgress={scrollYProgress} offsetX={200} offsetY={20}>
            <ButtonDemo />
          </Item>
        </div>
      </Container>
    </div>
  )
}

type ItemProps = React.HTMLAttributes<HTMLDivElement> & {
  scrollYProgress: MotionValue<number>,
  offsetX: number,
  offsetY: number,
  gridArea: string
}

const Item: React.FC<ItemProps> = ({ scrollYProgress, offsetX, offsetY, gridArea, children, className }) => {
  const target = useRef(null);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [offsetX, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offsetY, 0]
  )
  return (
    <motion.div ref={target} style={{ gridArea }} className={classNames('bg-gray-100 flex justify-center items-center p-4 max-h-[320px]', className)}>
      <motion.div style={{ x, y }}  >
        {children}
      </motion.div>
    </motion.div>
  )
}
