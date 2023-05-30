import React from 'react'
import logo from "../assets/images/logo-primary.png";
import { roles } from '../store/types/roles';


const SidebarHeader = ({ role, structure}) => {
  
  return (
  <div className='flex flex-col items-center'>
    <img className="w-10" src={logo} alt='Sonatrach' />
    <p className='font-meduim mb-1'>Sonatrach</p>
    
    <p className='font-semibold text-orange-600 mt-1'>{role}</p>
    <p className='font-semibold text-center mt-1'>{structure}</p>
</div>
  )
}

export default SidebarHeader