import React from 'react';
import classNames from '../utils/classNames'

type HeadlineProps = {
  variant?: 'large' | 'medium' | 'small' | 'overline' ,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

const headlineClasses = {
  large: 'text-5xl text-black font-semibold',
  medium: 'text-2xl text-black font-semibold',
  small: 'text-base leading-8 text-black font-semibold',
  overline: 'text-xl text-gray-800',
};

export const Headline = React.forwardRef<HTMLParagraphElement, HeadlineProps & React.HTMLAttributes<HTMLParagraphElement>>(
  function Headline({ variant = 'large', as = 'h1', className, children, ...props }, ref){

    const classes = classNames(
      className,
      [headlineClasses.large, variant === 'large'],
      [headlineClasses.medium, variant === 'medium'],
      [headlineClasses.small, variant === 'small'],
      [headlineClasses.overline, variant === 'overline'],
    )

    return React.createElement(as, { ...props, className: classes, ref }, children)
  }
)
