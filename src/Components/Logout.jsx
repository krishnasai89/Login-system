import React from 'react'
import './logout.css'
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault()
    
    dispatch(logout());
  }
  return (
    <div className='logout'>
        <h1>Welcome <span className='user_name'>{user.name}</span></h1>{" "}
        <button className='logout_btn' onClick={(e)=> handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout