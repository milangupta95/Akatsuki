import { Link, Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import { Button } from '@mui/material'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='w-full p-2 sticky top-0 left-0 h-[70px] z-[100] max-h-[500px] shadow-md flex items-center justify-between bg-white'>
      <div className='flex flex-col justify-center items-center'>
        <Link to ='/'><img src='store.png' className='w-[40px] h-[40px]' /></Link>
        <p className='font-bold text-xs'>Retailsense</p>
      </div>
      <div className='space-x-2 px-2'>
        <Button onClick={() => {
          navigate("/login");
        }} variant='contained'>Login</Button>
        <Button href='/signup' variant='contained'
          onClick={() => {
            navigate("/signup")
          }
          }>Signup</Button>
      </div>
    </div>
  )
}

export default Navbar