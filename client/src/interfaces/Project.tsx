import { Task } from "./Task";

export interface Project {
  _id?: string,
  title: string | null,
  description: string | null,
  projectTasks?: Task []
}