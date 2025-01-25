"use client"

import { cn } from "@/lib/utils"
import { MotionProps, motion } from "framer-motion"
import { ReactNode } from "react"

type AnimationProps = MotionProps & {
	children: ReactNode
	className?: string | undefined
}

export const Animation = ({
	children,
	className,
	...props
}: AnimationProps) => {
	return (
		<motion.div
			className={cn("flex items-center justify-center", className)}
			{...props}
		>
			{children}
		</motion.div>
	)
}
