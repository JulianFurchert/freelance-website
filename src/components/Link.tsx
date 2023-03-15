import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps,  } from 'next/link'
import classNames from '../utils/classNames'

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'default' | 'subtle',
}

const linkClasses = {
  base: 'text-base max-md:text-sm font-normal no-underline',
  default: 'text-black hover:text-primary-700 active:text-primary-700',
  subtle: 'text-gray-700 hover:text-primary-700 active:text-primary-700',
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref){
  const { variant = 'default', ...rest } = props;

  const classes = classNames(
    props.className,
    linkClasses.base,
    [linkClasses.default, variant === 'default'],
    [linkClasses.subtle, variant === 'subtle'],
  )

  return(
    <NextLink {...rest} ref={ref} className={classes}/>
  )
});