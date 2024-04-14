"use client"

import { Dialog, DialogTrigger, DialogContent, DialogFooter } from './ui/dialog'
import { Button } from './ui/button'
import { ReactNode } from 'react'

export interface AlertModalProps {
    children: ReactNode
    message: string
}

export const AlertModal = ({ children, message }: AlertModalProps) => {

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
                    <Button>
                        Cancelar
                    </Button>
                    <Button>
                        Confirmar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
