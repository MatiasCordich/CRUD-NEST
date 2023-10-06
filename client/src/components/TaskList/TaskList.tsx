import TaskItem from './TaskItem'
import { useTasks } from '../../context/useTasks'
import { NoTasksMessage, TaskListBox } from './TaskListElements'

const TaskList = () => {

  const { tasks } = useTasks()

  if (!tasks.length)
    return <NoTasksMessage className="text-center text-xl font-bold my-4">Aun no hay tareas</NoTasksMessage>;

  return (
    <TaskListBox>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id} />
        ))
      }
    </TaskListBox>
  )
}

export default TaskList