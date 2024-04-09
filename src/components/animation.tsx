"use client"

import { FC } from "react"
import { AnimationProps } from "@/@types"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

export const Animation: FC<AnimationProps> = ({
    children, initial, whileInView, animate, exit, transition, className
}) => {

    return (

        <motion.div
            initial={initial}
            whileInView={whileInView}
            exit={exit}
            transition={transition}
            animate={animate}
            className={twMerge(
                "flex items-center justify-center",
                className
            )}
        >
            {children}
        </motion.div>
    )
}
