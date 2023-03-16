import React from 'react';
import classNames from '../utils/classNames'

export const Divider = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  function Divider(props, ref){
    return (
      <hr {...props} ref={ref} className={classNames('border-t-gray-500', props.className)} />
    )
  }
)
