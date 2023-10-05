import React from 'react'
import { Task } from "../../api/interfaces/task.interface";
import { useTasks } from '../../context/useTasks';
import { TaskBox } from './TaskItemElements';

interface Props {
    task: Task
}

const TaskItem = ({task}: Props) => {

  const {deleteTask, updateTask} = useTasks()

  return (
    <TaskBox key={task._id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        {
          task.done
          ? <p>Finalizada</p>
          : <p>Inconclusa</p>
        }
        <div>
            <button onClick={async () => {
              await updateTask(task._id, {done: !task.done})
            }}>Modificar</button>
            <br/>
            <button onClick={async () => {
              await deleteTask(task._id)
            }}>Eliminar</button>
        </div>
    </TaskBox>
  )
}

export default TaskItem