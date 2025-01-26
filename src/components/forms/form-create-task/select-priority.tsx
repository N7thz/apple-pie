import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Priority } from "@prisma/client"

interface Priorities {
    value: Priority
    text: string
}

interface SelectPriorityProps {
    value: Priority
    onValueChange: (value: Priority) => void
}

export const SelectPriority = ({
    value, onValueChange
}: SelectPriorityProps) => {

    const priorities: Priorities[] = [
        {
            value: "LOW",
            text: "Baixa"
        },
        {
            value: "MEDIUM",
            text: "Média"
        },
        {
            value: "HIGH",
            text: "Alta"
        },
    ]

    return (
        <Select
            value={value}
            onValueChange={onValueChange}
        >
            <SelectTrigger className="w-[260px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Prioridade</SelectLabel>
                    {
                        priorities.map(({ text, value }) => (
                            <SelectItem
                                key={value}
                                value={value}
                            >
                                {text}
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
