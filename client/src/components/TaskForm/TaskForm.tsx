import { ChangeEvent, FormEvent, useState } from "react"
import { ButtonSave, TaskArea, TaskCheckbox, TaskFormBox, TaskInputs, TaskLabel, TaskLabelChecbox, TaskTitle } from "./TaskElements"
import { createTaskRequest } from "../../api/tasks"
import { useTasks } from "../../context/useTasks"


const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false
  })

  const {createTask} = useTasks()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({...task, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTask(task)
  }

  return (
    <TaskFormBox onSubmit={handleSubmit}>
      <TaskTitle>Task App</TaskTitle>
      <TaskLabel htmlFor="title">
        Titulo
        <TaskInputs 
          type="text" 
          name="title" 
          id="title"
          placeholder="Titulo" 
          onChange={handleChange}
        />
      </TaskLabel>
      <TaskLabel htmlFor="description" >
        Descripcion
        <TaskArea 
          name="description" 
          id="description"
          placeholder="Descripcion"
          onChange={handleChange} 
        />
      </TaskLabel>
      <TaskLabelChecbox htmlFor="option">
        Finalizada
        <TaskCheckbox
          id="option"
          name="checkbox"
          onChange={(e) => setTask({...task, done: !task.done})}
        />
      </TaskLabelChecbox>
      <ButtonSave>Guardar</ButtonSave>
    </TaskFormBox>
  )
}

export default TaskForm