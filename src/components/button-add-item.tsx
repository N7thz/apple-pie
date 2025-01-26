import {
	FormCreateTask as DialogContent
} from "@/components/forms/form-create-task"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export const ButtonAddItem = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button title="add item">Adicionar tarefa</Button>
			</DialogTrigger>
			<DialogContent />
		</Dialog>
	)
}
