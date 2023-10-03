import { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTaskRequest } from "../api/tasks";
import { Task, CreateTask } from "../api/interfaces/task.interface";


interface Props {
    children: React.ReactNode
}

interface TaskContextValue {
    tasks: Task[];
    createTask: (task: CreateTask) => Promise<void>
}

export const TaskContext = createContext<TaskContextValue>({
    tasks: [],
    createTask: async () => {}
})

export const TaskProvider: React.FC<Props> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTaskRequest()
                setTasks(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const createTask = async (task : CreateTask) => {
      console.log(task)
      const res = await createTaskRequest(task)
      const data = res.data.newTask
      setTasks([...tasks, data ])
    }
    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    )
}