import { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react"

import { z } from "zod"
import { createTaskSchema, updateTaskSchema } from "@/schemas"
import { LucideIcon } from "lucide-react"
import { Item } from "@prisma/client"

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

export type CreateTaskForm = z.infer<typeof createTaskSchema>
export type UpdateTaskForm = z.infer<typeof updateTaskSchema>
