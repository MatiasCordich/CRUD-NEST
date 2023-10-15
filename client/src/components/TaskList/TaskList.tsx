import TaskItem from './TaskItem'
import { useTasks } from '../../context/Task/useTasks'
import { NoTasksMessage, TaskListBox } from './TaskListElements'

const TaskList = (): JSX.Element => {

  const { tasks } = useTasks()

  if (!tasks.length) {
    <>
      <NoTasksMessage
        initial={{ opacity: 0, y: "-2rem" }}
        animate={{ opacity: 1, y: "0rem" }}
        transition={{ duration: 1, delay: 1.1, }}
      >
        Aun no hay tareas
      </NoTasksMessage>;
    </>
  }



  return (
    <TaskListBox
      initial={{ opacity: 0, y: "-2rem" }}
      animate={{ opacity: 1, y: "0rem" }}
      transition={{ duration: 1, delay: 2.5 }}
    >

      {
        tasks.map(task => (
          <TaskItem task={task} key={task._id} />
        ))
      }
    </TaskListBox>
  )
}

export default TaskList