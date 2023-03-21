"use client"
import React, { useRef } from 'react'
import { mergeRefs } from '@/utils/mergeRefs'
import { motion, useInView, SVGMotionProps } from "framer-motion"

export const InterfaceBlog = React.forwardRef<SVGSVGElement, SVGMotionProps<SVGSVGElement>>(
  function Divider(props, ref){
    const _ref = useRef(null)
    const isInView = useInView(_ref, { once: true, amount: 0.5 })

    const container = {
    hidden: {
         opacity: 0 
    },
    show: {
        opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const circle = {
        hidden: {
             r: 100 
        },
        show: {
            r: 743.5
        }
    }

    const card = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        show: {
            opacity: 1,
            y: 0,
        }
    }


    return (
        <motion.svg variants={container} initial="hidden" animate={isInView ? 'show' : 'hidden'} ref={mergeRefs([_ref, ref])}  width="1512" height="982" viewBox="0 0 1512 982" fill="none" {...props}>
            <g id="Interface-Blog" clip-path="url(#clip0_10_24)">
                <rect width="1512" height="982" fill="white"/>
                <motion.circle variants={circle} id="background-ellipse" cx="1267.5" cy="936.5" r="743.5" fill="#F0F3F7"/>
                <rect id="menu" x="100" y="88" width="122" height="24" rx="12" fill="#E2E7F0"/>
                
                <g id="links">
                    <rect id="links-item-3" x="549" y="88" width="106" height="24" rx="12" fill="#E2E7F0"/>
                    <rect id="links-item-2" x="703" y="88" width="106" height="24" rx="12" fill="#E2E7F0"/>
                    <rect id="links-item-1" x="857" y="88" width="106" height="24" rx="12" fill="#E2E7F0"/>
                </g>

                <circle id="avatar" cx="1383" cy="90" r="32" fill="#E2E7F0"/>
                <rect id="headline-1" x="100" y="255" width="495" height="32" rx="16" fill="#C3D4E1"/>
                <rect id="headline-2" x="100" y="307" width="589" height="32" rx="16" fill="#C3D4E1"/>
                <rect id="text-1" x="100" y="369" width="461" height="24" rx="12" fill="#F0F3F7"/>
                <rect id="text-2" x="100" y="411" width="534" height="24" rx="12" fill="#F0F3F7"/>
                <rect id="text-3" x="100" y="453" width="424" height="24" rx="12" fill="#F0F3F7"/>
                <rect id="button" x="100" y="520" width="220" height="64" rx="32" fill="#4A73EE"/>
                
                <motion.g variants={card} id="card-3">
                    <rect id="card-2-background" x="1116" y="584" width="300" height="264" rx="24" fill="white" fill-opacity="0.8"/>
                    <rect id="card-2-text-1" x="1154" y="785" width="224" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-2-text-2" x="1134" y="813" width="264" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-2-image" x="1136" y="604" width="259" height="165" rx="24" fill="#E2E7F0"/>
                </motion.g>

                <motion.g variants={card} id="card-2">
                    <rect id="card-2-background_2" x="792" y="584" width="300" height="264" rx="24" fill="white" fill-opacity="0.8"/>
                    <rect id="card-2-text-1_2" x="830" y="785" width="224" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-2-text-2_2" x="810" y="813" width="264" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-2-image_2" x="812" y="604" width="259" height="165" rx="24" fill="#E2E7F0"/>
                </motion.g>

                <motion.g variants={card} id="card-1">
                    <rect id="card-1-background" x="468" y="584" width="300" height="264" rx="24" fill="white" fill-opacity="0.8"/>
                    <rect id="card-1-text-1" x="506" y="785" width="224" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-1-text-2" x="486" y="813" width="264" height="12" rx="6" fill="#F0F3F7"/>
                    <rect id="card-1-image" x="488" y="604" width="259" height="165" rx="24" fill="#E2E7F0"/>
                </motion.g>
            </g>
            <defs>
                <clipPath id="clip0_10_24">
                <rect width="1512" height="982" fill="white"/>
                </clipPath>
            </defs>
        </motion.svg>
    )
  }
)
