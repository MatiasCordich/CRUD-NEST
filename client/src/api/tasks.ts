import { instance } from "./axios/base.api";
import { CreateTask } from "./interfaces/task.interface";

export const createTaskRequest = async (task : CreateTask) => {
  await instance.post("/api/v1/task", task)
}

export const getTaskRequest = async () => {
  const {data} = await instance.get("/api/v1/task")
  return data;
}