"use client"
import React from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { AccordionDemo } from '@/demo-components/AccordionDemo'
import { CardDemo } from '@/demo-components/CardDemo'
import { GalleryDemo } from '@/demo-components/GalleryDemo'
import { LoaderDemo } from '@/demo-components/LoaderDemo'
import { RadioGroupDemo } from '@/demo-components/RadioGroupDemo'
import { SliderDemo } from '@/demo-components/SliderDemo'
import { SwitchDemo } from '@/demo-components/SwitchDemo'
import { TooltipDemo } from '@/demo-components/TooltipDemo'

export const SystemSection: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      <Container className="py-56">
        <div className='flex justify-center relative'>
          <Headline as='h1' variant='intro' className="max-w-[900px] text-center">
            I love to create design systems and component libraries.
          </Headline>
        </div>
        <div>
          <AccordionDemo />
          <CardDemo />
          <GalleryDemo />
          <LoaderDemo />
          <RadioGroupDemo />
          <SliderDemo />
          <SwitchDemo />
          <TooltipDemo />
        </div>
      </Container>
    </div>
  )
}