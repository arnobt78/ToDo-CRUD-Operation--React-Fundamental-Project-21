/**
 * AddTask: form to create or update a task. Uses TaskContext for tasklist and the current "editing" task.
 * When task.id is set (after clicking edit in ShowTask), submit updates that task; otherwise it adds a new one.
 */
import { Plus, Save } from 'lucide-react'
import { type FormEvent } from 'react'
import { useTaskContext } from '../hooks/useTaskContext'
import type { Task } from '../types'

export function AddTask() {
  const { tasklist, setTasklist, task, setTask } = useTaskContext()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const nameInput = form.elements.namedItem('task') as HTMLInputElement | null
    const name = nameInput?.value ?? ''

    // Update existing task (edit flow) or append new task
    if (task.id !== undefined) {
      const date = new Date()
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name ?? name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo,
      )
      setTasklist(updatedTasklist)
      setTask({})
    } else {
      const date = new Date()
      // id from timestamp keeps items unique and stable for list keys
      const newTask: Task = {
        id: date.getTime(),
        name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
      setTasklist([...tasklist, newTask])
      setTask({})
    }
  }

  // Button label and icon switch between Add and Update based on edit state
  const isUpdate = task.id !== undefined

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name ?? ''}
          autoComplete="off"
          placeholder="Add a task…"
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit" className="btnSubmit">
          {isUpdate ? (
            <>
              <Save size={18} strokeWidth={2} />
              <span>Update</span>
            </>
          ) : (
            <>
              <Plus size={18} strokeWidth={2} />
              <span>Add</span>
            </>
          )}
        </button>
      </form>
    </section>
  )
}
