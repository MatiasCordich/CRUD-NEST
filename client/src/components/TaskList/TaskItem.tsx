import React from 'react'
import { Task } from "../../api/interfaces/task.interface";
import { useTasks } from '../../context/useTasks';

interface Props {
    task: Task
}

const TaskItem = ({task}: Props) => {

  const {deleteTask} = useTasks()

  return (
    <div key={task._id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div>
            <button>Modificar</button>
            <br/>
            <button onClick={async () => {
              await deleteTask(task._id)
            }}>Eliminar</button>
        </div>
    </div>
  )
}

export default TaskItem