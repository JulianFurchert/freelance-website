import React from 'react';
import classNames from '../utils/classNames'

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div {...props} ref={ref} className={classNames('max-w-[1600px] mx-auto px-6 max-md:px-4', props.className)} />
  )
})
