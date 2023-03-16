import React from 'react';
import classNames from '../utils/classNames'

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'large' | 'medium',
  as?: 'span' | 'p'
}

const textClasses = {
  base: 'text-gray-800',
  medium: 'text-base',
  large: 'text-xl',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text({variant = 'medium', className, as = 'p', children, ...props}, ref){
    
    const classes = classNames(
      className,
      textClasses.base,
      [textClasses.medium, variant === 'medium', ],
      [textClasses.large, variant === 'large', ],
    )

    return React.createElement(as, { ...props, className: classes, ref }, children)
  }
)
