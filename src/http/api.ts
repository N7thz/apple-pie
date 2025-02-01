import { CreateTaskForm as CreateTaskProps } from "@/@types"
import { Task } from "@prisma/client"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const useHttp = () => {

    function createTask(task: CreateTaskProps) {
        return api.post<Task>("/tasks", task)
    }

    return {
        createTask
    }
}