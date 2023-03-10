import React from 'react'
import logo from '../../assets/images/logo-white.png'
import bg2 from '../../assets/images/bg2.jpg'
import LoginForm from '../../Forms/LoginForm'

const Login = () => {
  return (
    <div className='grid grid-cols-2 h-full w-full'>
      <div className='flex flex-col px-16 py-20 bg-gray-100  items-center justify-center'>
        <LoginForm/>
      </div>
      <div id='bg' className=' flex justify-center items-center bg-gray-100'>
        <a className='absolute z-30' href='https://sonatrach.com/' target="_blank" rel="noopener noreferrer"> <img className=" opacity-30 hover:shadow-2xl hover:opacity-70 ease-out duration-150" src={logo}  alt="" /></a>
        <img className="h-screen" src={bg2} alt="" />
      </div>
    </div>
  )
}

export default Login