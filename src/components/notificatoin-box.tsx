"use client"

import { useNotification } from "@/context/notification-context"
import { Notification } from "./notification"
import { Check, XCircle } from "lucide-react"

export const NotificationsBox = () => {

    const { isCreated, isError } = useNotification()

    if (isCreated) {

        return (

            <Notification
                Icon={Check}
                title="Sucesso"
                message="O item foi adicionado a lista."
                variant={"default"}
            />
        )
    } else if (isError) {

        return (

            <Notification
                Icon={XCircle}
                title="Error"
                message="Ocorreu um erro ao adicionar a lista"
                variant={"destructive"}
            />
        )
    }
}
