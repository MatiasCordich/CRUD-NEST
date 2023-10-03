import React from 'react'
import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

const App: React.FC = () => {
  return (
    <Wrapper>
      <TaskForm/>
      <TaskList/>
    </Wrapper>
  )
}

export default App