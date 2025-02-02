import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import './login.css'

const Login = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        }))
    }
  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>Login Here 🚪🚶🏻‍♂️</h1>
            <input type="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='email'value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='passwold' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login