import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Addissue from './pages/home/addissue'
import Dashboard from './pages/home/dashboard'
import Landing from './pages/landing/landing'
import Aboutus from './pages/home/aboutus'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/addissue' element={<Addissue />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/landing' element={<Landing />}/>
        <Route path='/' element={<Landing />}/>
        <Route path='/aboutus' element={<Aboutus />}/>

      </Routes>
    </>
  )
}

export default App
