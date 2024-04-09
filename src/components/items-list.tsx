"use client"

import { Item } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Checkbox } from "./ui/checkbox"

export const ItemsList = () => {

    const { data: items, isLoading } = useQuery({
        queryKey: ["get-items"],
        queryFn: async () => {

            const response = await fetch("/api/items", {
                method: "GET"
            })

            if (!response) return []

            const data: Item[] = await response.json()

            return data
        }
    })

    if (!items || items.length === 0) return (
        <p className="text-muted-foreground">
            sem items para comprar
        </p>
    )

    async function changeIsChecked(item: Item) {

        const response = await fetch("/api/items", {
            method: "PUT",
            body: JSON.stringify(item)
        })

        console.log(response)
    }

    return (

        <div className="grid grid-cols-3 gap-3 p-3">
            {
                items.map(item => {

                    const { id, content, created_at, isChecked } = item

                    return (

                        <Card
                            key={id}
                            className="border-primary"
                        >
                            <CardHeader>
                                <CardTitle
                                    className="flex justify-between items-center gap-3"
                                >
                                    <span
                                        className="w-4/5 overflow-hidden text-ellipsis text-nowrap capitalize"
                                    >
                                        {content}
                                    </span>
                                    <Checkbox
                                        className="scale-125"
                                        onClick={() => changeIsChecked(item)}
                                    />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    )
                })
            }
        </div>
    )
}
