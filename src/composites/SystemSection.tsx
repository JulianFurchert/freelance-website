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
import { ButtonDemo } from '@/demo-components/ButtonDemo'

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
          <div className='my-8'>
            <AccordionDemo />
          </div>
          <div className='my-8'>
            <RadioGroupDemo />
          </div>
          <div className='my-8'>
            <CardDemo />
          </div>
          <div className='my-8'>
            <GalleryDemo />
          </div>
          <div className='my-8'>
            <LoaderDemo />
          </div>
          <div className='my-8'>
            <SliderDemo />
          </div>
          <div className='my-8'>
            <SwitchDemo />
          </div>
          <div className='my-8'>
            <ButtonDemo />
          </div>
        </div>
      </Container>
    </div>
  )
}