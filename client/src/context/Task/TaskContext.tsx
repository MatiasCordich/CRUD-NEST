import { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTaskRequest, deleteTaskRequest, updateTaskRequest } from "../../api/tasks";
import { Task, CreateTask, UpdateTask } from "../../api/interfaces/task.interface";


interface Props {
    children: React.ReactNode
}

interface TaskContextValue {
    tasks: Task[];
    createTask: (task: CreateTask) => Promise<void>
    deleteTask: (id: string) => Promise<void>
    updateTask: (id: string, task: UpdateTask) => Promise<void>
}

export const TaskContext = createContext<TaskContextValue>({
    tasks: [],
    createTask: async () => { },
    deleteTask: async () => { },
    updateTask: async () => { }
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

    const createTask = async (task: CreateTask) => {
        const res = await createTaskRequest(task)
        const data = res.data.newTask
        setTasks([...tasks, data])
    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskRequest(id)

        if (res.status === 204) setTasks(tasks.filter(task => task._id != id))

    }

    const updateTask = async (id: string, task: UpdateTask) => {
        const res = await updateTaskRequest(id, task)
        const data = res.data.upatedTask
        console.log(data)
        setTasks(tasks.map(task => task._id === id ? {...task, ...data} : task))
        

    }
    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}