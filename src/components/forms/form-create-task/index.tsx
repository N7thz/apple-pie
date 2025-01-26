"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateTaskForm } from "@/@types"
import { createTaskSchema } from "@/schemas"
import { TaskItem } from "./task-item"
import { Priority } from "@prisma/client"
import { dateInString } from "@/utils/date-in-string"

export const FormCreateTask = () => {

	const [dateTask, setDateTask] = useState<Date>()
	const [priority, setPriority] = useState<Priority>("LOW")

	const methods = useForm<CreateTaskForm>({
		resolver: zodResolver(createTaskSchema),
		defaultValues: {
			dateTask,
			priority,
		}
	})

	const { handleSubmit, formState: { errors } } = methods

	console.log(dateTask)
	console.log(errors)

	async function createTask({ title, content }: CreateTaskForm) {

		const date = dateInString(dateTask as Date)

		console.log({ title, content, date, priority })
	}

	return (
		<DialogContent className="size-4/5 p-0 overflow-hidden">
			<FormProvider {...methods}>
				<form
					className="size-full flex flex-col px-6 py-3 justify-between"
					onSubmit={handleSubmit(createTask)}
				>
					<div className="flex flex-col gap-6">
						<DialogHeader>
							<DialogTitle className="text-2xl">
								Adicionar tarefa
							</DialogTitle>
							<DialogDescription className="italic">
								adione as tarefas do dia
							</DialogDescription>
						</DialogHeader>
						<div className="size-full space-y-6">
							<TaskItem
								date={dateTask}
								setDate={setDateTask}
								priority={priority}
								setPriority={setPriority}
							/>
						</div>
					</div>
					<DialogFooter className="mt-12">
						<Button
							type="submit"
							className="capitalize w-2/5"
						>
							salvar item
						</Button>
					</DialogFooter>
				</form>
			</FormProvider>
		</DialogContent>
	)
}
