import { useState } from "react"
import { Pencil } from "lucide-react"
import { Button } from ".@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from ".@/components/ui/dialog"
import {
	CreateTaskForm,
	Error,
	ItemComponentProps,
	UpdateTaskForm,
} from "@/@types"
import { updateTaskSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Label } from ".@/components/ui/label"
import { Input } from ".@/components/ui/input"
import { twMerge } from "tailwind-merge"

export const FormUpdateTask = ({ item }: ItemComponentProps) => {
	const [error, setError] = useState<Error | null>(null)

	const { id } = item

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateTaskForm>({
		resolver: zodResolver(updateTaskSchema),
	})

	async function updateTask(data: UpdateTaskForm) {
		const { title } = data

		const { status } = await fetch(`/api/items/${id}`, {
			method: "PUT",
			body: JSON.stringify(title),
		})

		console.log(status)

		if (status === 200) {
			window.location.reload()
		} else {
			reset()
			setError({
				isError: true,
				message: "Ocorreu erro no processo.",
			})
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="lg">
					<Pencil />
				</Button>
			</DialogTrigger>
			<DialogContent className="flex w-1/2 flex-col gap-6 border-primary p-3 font-bold">
				<form
					className="flex flex-col gap-6"
					onSubmit={handleSubmit(updateTask)}
				>
					<div className="flex flex-col gap-2 p-2">
						<Label
							htmlFor="title"
							className="pl-1 text-lg capitalize"
						>
							item:
						</Label>
						<div className="flex gap-2">
							<Input
								id="title"
								placeholder={
									error ? error.message : "Novo nome do item"
								}
								className={twMerge(
									error &&
									"border-red-500 placeholder:text-red-500",
								)}
								{...register("title")}
							/>
						</div>
						{errors.title && (
							<span className="m-1 text-sm italic text-red-500">
								{errors.title.message}
							</span>
						)}
					</div>

					<DialogFooter>
						<Button type="submit" className="capitalize">
							atualizar item
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
