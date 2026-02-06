import React from 'react'
import './login.css'

function Register() {
  return (
    <div>

        <h2>Register</h2>

        <form action="">
            <label>name</label>
            <input type="text" />
            <label>email</label>
            <input type="text" />
            <label>phone</label>
            <input type="text" />
            <label>area</label>
            <input type="text" />
            <label>agreement</label>
            <input type="checkbox" />
            <label>password</label>
            <input type="password" />
            <button>Register</button>
            
        </form>

      
    </div>
  )
}   

export default Register
