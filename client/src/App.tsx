import React, { useState } from 'react'
import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { TaskProvider } from './context/TaskContext'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from 'styled-components'



const App: React.FC = () => {

  

  return (
    <ThemeProvider theme={{}}>
      <Wrapper>
        <Navbar/>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </Wrapper>
    </ThemeProvider>

  )
}

export default App