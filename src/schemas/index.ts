import { z } from "zod"

export const createItemsSchema = z.object({
    items: z.array(z.object({
        title: z.string().nonempty({
            message: "todos os campos devem estar preenchidos"
        })
    }))
})