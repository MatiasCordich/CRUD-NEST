import React from 'react'
import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { TaskProvider } from './context/TaskContext'

const App: React.FC = () => {
  return (
    <Wrapper>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>

    </Wrapper>
  )
}

export default App