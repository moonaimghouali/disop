import React, { useEffect, useState } from 'react'
import MenuMouvements from './components/MenuMouvements';
import MouvementForm from "../../Forms/MouvementForm";
import MouvementBilan from "./components/MouvementBilan";
import { NavLink } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import {useDispatch} from 'react-redux'
import { updateMenuMouvements } from '../../store/slices/menusSlice'
import {calculCoeffCorrection} from '../../utils/CalculProduction'

const MouvementBac = () => {
  const dispatch = useDispatch() 
  const [MouvementsMenu, setMouvementsMenu] = useState({operation : "NAN", bac: "NAN"})

  // useEffect(() =>{
  //   dispatch(updateMenuMouvements({operation : "NAN" , bac: "NAN"}))
  // }, [])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 pb-8 pt-14">
      {/* Header */}
      <div className='flex flex-row w-full gap-4'>
      <NavLink to="/p/unite/mouvements"> <FiArrowLeft size={38}/> </NavLink>
      <div className='text-3xl font-bold'>Nouveau mouvement de bac</div>   
      </div>

      {/* Menu */}
      {/* <div className='flex flex-col w-full mt-8'>
       <MenuMouvements type={false}/>
      </div> */}

      <div className="flex flex-row h-full w-full my-6 gap-6 ">
        <MouvementForm MouvementsMenu={MouvementsMenu} setMouvementsMenu={setMouvementsMenu}/>
        <MouvementBilan/>
      </div>

    </div>
  )
}

export default MouvementBac