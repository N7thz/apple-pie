import { CreateTaskForm as CreateTaskProps } from "@/@types";
import { TaskService } from "@/back-end/services/task-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json("Hello word")
}

export async function POST(request: NextRequest) {

    const {
        title, content, dateTask, priority
    }: CreateTaskProps = await request.json()

    const taskService = new TaskService()

    const taskCreated = await taskService.create({
        title, content, dateTask, priority
    })

    return NextResponse.json(taskCreated)
}