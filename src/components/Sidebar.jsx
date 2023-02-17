import React from 'react'
import logo from "../assets/images/logo-primary.png";
import {AiOutlineUser} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import {adminLinks, dpLinks, uniteLinks} from '../data/sideBarData'
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const { isSignedIn, isAdmin, isManager, isUnite, isRespUnite} = useSelector((state)=> state.user);
  var Links = []
  if (isAdmin) Links = adminLinks;
  if (isManager) Links = dpLinks;
  if (isUnite || isRespUnite) Links = uniteLinks;
  
  return (
    <div className='relative flex flex-col items-center bg-white h-screen w-40 border-r-1 border-gray-200 px-3 py-5 shadow-sm hover:shadow-md'>
        {/* Header */}
            <div className='flex flex-col items-center'>
                <img className="w-10" src={logo} alt='Sonatrach' />
                <p className='font-meduim mt-1'>Sonatrach</p>
                <p className='font-semibold mt-3'>Administration</p>
            </div>

        {/* Divider */}
        <div className='h-px w-40 bg-gray-200 mt-5'></div>

        {/* Menu */}
        <div className='mt-5 w-36'>
            {Links.map( (item) => (
                <div key={item.name} >
                     <NavLink className="flex flex-row items-center px-2 py-2 rounded hover:bg-gray-100"
                     to={item.path}
                     key={item.name}>
                        {item.icon}
                        <span className="capitalize ml-2 font-medium text-xs">{item.name}</span>
                     </NavLink>
                </div>
            ))}
        </div>

        {/* Divider */}
        <div className='h-px w-40 bg-gray-200 bottom-24 absolute mb-5'></div>

        {/* Footer */}
        <div className='absolute bottom-6 flex flex-col items-center pt-5 '>
            <div className='flex flex-row px-4 py-2 items-center rounded-xl hover:bg-gray-50 hover:cursor-pointer'>
              <AiOutlineUser size={18} />
              <p className='capitalize ml-1 font-semibold'>Mouhammed</p>  
            </div>
            <button className="text-2xl mt-2" >
             <BiLogOut color='#333333'/>
            </button>
        </div>

    </div>
   
  )
}

export default Sidebar;