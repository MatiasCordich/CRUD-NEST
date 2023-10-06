import React from 'react'
import { Task } from "../../api/interfaces/task.interface";
import { useTasks } from '../../context/Task/useTasks';
import { TaskBox, TaskButtonBox, TaskButtonDelete, TaskButtonUpdate, TaskDescription, TaskDoneText, TaskTitle, TaskUndoneText } from './TaskItemElements';
import { IoCheckmarkDone, IoCloseOutline } from 'react-icons/io5'

interface Props {
    task: Task
}

const TaskItem = ({task}: Props) => {

  const {deleteTask, updateTask} = useTasks()

  return (
    <TaskBox key={task._id}>
      <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
        {
          task.done
          ? <TaskDoneText>Finalizada <IoCheckmarkDone style={{fontSize: '2rem'}}/></TaskDoneText>
          : <TaskUndoneText>Inconclusa <IoCloseOutline style={{fontSize: '2rem'}}/></TaskUndoneText>
        }
        <TaskButtonBox>
            <TaskButtonUpdate 
              onClick={async () => {
              await updateTask(task._id, {done: !task.done})
            }}>
              Modificar
            </TaskButtonUpdate>
            <TaskButtonDelete 
              onClick={async () => {
              await deleteTask(task._id)
            }}>
              Eliminar
            </TaskButtonDelete>
        </TaskButtonBox>
    </TaskBox>
  )
}

export default TaskItem