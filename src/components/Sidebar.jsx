import React from 'react'
import logo from "../assets/images/logo-primary.png";
import {AiOutlineUser} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import { Navigate, NavLink } from 'react-router-dom';
import {adminLinks, dpLinks, uniteLinks} from '../data/sideBarData'
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../store/slices/userSlice'
const Sidebar = () => {
  const inActiveStyle = "flex flex-row items-center px-2 py-2 rounded hover:bg-gray-100"
  const activeStyle = "flex flex-row items-center px-2 py-2 font-semibold rounded bg-orange-50 hover:bg-orange-100 text-orange-600"

  const { isSignedIn, isAdmin, isManager, isUnite, isRespUnite} = useSelector((state)=> state.user);
  var Links = []
  if (isAdmin) Links = adminLinks;
  if (isManager) Links = dpLinks;
  if (isUnite || isRespUnite) Links = uniteLinks;

  const dispatch = useDispatch()
  const handleLogOut = () =>{
    dispatch(Logout())
    
  }
  
  return (
    <div className='relative flex flex-col items-center bg-white h-screen w-44 border-r-1 border-gray-200 px-2 py-5 shadow-sm hover:shadow-md'>
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
                     <NavLink 
                     className= {({isActive}) => isActive? activeStyle : inActiveStyle}
                     to={item.path}
                     key={item.name}>
                        {item.icon}
                        <span className="capitalize ml-2 font-medium text-xs ">{item.name}</span>
                     </NavLink>
                </div>
            ))}
        </div>

        {/* Divider */}
        <div className='h-px w-40 bg-gray-200 bottom-24 absolute mb-5'></div>

        {/* Footer */}
        <div className='absolute bottom-6 flex flex-col items-center pt-5 '>
            <NavLink to="/profile" className='flex flex-row px-4 py-2 items-center rounded hover:bg-orange-50 hover:cursor-pointer'>
              <AiOutlineUser size={18} />
              <p className='capitalize ml-1 font-semibold'>Mouhammed</p>  
            </NavLink>
            <button onClick={handleLogOut} className="text-2xl mt-2" >
             <BiLogOut color='#333333'/>
            </button>
        </div>

    </div>
   
  )
}

export default Sidebar;