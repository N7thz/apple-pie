import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const body: string[] = await request.json()

    body.map(item => createItem(item))

    async function createItem(item: string) {
        await prisma.item.create({
            data: {
                content: item
            }
        })
    }

    return new NextResponse("", {
        status: 201
    })
}