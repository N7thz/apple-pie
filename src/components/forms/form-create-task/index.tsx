"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateTaskForm } from "@/@types"
import { createTaskSchema } from "@/schemas"
import { TaskItem } from "./task-item"
import { Priority } from "@prisma/client"
import { FormPrimitive as Form } from "@/components/form-primitive"
import { useHttp } from "@/http/api"

export const FormCreateTask = () => {

	const http = useHttp()

	const [dateTask, setDateTask] = useState<Date>()
	const [priority, setPriority] = useState<Priority>("LOW")

	const methods = useForm<CreateTaskForm>({
		resolver: zodResolver(createTaskSchema),
		defaultValues: {
			dateTask,
			priority,
		}
	})

	useEffect(() => {
		setValue("dateTask", dateTask as Date)
		setValue("priority", priority)
	}, [dateTask, priority])

	const { handleSubmit, setValue } = methods

	async function createTask({
		title, content, dateTask, priority
	}: CreateTaskForm) {
		http
			.createTask({ title, content, dateTask, priority })
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
	}

	return (
		<DialogContent className="w-4/5 overflow-hidden">
			<Form
				methods={methods}
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
			</Form>
		</DialogContent>
	)
}
