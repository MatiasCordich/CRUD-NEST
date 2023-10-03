import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error("Las tareas deben estar dentro de un Provider")
  return context
}