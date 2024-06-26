import {
    ComponentProps,
    Dispatch,
    ReactNode,
    SetStateAction
} from "react"

import {
    VariantLabels,
    TargetAndTransition,
    Transition,
    AnimationControls,
    Target
} from "framer-motion"

import { z } from "zod"
import { createItemsSchema, updateItemsSchema } from "@/schemas"
import { LucideIcon } from "lucide-react"
import { Item } from "@prisma/client"

export interface AnimationProps extends ComponentProps<"div"> {
    children: ReactNode
    initial?: boolean | Target | VariantLabels
    whileInView?: VariantLabels | TargetAndTransition
    exit?: TargetAndTransition | VariantLabels
    transition?: Transition
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean
}

export interface NotificationContextProps {
    isCreated: boolean
    setIsCreated: Dispatch<SetStateAction<boolean>>
    isError: boolean
    setsError: Dispatch<SetStateAction<boolean>>
}

export interface NotificationProps {
    title: string
    message: string
    Icon: LucideIcon
    variant: "default" | "destructive" | null | undefined
}

export interface Error {
    isError: boolean
    message: string
}

export interface ItemComponentProps extends ComponentProps<"div"> {
    item: Item
}

export interface SuspendedMenuProps {
    children: ReactNode
    item: Item
}

export type CreateItemsForm = z.infer<typeof createItemsSchema>
export type UpdateItemsForm = z.infer<typeof updateItemsSchema>