import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
