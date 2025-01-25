import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { Dispatch, SetStateAction } from "react"

interface FormCreateTaskProps {
    date: Date | undefined
    setDate: Dispatch<SetStateAction<Date | undefined>>
}

throw new Error('Implementar Prioridade')

export const FormCreateTaskItem = ({ date, setDate }: FormCreateTaskProps) => {
    return (
        <div className="space-y-8">
            <Label
                htmlFor="title"
                className="flex flex-col gap-3 items-center"
            >
                <span className="self-start">
                    Titulo:
                </span>
                <Input
                    id="title"
                    className="w-[99%]"
                />
            </Label>
            <Label
                htmlFor="content"
                className="flex flex-col gap-3 items-center"
            >
                <span className="self-start">
                    Descrição:
                </span>
                <Textarea
                    id="content"
                    className="w-[99%]"
                />
            </Label>
            <Label
                htmlFor="date-picker"
                className="flex flex-col gap-3"
            >
                <span className="self-start">
                    Data da tarefa:
                </span>
                <DatePicker
                    id="date-picker"
                    className="w-full"
                    date={date}
                    setDate={setDate}
                />
            </Label>
            <Label>
                {
                    
                }
            </Label>
        </div>
    )
}
