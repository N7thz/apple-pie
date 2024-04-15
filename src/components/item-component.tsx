import { Item } from "@prisma/client"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { FC } from "react"
import { ItemComponentProps } from "@/@types"

export const ItemComponent:FC<ItemComponentProps> = ({ item }) => {

    const { content, isChecked } = item

    async function changeIsChecked(item: Item) {

        const response = await fetch("/api/items", {
            method: "PUT",
            body: JSON.stringify(item)
        })

        console.log(response)
    }

    return (

        <Card
            className="border-primary cursor-pointer"
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
                        checked={isChecked}
                    />
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
