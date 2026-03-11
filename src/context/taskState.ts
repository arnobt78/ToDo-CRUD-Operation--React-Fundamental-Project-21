/**
 * Task context definition: the value provided by TaskProvider.
 * tasklist/setTasklist = full list (persisted via useLocalStorage in provider);
 * task/setTask = currently edited task (empty object when adding new).
 */
import { createContext } from 'react'
import type { Task } from '../types'

export interface TaskContextValue {
  tasklist: Task[]
  setTasklist: React.Dispatch<React.SetStateAction<Task[]>>
  task: Partial<Task>
  setTask: React.Dispatch<React.SetStateAction<Partial<Task>>>
}

export const TaskContext = createContext<TaskContextValue | null>(null)
