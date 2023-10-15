import React from 'react'
import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { TaskProvider } from './context/Task/TaskContext'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './context/Theme/useTheme'
import { Mode } from './styles/themes'



const App: React.FC = () => {

  const { mode, changeMode, changeBarbieMode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }

  const toggleBarbieMode = () => {
    changeBarbieMode(Mode.Barbie)
  }


  return (
    <Wrapper>
      <Navbar changeTheme={toggleMode} mode={mode} changeBTheme={toggleBarbieMode}/>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </Wrapper>

  )
}

export default App