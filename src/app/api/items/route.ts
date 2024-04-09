import { prisma } from "@/lib/prisma"
import { Item } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const body: string[] = await request.json()

    console.log(body)

    body.map(item => createItem(item))

    async function createItem(content: string) {

        const item = await prisma.item.findUnique({
            where: {
                content
            }
        })

        console.log(item)

        if (item) throw new Error("item already exist.")

        await prisma.item.create({
            data: {
                content
            }
        })
    }

    return new NextResponse("", {
        status: 201
    })
}

export async function GET() {

    const response = await prisma.item.findMany()

    return NextResponse.json(response)
}

export async function PUT(request: NextRequest) {

    const body: Item = await request.json()

    const { id, isChecked } = body

    await prisma.item.update({
        where: {
            id
        },
        data: {
            isChecked: !isChecked
        } 
    })

    return new NextResponse("", {
        status: 200
    })
}