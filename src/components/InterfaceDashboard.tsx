"use client"
import React, { useRef } from 'react'
import { mergeRefs } from '@/utils/mergeRefs'
import { motion, useInView, SVGMotionProps } from "framer-motion"

export const InterfaceDashboard = React.forwardRef<SVGSVGElement, SVGMotionProps<SVGSVGElement>>(
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
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.svg variants={container} initial="hidden" animate={isInView ? 'show' : 'hidden'} ref={mergeRefs([_ref, ref])} width="1512" height="982" viewBox="0 0 1512 982" fill="none" {...props}>
            <motion.rect width="1512" height="982" fill="white"/>
            {/* Menu Left */}
            <motion.rect x="100" y="88" width="130" height="24" rx="12" fill="#E2E7F0"/>
            <motion.rect x="270" y="88" width="110" height="24" rx="12" fill="#E2E7F0"/>
            <motion.rect x="420" y="88" width="110" height="24" rx="12" fill="#E2E7F0"/>
            {/* Menu Right */}
            <motion.rect x="1068" y="77" width="160" height="48" rx="24" fill="#E2E7F0"/>
            <motion.rect x="1252" y="77" width="160" height="48" rx="24" fill="#4A73EE"/>
            {/* Text */}
            <motion.g>
                <motion.rect x="430" y="201" width="652" height="32" rx="16" fill="#C3D4E1"/>
                <motion.rect x="369" y="253" width="774" height="32" rx="16" fill="#C3D4E1"/>
                <motion.rect x="440" y="315" width="632" height="24" rx="12" fill="#F0F3F7"/>
                <motion.rect x="369" y="359" width="774" height="24" rx="12" fill="#F0F3F7"/>
                <motion.rect x="473" y="403" width="566" height="24" rx="12" fill="#F0F3F7"/>
            </motion.g>
            {/* Button */}
            <motion.rect x="646" y="464" width="220" height="64" rx="32" fill="#4A73EE"/>
            {/* Diagram Box */}
            <motion.g>
                <motion.rect x="210" y="603" width="12" height="364" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="606" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="650" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="694" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="738" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="782" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="826" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="870" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="914" width="32" height="12" rx="6" fill="#F0F3F7"/>
                <motion.rect x="246" y="958" width="32" height="12" rx="6" fill="#F0F3F7"/>
            </motion.g>
            {/* Diagram */}
            <motion.rect x="310" y="878" width="24" height="92" rx="12" fill="#4B72ED"/>
            <motion.rect x="366" y="823" width="24" height="147" rx="12" fill="#DAE3FB"/>
            <motion.rect x="422" y="678" width="24" height="292" rx="12" fill="#4B72ED"/>
            <motion.rect x="478" y="753" width="24" height="217" rx="12" fill="#DAE3FB"/>
            <motion.rect x="534" y="753" width="24" height="217" rx="12" fill="#4B72ED"/>
            <Bar x="590" y="678" width="24" height="292" rx="12" fill="#DAE3FB"/>
            <Bar x="646" y="878" width="24" height="92" rx="12" fill="#4B72ED"/>
            <Bar x="702" y="826" width="24" height="144" rx="12" fill="#DAE3FB"/>
            <Bar x="758" y="606" width="24" height="364" rx="12" fill="#4B72ED"/>
            <Bar x="814" y="753" width="24" height="217" rx="12" fill="#DAE3FB"/>
            <Bar x="870" y="823" width="24" height="147"  rx="12" fill="#4B72ED"/>
            <Bar x="926" y="678" width="24" height="292" rx="12" fill="#DAE3FB"/>
            <Bar x="982" y="873" width="24" height="97" rx="12" fill="#4B72ED"/>
            <Bar x="1038" y="826" width="24" height="144" rx="12" fill="#DAE3FB"/>
            <Bar x="1094" y="826" width="24" height="144" rx="12" fill="#4B72ED"/>
            <Bar x="1150" y="678" width="24" height="292"  rx="12" fill="#DAE3FB"/>
            <Bar x="1206" y="753" width="24" height="217" rx="12" fill="#4B72ED"/>
        </motion.svg>
    )
  }
)



const Bar: React.FC<SVGMotionProps<SVGRectElement>> = ({ height, ...props }) => {
    
    const bar = {
        hidden: (height: string) => ({ 
            height: 0,
            y: parseInt(height)
        }),
        show: (height: string) => ({ 
            height: parseInt(height),
            y: 0,
            transition: { type: "spring", stiffness: 60 }
        }),
    }

    return (
        <motion.rect variants={bar} height={height} custom={height} {...props}/>
    )
}