import React, { useState, useEffect } from 'react'
import logo from "../assets/images/logo-primary.png";
import {AiOutlineUser} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import {adminLinks, dpLinks, uniteLinks, respUniteLinks, labLinks,  EPLinks, XPLinks, RespRegionLinks} from '../data/sideBarData'
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../store/slices/userSlice'
import { roles } from '../store/types/roles';
import  SidebarHeader  from './SidebarHeader'

const Sidebar = () => {
  const inActiveStyle = "flex flex-row items-center w-full px-2 py-2 rounded hover:bg-gray-100"
  const activeStyle = "flex flex-row items-center w-full px-2 py-2 font-semibold rounded bg-orange-50 hover:bg-orange-100 text-orange-600"

  const user = useSelector((state)=> state.user);
  const system = useSelector((state)=> state.system);

  const [role , setRole] =useState("")
  const [structure , setStructure] =useState("")
  const [ Links, setLinks] = useState([])
  // var Links = []

  useEffect(()=>{
    if (user.userInfo.role === roles.Admin){
      setRole("Administrateur")
      setStructure("Division Production")
      setLinks(adminLinks)
      // Links = adminLinks;
    } 
    if (user.userInfo.role === roles.Manager){
      setRole(" ")
      setStructure("Division Production")
      setLinks(dpLinks)
      // Links = dpLinks;
    } 
    if (user.userInfo.role === roles.Unite){
      setRole("Bureau Controle")
      setStructure(system.nom)
      setLinks(uniteLinks)
      // Links = uniteLinks;
    } 
    if (user.userInfo.role === roles.RespUnite){
      setRole("Responsable")
      setStructure(system.nom)
      setLinks(respUniteLinks)
      // Links = respUniteLinks;
    } 
    if (user.userInfo.role === roles.Lab ){
      setRole("Laboratoire")
      setStructure(system.nom)
      setLinks(labLinks)
      // Links = labLinks;
    } 
    if (user.userInfo.role === roles.EP){
      setRole("EP")
      setStructure(system.nom)
      setLinks(EPLinks)
      // Links = EPLinks;
    } 
    if (user.userInfo.role === roles.XP){
      setRole("XP")
      setStructure(system.nom)
      setLinks(XPLinks)
      // Links = XPLinks;
    } 
    if (user.userInfo.role === roles.RespRegion){
      setRole("Responsable")
      setStructure(system.nom)
      setLinks(RespRegionLinks)
      // Links = RespRegionLinks;
    } 

  },[])

  const dispatch = useDispatch()
  
  const handleLogOut = () =>{
    dispatch(Logout())
  }
  
  return (
    <div className='relative flex flex-col items-center bg-white h-screen w-44 border-r-1 border-gray-200 px-2 py-5 shadow-sm hover:shadow-md'>
        {/* Header */}
            {/* <div className='flex flex-col items-center'>
                <img className="w-10" src={logo} alt='Sonatrach' />
                <p className='font-meduim'>Sonatrach</p>

                type de la structure
                {(user.userInfo.role !== roles.Manager) && (<p className='font-medium mt-2'>{user.userInfo.role.toUpperCase()}</p>)}
                Nom de la structure
                {(user.userInfo.role === roles.Manager) && (<p className='font-semibold mt-2'>Division Production</p>)}
                {(user.userInfo.role !== roles.Manager) && (<p className='font-semibold mt-1 text-center'>{system.nom}</p>)}
            </div> */}

            <SidebarHeader role={role} structure={structure}/>

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
              <p className='capitalize ml-1 font-semibold'>{user.userInfo.prenom}</p>  
            </NavLink>
            <button onClick={handleLogOut} className="text-2xl mt-2" >
             <BiLogOut color='#333333'/>
            </button>
        </div>

    </div>
   
  )
}

export default Sidebar;