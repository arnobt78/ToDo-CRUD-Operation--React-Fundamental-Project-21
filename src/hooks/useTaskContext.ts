/**
 * useTaskContext: returns TaskContext value (tasklist, setTasklist, task, setTask).
 * Must be used inside TaskProvider; throws otherwise to avoid silent null usage.
 */
import { useContext } from 'react'
import { TaskContext } from '../context/taskState'

export function useTaskContext() {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error('useTaskContext must be used within TaskProvider')
  return ctx
}
