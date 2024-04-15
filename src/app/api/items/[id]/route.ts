import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

interface Params {
    params: { id: string }
}

export async function PUT(request: NextRequest, { params: { id } }: Params) {

    const content: string = await request.json()

    console.log(content)
    console.log(id)

    const item = await prisma.item.findUnique({
        where: {
            content
        }
    })

    if (item) {
        await prisma.item.update({
            where: {
                id
            },
            data: {
                content
            }
        })
    }

    if (item) return new NextResponse("Updated", {
        status: 200
    }) 
}

export async function DELETE(req: NextRequest,{ params: { id } }: Params) {

    console.log(id)

    await prisma.item.delete({
        where: {
            id
        }
    })

    return new NextResponse("deleted", {
        status: 204
    })
}

