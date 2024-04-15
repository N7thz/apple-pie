import { Item } from "@prisma/client"
import { SuspendedMenuProps } from "@/@types"
import { Pencil, Trash } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { AlertModal } from "./alert-modal"
import { FormUpdateItem } from "./form-update-item"

export const SuspendedMenu = ({ children, item }: SuspendedMenuProps) => {

    async function deleteItem(item: Item) {

        const { id } = item

        const { status } = await fetch(`/api/items/${id}`, {
            method: "DELETE",
        })

        if (status === 500) {

            window.location.reload()
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    {children}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-primary">
                <DropdownMenuLabel className="text-xl">
                    Opções
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="w-full flex justify-around p-1">
                    <FormUpdateItem item={item} />
                    <AlertModal
                        onClickFunction={() => deleteItem(item)}
                        message="Tem certeza que deseja excuir o item?"
                    >
                        <Button
                            size="lg"
                        >
                            <Trash />
                        </Button>
                    </AlertModal>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

