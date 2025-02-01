import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { Dispatch, SetStateAction } from "react"
import { SelectPriority } from "./select-priority"
import { Priority } from "@prisma/client"
import { Card, CardContent } from "@/components/ui/card"
import { useFormContext } from "react-hook-form"
import { CreateTaskForm } from "@/@types"
import { SpanMessage } from "@/components/span-message"

interface TaskItemProps {
    date: Date | undefined
    setDate: Dispatch<SetStateAction<Date | undefined>>
    priority: Priority
    setPriority: Dispatch<SetStateAction<Priority>>
}

export const TaskItem = ({
    date, setDate,
    priority, setPriority,
}: TaskItemProps) => {

    const { register, formState: { errors } } = useFormContext<CreateTaskForm>()

    return (
        <Card>
            <CardContent className="pt-6 space-y-8">
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
                        {...register("title")}
                    />
                    {
                        errors.title &&
                        <SpanMessage message={errors.title.message} />
                    }
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
                        {...register("content")}
                    />
                    {
                        errors.content &&
                        <SpanMessage message={errors.content.message} />
                    }
                </Label>
                <div className="flex items-center gap-8">
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
                        {
                            errors.dateTask &&
                            <SpanMessage message={errors.dateTask.message} />
                        }
                    </Label>
                    <Label
                        htmlFor="priority"
                        className="flex flex-col gap-3"
                    >
                        <span className="self-start">
                            Prioridade:
                        </span>
                        <SelectPriority
                            value={priority}
                            onValueChange={setPriority}
                        />
                        {
                            errors.priority &&
                            <SpanMessage message={errors.priority.message} />
                        }
                    </Label>
                </div>
            </CardContent>
        </Card>
    )
}
