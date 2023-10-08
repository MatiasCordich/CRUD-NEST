import { Wrapper } from './AppElements'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { TaskProvider } from './context/Task/TaskContext'
import Navbar from './components/Navbar/Navbar'
import { useTheme } from './context/Theme/useTheme'
import { Mode } from './styles/themes'



const App: React.FC = () => {

  const { mode, changeMode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light)
  }


  return (

    <Wrapper>
      <Navbar changeTheme={toggleMode} />
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </Wrapper>

  )
}

export default App