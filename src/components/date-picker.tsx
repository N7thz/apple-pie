"use client"

import { ComponentProps } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"

export interface DatePickerProps extends ComponentProps<"div"> {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
}

export const DatePicker = ({
    date, setDate, className, ...props
}: DatePickerProps) => {

    const dateString = (
        date ? format(date, "PPPP", { locale: ptBR }) : <span>Pick a date</span>
    )

    return (
        <Popover modal>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon />
                    {dateString}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="center"
                className={cn("size-full p-0", className)}
                {...props}
            >
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
