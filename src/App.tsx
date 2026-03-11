/**
 * Root App component. Composes providers and layout.
 * ThemeProvider (outer) makes theme available to Header; TaskProvider (inner) holds task list and editing state for AddTask/ShowTask.
 */
import { ThemeProvider } from './context/ThemeContext'
import { TaskProvider } from './context/TaskContext'
import { Header } from './components/Header'
import { HomeIntro } from './components/HomeIntro'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="App">
          <Header />
          <HomeIntro />
          <AddTask />
          <ShowTask />
        </div>
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
