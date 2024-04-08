import { FormCreateItems } from "./form-create-item"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "./ui/dialog"

export const ButtonAddItem = () => {

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button title="add item">
                    add item
                </Button>
            </DialogTrigger>
            <DialogContent className="w-1/2 border-primary p-3">
                <FormCreateItems />
            </DialogContent>
        </Dialog>
    )
}
