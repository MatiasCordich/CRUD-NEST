import React from 'react'
import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'

const App: React.FC = () => {
  return (
    <Wrapper>
      <TaskForm/>
    </Wrapper>
  )
}

export default App