import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from './ui/dialog'
import { CreateItemsForm, Error, ItemComponentProps, UpdateItemsForm } from '@/@types'
import { updateItemsSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { twMerge } from 'tailwind-merge'

export const FormUpdateItem = ({ item } : ItemComponentProps) => {

    const [error, setError] = useState<Error | null>(null)

    const { id } = item

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateItemsForm>({
        resolver: zodResolver(updateItemsSchema)
    })

    async function updateItems(data: UpdateItemsForm) {

        const { title } = data

        const { status } = await fetch(`/api/items/${id}`, {
            method: "PUT",
            body: JSON.stringify(title)
        })

        console.log(status)

        if (status === 200) {

            window.location.reload()
        } else {

            reset()
            setError({
                isError: true,
                message: "Ocorreu erro no processo."
            })
        }
    }

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                >
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent
                className="w-1/2 border-primary p-3 flex flex-col gap-6 font-bold"
            >
                <form
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit(updateItems)}
                >
                    <div
                        className="flex flex-col gap-2 p-2"
                    >
                        <Label
                            htmlFor="title"
                            className="text-lg pl-1 capitalize"
                        >
                            item:
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                id="title"
                                placeholder={
                                    error
                                        ? error.message
                                        : "Novo nome do item"
                                }
                                className={twMerge(
                                    error && "border-red-500 placeholder:text-red-500"
                                )}
                                {...register("title")}
                            />
                        </div>
                        {
                            errors.title &&
                            <span
                                className="text-sm text-red-500 italic m-1"
                            >
                                {errors.title.message}
                            </span>
                        }
                    </div>

                    <DialogFooter>
                        <Button
                            type="submit"
                            className="capitalize"
                        >
                            atualizar item
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
