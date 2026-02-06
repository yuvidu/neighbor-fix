import React from 'react'
import './login.css'

function login() {
  return (
    <div className='loginpagemain'>

        <h2>Login</h2>

        <form action="" className='loginform'>
            <label>email</label>
            <input type="text" />
            <label>password</label>
            <input type="password" />
            <button>login</button>
            
        </form>

    </div>
  )
}   

export default login
