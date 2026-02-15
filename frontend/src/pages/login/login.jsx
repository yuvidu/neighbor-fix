import React, { useState } from 'react'
import './login.css'
import api from '../../api'

const initialstate = {
    email : "",
    password : ""
}

function login() {
  const [formdata , setformdata] = useState(initialstate)

  const onchange = (e) => {
    const value = e.target.value
    setformdata({
      ...formdata,
      [e.target.name] : value
    })

  }
  const onsubmit = async(e) => {
    e.preventDefault()
    try {
      const loginresponse = await api.post("users/login" , formdata)
      console.log(loginresponse)
      setformdata(initialstate)
      
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='loginpagemain'>

        <h2>Login</h2>

        <form onSubmit={onsubmit} className='loginform'>
            <label>email</label>
            <input 
            type="text" 
            name='email'
            onChange={onchange}
            value={formdata.email}
            />
            <label>password</label>
            <input 
            type="password" 
            name='password'
            onChange={onchange}
            value={formdata.password}
            />
            <button type='submit'>login</button>
            
        </form>

    </div>
  )
}   

export default login
