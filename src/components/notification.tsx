import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"
import { Animation } from "./animation"
import { FC } from "react"
import { NotificationProps } from "@/@types"

export const Notification: FC<NotificationProps> = ({
    Icon, message, title, variant
}) => {

    return (

        <Animation
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: -200 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{ duration: .5 }}
            className="z-50"
        >
            <Alert
                variant={variant}
                className="absolute -top-10 left-0 right-0 w-1/4 m-auto border-primary flex items-center gap-3 z-50"
            >
                <Icon className="h-8 w-8" />
                <div>
                    <AlertTitle className="text-xl">{title}</AlertTitle>
                    <AlertDescription className="italic">
                        {message}
                    </AlertDescription>
                </div>
            </Alert>
        </Animation>
    )
}
