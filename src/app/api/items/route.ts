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

        if (item) throw new Error("Item already exist.")

        await prisma.item.create({
            data: {
                content
            }
        })
    }

    return new NextResponse("created", {
        status: 201
    })
}

export async function GET() {

    const response = await prisma.item.findMany({
        orderBy: {
            isChecked: "asc"
        }
    })

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