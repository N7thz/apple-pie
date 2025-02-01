import { Info } from "lucide-react"

export const SpanMessage = ({ message }: { message: string | undefined }) => {
    return (
        <div className="w-full px-2 flex items-center gap-1.5 text-destructive">
            <Info className="size-4 " />
            <span className="text-sm italic">
                {message}
            </span>
        </div>
    )
}
