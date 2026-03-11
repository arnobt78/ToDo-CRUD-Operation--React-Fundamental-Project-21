import { Pencil, Trash2 } from 'lucide-react'
import type { Task } from '../types'

interface ShowTaskProps {
  tasklist: Task[]
  setTasklist: React.Dispatch<React.SetStateAction<Task[]>>
  task: Partial<Task>
  setTask: React.Dispatch<React.SetStateAction<Partial<Task>>>
}

export function ShowTask({
  tasklist,
  setTasklist,
  task: _task,
  setTask,
}: ShowTaskProps) {
  const handleEdit = (id: number) => {
    const selectedTask = tasklist.find((todo) => todo.id === id)
    if (selectedTask) setTask(selectedTask)
  }

  const handleDelete = (id: number) => {
    setTasklist((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <section className="showTask">
      <div className="head">
        <div className="headTitle">
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button
          type="button"
          onClick={() => setTasklist([])}
          className="clearAll"
        >
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <span className="taskActions">
              <button
                type="button"
                onClick={() => handleEdit(todo.id)}
                className="btnIcon btnEdit"
                aria-label={`Edit ${todo.name}`}
              >
                <Pencil size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(todo.id)}
                className="btnIcon btnDelete"
                aria-label={`Delete ${todo.name}`}
              >
                <Trash2 size={18} strokeWidth={2} />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
