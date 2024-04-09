"use client"

import { NotificationContextProps } from "@/@types"
import {
    ReactNode,
    createContext,
    useContext,
    useState
} from "react"

const NotificationContext = createContext({} as NotificationContextProps)

export function NotificationProvider({ children }: { children: ReactNode }) {

    const [isCreated, setIsCreated] = useState<boolean>(false)
    const [isError, setsError] = useState<boolean>(false)

    const value: NotificationContextProps = {
        isCreated, setIsCreated,
        isError, setsError
    }

    return (

        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)