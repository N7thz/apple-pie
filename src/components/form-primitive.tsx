import { CreateTaskForm } from "@/@types"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { FormProvider, type UseFormReturn } from "react-hook-form"

interface FormPrimitiveProps extends ComponentProps<"form"> {
    methods: UseFormReturn<CreateTaskForm>
}

export const FormPrimitive = ({
    methods, children, className, ...props
}: FormPrimitiveProps) => {
    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    "size-full flex flex-col justify-between",
                    className
                )}
                {...props}
            >
                {children}
            </form>
        </FormProvider>
    )
}
