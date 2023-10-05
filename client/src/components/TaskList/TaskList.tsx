import TaskItem from './TaskItem'
import { useTasks } from '../../context/useTasks'
import { TaskListBox } from './TaskListElements'

const TaskList = () => {

  const {tasks} = useTasks()

  return (
    <TaskListBox>
      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id}/>
        ))
      }
    </TaskListBox>
  )
}

export default TaskList