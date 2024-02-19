import React, {useState, useContext} from 'react'
import Usercontext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {Setuser} = useContext(Usercontext)
    const handleSubmit = (e)=>{
      e.preventDefault()
      Setuser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value = {username}
      onChange={(e)=>
        setUsername(e.target.value)
      }
      placeholder='username'  />
      <input type="text" 
      value = {password}
      onChange={(e)=>
        setPassword(e.target.value)
      }
      placeholder='password'  />
      <button
      onClick={handleSubmit}
      >login</button>
    </div>
  )
}

export default Login
