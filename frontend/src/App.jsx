import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Addissue from './pages/home/addissue'
import Dashboard from './pages/home/dashboard'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/addissue' element={<Addissue />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
