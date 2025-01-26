import { z } from "zod"
import { createTaskSchema, updateTaskSchema } from "@/schemas"

export type CreateTaskForm = z.infer<typeof createTaskSchema>
export type UpdateTaskForm = z.infer<typeof updateTaskSchema>
