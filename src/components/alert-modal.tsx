import { Dialog, DialogTrigger, DialogContent, DialogFooter } from './ui/dialog'
import { Button } from './ui/button'
import { ReactNode } from 'react'

export interface AlertModalProps {
    children: ReactNode
    message: string
    onClickFunction: () => void
}

export const AlertModal = ({
    children, message, onClickFunction
}: AlertModalProps) => {

    return (

        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                className="w-1/2 border-primary p-3 flex flex-col gap-6 font-bold"
            >
                <span className='text-xl'>
                    {message}
                </span>
                <DialogFooter>
                    <Button onClick={onClickFunction}>
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
