import React from 'react'
import logo from "../assets/images/logo-primary.png";
import {AiOutlineUser} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import { Adminlinks } from "../data/sideBarData"

const Sidebar = () => {
  return (
    <div className='relative flex flex-col items-center bg-white h-screen w-40 border-r-1 border-gray-300 px-3 py-5 '>
        {/* Header */}
            <div className='flex flex-col items-center'>
                <img className="w-10" src={logo} alt='Sonatrach' />
                <p className='font-meduim mt-1'>Sonatrach</p>
                <p className='font-semibold mt-3'>Administration</p>
            </div>

        {/* Divider */}
        <div className='h-px w-40 bg-gray-300 mt-5'></div>

        {/* Menu */}
        <div className='mt-5 w-36'>
            {Adminlinks.map( (item) => (
                <div key={item.name} >
                     <NavLink className="flex flex-row items-center px-4 py-2 rounded hover:bg-sky-100"
                     to={item.path}
                     key={item.name}>
                        {item.icon}
                        <span className="capitalize ml-2 font-semibold text-xs">{item.name}</span>
                     </NavLink>
                </div>
            ))}
        </div>

        {/* Divider */}
        <div className='h-px w-40 bg-gray-300 bottom-24 absolute mb-5'></div>

        {/* Footer */}
        <div className='absolute bottom-6 flex flex-col items-center pt-5 '>
            <div className='flex flex-row items-center'>
              {/* <AiOutlineUser className='text-xl'/> */}
              <p className='capitalize ml-2 font-semibold'>john Doe</p>  
            </div>
            <button className="text-2xl mt-2" >
             <BiLogOut color='#333333'/>
            </button>
        </div>

    </div>
   
  )
}

export default Sidebar;