import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export class TaskRepository {

    async create(taskInput: Prisma.TaskCreateInput) {

        const task = await prisma.task.create({
            data: taskInput
        })

        return task
    }
}