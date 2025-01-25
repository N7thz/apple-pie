import { DatePicker } from "./date-picker"
import { FormCreateTask as DialogContent } from "./forms/form-create-task"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger } from "./ui/dialog"

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
