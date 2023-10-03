import React, { EffectCallback, useEffect, useState } from 'react'
import { getTaskRequest } from '../../api/tasks'
import { Task } from '../../api/interfaces/task.interface'
import TaskItem from './TaskItem'

const TaskList = () => {

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

  return (
    <div>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TaskList