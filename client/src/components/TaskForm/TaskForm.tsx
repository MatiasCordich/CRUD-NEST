import { ChangeEvent, FormEvent, useState } from "react"
import { ButtonSave, TaskArea, TaskCheckbox, TaskFormBox, TaskInputs, TaskLabel, TaskLabelChecbox, TaskTitle } from "./TaskElements"
import { createTaskRequest } from "../../api/tasks"


const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({...task, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await createTaskRequest(task)
    console.log(res)
  }

  return (
    <TaskFormBox onSubmit={handleSubmit}>
      <TaskTitle>Task App</TaskTitle>
      <TaskLabel htmlFor="title">
        Titulo
        <TaskInputs 
          type="text" 
          name="title" 
          placeholder="Titulo" 
          onChange={handleChange}
        />
      </TaskLabel>
      <TaskLabel htmlFor="description" >
        Descripcion
        <TaskArea 
          name="description" 
          placeholder="Descripcion"
          onChange={handleChange} 
        />
      </TaskLabel>
      <TaskLabelChecbox htmlFor="option">
        Finalizada
        <TaskCheckbox
          name="checkbox"
          onChange={(e) => setTask({...task, done: !task.done})}
        />
      </TaskLabelChecbox>
      <ButtonSave>Guardar</ButtonSave>
    </TaskFormBox>
  )
}

export default TaskForm