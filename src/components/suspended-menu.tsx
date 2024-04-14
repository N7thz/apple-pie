import { Item } from "@prisma/client"
import { Button } from "./ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip"
import { SuspendedMenuProps } from "@/@types"
import { Pencil, Trash } from "lucide-react"
import { AlertModal } from "./alert-modal"

export const SuspendedMenu = ({ children, item }: SuspendedMenuProps) => {

    async function upDateItem(item: Item) {

    }

    async function deleteItem(item: Item) {

    }

    return (

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        {children}
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    className="w-full border-primary flex gap-2 p-2"
                >
                    <Button
                        onClick={() => upDateItem(item)}
                    >
                        <Pencil />
                    </Button>
                    <AlertModal
                        message="Tem certeza que deseja excuir o item ?"
                    >
                        <Button
                            onClick={() => deleteItem(item)}
                        >
                            <Trash />
                        </Button>
                    </AlertModal>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
