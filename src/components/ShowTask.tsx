/**
 * ShowTask: lists all tasks with edit/delete actions, or shows EmptyState when list is empty.
 * Edit puts the task into context so AddTask's input shows it and submit becomes "Update".
 */
import { Pencil, Trash2, ListTodo } from 'lucide-react'
import { useTaskContext } from '../hooks/useTaskContext'
import { EmptyState } from './EmptyState'

export function ShowTask() {
  const { tasklist, setTasklist, setTask } = useTaskContext()

  // Copy task into context so AddTask form is populated and submits as update
  const handleEdit = (id: number) => {
    const selectedTask = tasklist.find((todo) => todo.id === id)
    if (selectedTask) setTask(selectedTask)
  }

  const handleDelete = (id: number) => {
    setTasklist((prev) => prev.filter((todo) => todo.id !== id))
  }

  const isEmpty = tasklist.length === 0

  return (
    <section className="showTask">
      <div className="showTaskIntro">
        <p className="showTaskEducational">
          Your tasks appear here. Use the pencil to edit and the trash icon to delete. This list uses React state and Context so updates are instant.
        </p>
      </div>
      <div className="head">
        <div className="headTitle">
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button
          type="button"
          onClick={() => setTasklist([])}
          className="clearAll"
          disabled={isEmpty}
        >
          Clear All
        </button>
      </div>
      {isEmpty ? (
        // Reusable empty state; same width/styling as list area
        <EmptyState
          icon={<ListTodo size={48} strokeWidth={1.5} />}
          title="No tasks yet"
          description="Your list is empty. Add a task above to get started — try typing something and clicking Add."
        />
      ) : (
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
      )}
    </section>
  )
}
