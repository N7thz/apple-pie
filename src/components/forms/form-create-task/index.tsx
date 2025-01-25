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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { v4 as randomUUID } from "uuid"
import { CreateTaskForm } from "@/@types"
import { createTaskSchema } from "@/schemas"
import { FormCreateTaskItem } from "./form-create-task-item"

export const FormCreateTask = () => {

	const [date, setDate] = useState<Date>()

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<CreateTaskForm>({
		resolver: zodResolver(createTaskSchema),
	})

	const { fields: tasks, append, remove } = useFieldArray({
		control,
		name: "tasks",
	})

	async function createTask(data: CreateTaskForm) {
		console.log(data)
	}

	tasks.length === 0 && tasks.push({
		id: randomUUID(),
		title: "",
		content: "",
		dayTask: date ?? new Date(),
		priority: "LOW",
	})

	return (
		<DialogContent className="size-3/4 p-0 overflow-hidden">
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
					<ScrollArea className="max-h-[400px]">
						{
							tasks.map(({ id }) => (
								<FormCreateTaskItem
									key={id}
									date={date}
									setDate={setDate}
								/>
							))
						}
					</ScrollArea>
				</div>
				<DialogFooter>
					<Button
						type="submit"
						className="capitalize w-1/2"
					>
						salvar item
					</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	)
}
