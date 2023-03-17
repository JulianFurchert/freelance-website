import React from 'react';
import classNames from '../utils/classNames'

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function Container(props, ref){
  return (
    <div {...props} ref={ref} className={classNames('max-w-[1480px] mx-auto px-6 max-md:px-4', props.className)} />
  )
})
