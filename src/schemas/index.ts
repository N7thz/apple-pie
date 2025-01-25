import { z } from "zod"

export const createTaskSchema = z.object({
	tasks: z.array(
		z.object({
			title: z
				.string({ required_error: "o campo deve ser preenchido." })
				.toLowerCase(),
			content: z.string({
				required_error: "o campo deve ser preenchido."
			}),
			dayTask: z.date({ required_error: "o campo deve ser preenchido." }),
			priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
		})
	)
})

export const updateTaskSchema = z.object({
	title: z
		.string()
		.nonempty({
			message: "o campo deve ser preenchido.",
		})
		.toLowerCase(),
})
