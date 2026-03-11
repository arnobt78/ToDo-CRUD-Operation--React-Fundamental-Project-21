import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'
import type { Task } from './types'
import './App.css'

const STORAGE_KEY = 'tasklist'

function getStoredTasklist(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as Task[]) : []
  } catch {
    return []
  }
}

function App() {
  const [tasklist, setTasklist] = useState<Task[]>(getStoredTasklist)
  const [task, setTask] = useState<Partial<Task>>({})

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasklist))
  }, [tasklist])

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  )
}

export default App
