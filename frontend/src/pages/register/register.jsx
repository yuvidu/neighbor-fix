import React from 'react'
import './register.css'
import { useState } from 'react'
import api from '../../api'

function Register() {

  const [formdata,setformdata] = useState({
    name :"",
    email : "",
    phone : "",
    area : "",
    agreement : false,
    password : "",
    confirmPassword : ""
  })

  const initialstate = {

    name :"",
    email : "",
    phone : "",
    area : "",
    agreement : false,
    password : "",
    confirmPassword : ""

  }

  const onchange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setformdata({
      ...formdata,
      [e.target.name] : value
    })
  }

  const onsubmit = async(e) => {
    e.preventDefault()
    try {
      if(formdata.password !== formdata.confirmPassword){
      alert("password not match")
      return
    }
    if(!formdata.agreement){
      alert("please accept the agreement")
      return
    }
    try {
      const registerrespose = await api.post("users/register" , formdata)
      console.log(registerrespose)
      if(registerrespose.status === 201){
        alert("user registered successfully")
      }
      else{
        alert("user registered failed")
      }

      setformdata(initialstate)
      

    } catch (error) {
      console.log(error)
    }

    console.log(formdata)
      
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <div className='loginpagemain'>

        <h2>Register</h2>

        <form onSubmit={onsubmit} className='loginform'>
            <label>name</label>
            <input 
            type="text" 
            name='name'
            onChange={onchange}
            value={formdata.name}
            />
            <label>email</label>
            <input 
            type="text" 
            name='email'
            onChange={onchange}
            value={formdata.email}
            />
            <label>phone</label>
            <input 
            type="text" 
            name='phone'
            onChange={onchange}
            value={formdata.phone}
            />
            <label>area</label>
            <input 
            type="text" 
            name='area'
            onChange={onchange}
            value={formdata.area}
            />
            <label>agreement</label>
            <input 
            type="checkbox" 
            name='agreement'
            onChange={onchange}
            checked={formdata.agreement}
            />
            <label>password</label>
            <input 
            type="password" 
            name='password'
            onChange={onchange}
            value={formdata.password}
            />
            <label>confirm password</label>
            <input 
            type="password" 
            name='confirmPassword'
            onChange={onchange}
            value={formdata.confirmPassword}
            />
            <button type='submit'>Register</button>
            
        </form>

      
    </div>
  )
}   

export default Register
