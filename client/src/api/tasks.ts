import { instance } from "./axios/base.api";
import { Task } from "./interfaces/task.interface";

export const createTaskRequest = async (task : Task) => {
  await instance.post("/api/v1/task", task)
}