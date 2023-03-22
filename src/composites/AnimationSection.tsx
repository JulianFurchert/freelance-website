"use client"
import React from 'react'
import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'

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
  