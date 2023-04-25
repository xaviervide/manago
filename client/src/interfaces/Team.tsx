import { Task } from "./Task";

export interface Team {
  _id?: string,
  title: string | null,
  description: string | null,
  teamTasks?: Task [],
  teamMembers?: string []
}