"use client"

import { Button } from "./ui/button"
import {
    DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ScrollArea } from "./ui/scroll-area"
import { z } from "zod"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { v4 as randomUUID } from "uuid"
import { Plus, X } from "lucide-react"

const createItemsSchema = z.object({
    items: z.array(z.object({
        title: z.string().nonempty({
            message: "todos os campos devem estar preenchidos"
        })
    }))
})

export type CreateItemsForm = z.infer<typeof createItemsSchema>

export const FormCreateItems = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<CreateItemsForm>({
        resolver: zodResolver(createItemsSchema)
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    })

    async function createItems(data: CreateItemsForm) {

        const { items: array } = data
        const items: string[] = []

        array.map(item => {

            items.push(item.title)
        })

        const { status } = await fetch("/api/create-items", {
            method: "POST",
            body: JSON.stringify(items)
        })

        if (status === 201) {

            
        }
    }

    fields.length === 0 && fields.push({ id: randomUUID(), title: "" })

    return (

        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(createItems)}
        >
            <DialogHeader>
                <DialogTitle className="text-2xl">
                    Adicionar item
                </DialogTitle>
                <DialogDescription className="italic">
                    adione os item para a proxima compra
                </DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[300px] ">
                {
                    fields.map((field, index) => {

                        const { id, title } = field

                        return (

                            <div
                                key={id}
                                className="flex flex-col gap-2 p-2"
                            >
                                <Label
                                    htmlFor={title}
                                    className="text-lg pl-1 capitalize"
                                >
                                    item {index + 1}:
                                </Label>
                                <div className="flex gap-2">
                                    <Input
                                        id={title}
                                        placeholder="Nome do item a ser adiocionado"
                                        {...register(
                                            `items.${index}.title`
                                        )}
                                    />
                                    {
                                        index === 0
                                            ? <Button
                                                size="icon"
                                                type="button"
                                                onClick={() =>
                                                    append({ title: "" })
                                                }
                                            >
                                                <Plus />
                                            </Button>
                                            : <Button
                                                size="icon"
                                                type="button"
                                                onClick={() =>
                                                    remove(index)
                                                }
                                            >
                                                <X />
                                            </Button>
                                    }
                                </div>
                                {
                                    errors.items?.[index] &&
                                    <span
                                        className="text-sm text-red-500 italic m-1"
                                    >
                                        {errors.items?.[index]?.title?.message}
                                    </span>
                                }
                            </div>
                        )
                    })
                }
            </ScrollArea>
            <DialogFooter>
                <Button
                    type="submit"
                    className="capitalize"
                >
                    salvar item
                </Button>
            </DialogFooter>
        </form>
    )
}

