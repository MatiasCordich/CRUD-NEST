import React from 'react'
import { Task } from "../../api/interfaces/task.interface";

interface Props {
    task: Task
}

const TaskItem = ({task}: Props) => {
  return (
    <div key={task._id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div>
            <button>Modificar</button>
            <br/>
            <button>Eliminar</button>
        </div>
    </div>
  )
}

export default TaskItem