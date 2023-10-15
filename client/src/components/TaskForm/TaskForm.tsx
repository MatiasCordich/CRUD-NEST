import { ChangeEvent, FormEvent, useState } from "react"
import { ButtonSave, TaskArea, TaskCheckbox, TaskFormBox, TaskInputs, TaskLabel, TaskLabelChecbox, TaskTitle } from "./TaskElements"
import { useTasks } from "../../context/Task/useTasks"
import { motion } from "framer-motion"


const TaskForm = (): JSX.Element => {

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
    setTask({title : "", description: "", done : false})
  }

  return (
    <TaskFormBox 
    initial={{ opacity: 0, y: "2rem"}}
    animate={{ opacity: 1, y: "0rem" }}
    transition={{duration: 1,delay: 1.8 }}  
    onSubmit={handleSubmit}>
      <TaskTitle>Task App</TaskTitle>
      <TaskLabel htmlFor="title">
        Titulo
        <TaskInputs 
          type="text" 
          name="title" 
          id="title"
          placeholder="Titulo"
          value={task.title}
          onChange={handleChange}
        />
      </TaskLabel>
      <TaskLabel htmlFor="description" >
        Descripcion
        <TaskArea 
          name="description" 
          id="description"
          placeholder="Descripcion"
          value={task.description}
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
      <ButtonSave type="submit">Guardar</ButtonSave>
    </TaskFormBox>
  )
}

export default TaskForm