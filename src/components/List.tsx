import React from 'react';
import classNames from '../utils/classNames'

export const List = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  function List(props, ref){
    return (
      <ul {...props} ref={ref} className={classNames('list-none', props.className)} />
    )
  }
)

export const ListItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  function ListItem(props, ref){
    return (
      <li {...props} ref={ref} className={classNames('text-base leading-8 text-gray-800', props.className)} />
    )
  }
)
