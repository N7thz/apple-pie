"use client"

import { Item } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { ItemComponent } from "./item-component"
import { LoadingItems } from "./loading-items"
import { SuspendedMenu } from "./suspended-menu"

export const ItemsList = () => {

    const { data: items, isLoading } = useQuery({
        queryKey: ["get-items"],
        refetchInterval: 1000,
        queryFn: async () => {

            const response = await fetch("/api/items", {
                method: "GET"
            })

            if (!response) return []

            const data: Item[] = await response.json()

            return data
        }
    })

    if (isLoading) return <LoadingItems />

    if (!items || items.length === 0) return (
        <p className="text-muted-foreground">
            sem items para comprar
        </p>
    )

    return (

        <div
            className="grid grid-cols-3 gap-3 p-3 max-sm:grid-cols-1 max-md:grid-cols-2"
        >
            {items.map(item =>
                <SuspendedMenu
                    key={item.id}
                    item={item}
                >
                    <ItemComponent item={item} />
                </SuspendedMenu>
            )}
        </div>
    )
}
