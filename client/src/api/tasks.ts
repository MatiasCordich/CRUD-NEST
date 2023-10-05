import { instance } from "./axios/base.api";
import { CreateTask, UpdateTask } from "./interfaces/task.interface";

export const createTaskRequest = async (task: CreateTask) => {
  const res = await instance.post("/api/v1/task", task);
  return res;
};

export const getTaskRequest = async () => {
  const { data } = await instance.get("/api/v1/task");
  return data;
};

export const deleteTaskRequest = async (id: string) => {
  const res = await instance.delete(`/api/v1/task/${id}`);
  return res;
};

export const updateTaskRequest = async (id: string, task: UpdateTask) => {
  const res = await instance.patch(`/api/v1/task/${id}`, task);
  return res;
};
