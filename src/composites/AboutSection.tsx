"use client"
import React from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'

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
