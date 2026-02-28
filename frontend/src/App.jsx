import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Addissue from './pages/home/addissue'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Addissue />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  )
}

export default App
