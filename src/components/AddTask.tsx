import { Plus, Save } from 'lucide-react'
import { type FormEvent } from 'react'
import type { Task } from '../types'

interface AddTaskProps {
  tasklist: Task[]
  setTasklist: React.Dispatch<React.SetStateAction<Task[]>>
  task: Partial<Task>
  setTask: React.Dispatch<React.SetStateAction<Partial<Task>>>
}

export function AddTask({ tasklist, setTasklist, task, setTask }: AddTaskProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const nameInput = form.elements.namedItem('task') as HTMLInputElement | null
    const name = nameInput?.value ?? ''

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
      const newTask: Task = {
        id: date.getTime(),
        name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
      setTasklist([...tasklist, newTask])
      setTask({})
    }
  }

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
