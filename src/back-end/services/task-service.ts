import { CreateTaskForm as CreateTaskProps } from "@/@types";
import { TaskRepository } from "../repositories/task-repository";
import { Prisma } from "@prisma/client";

export class TaskService {

    private taskRepository = new TaskRepository()

    async create({ 
        title, content, dateTask: taskDay, priority 
    }: CreateTaskProps) {

        const task: Prisma.TaskCreateInput = {
            title,
            content,
            taskDay,
            priority
        }

        const taskCreated = await this.taskRepository.create(task)

        return taskCreated
    }
}