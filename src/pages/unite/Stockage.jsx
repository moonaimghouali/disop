import React ,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {IoMdAddCircleOutline} from 'react-icons/io'
import DotLoader from "react-spinners/DotLoader";
import PageHeader from '../../components/PageHeader'
import BacsGroup from './components/BacsGroup'
import { useDispatch, useSelector } from 'react-redux'
import {roles } from '../../store/types/roles'
import * as api from '../../api/uniteApi'

const Stockage = () => {
  
  const {loading, uniteBacs, error} = useSelector(state => state.bacs)
  const onspecBacs = uniteBacs.filter(bac => bac.type_bacs === "OnSpecs")
  const offspecBacs = uniteBacs.filter(bac => bac.type_bacs !== "OnSpecs")
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const isRespUnite = (user.userInfo.role === roles.RespUnite)
  console.log(uniteBacs)

  useEffect(()=>{
    dispatch(api.fetchBacs())
  },[])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8 ">
      <div className='flex flex-row items-center'>
      <div className="flex-1"><PageHeader subTitle="Consulter le" pageName="Stockage"/></div>
      {isRespUnite && (<NavLink  className='px-2 py-1 h-10 text-white font-semibold bg-blue-600 rounded shadow hover:bg-blue-700 hover:shadow-md flex flex-row items-center'
            to= "/p/unite/bacs/nouveau">
            <IoMdAddCircleOutline size={18} className="mr-1" color='#fff'/>Ajouter un bac
      </NavLink>)}
      </div>
      
      <div className='grid grid-rows-2 gap-2 my-6 h-full w-full'>
    
       
       {/* Onspec bacs */}

        {/* <div className='flex items-center justify-center'>  */}
          <DotLoader color={"#f5821f"} loading={loading} size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        {/* </div> */}

      {!loading && (
        <>
        <BacsGroup onSpec={true} bacs={onspecBacs}/>
        <BacsGroup onSpec={false} bacs={offspecBacs}/> 
        </>
      )}

      </div>
    </div>
  )
}

export default Stockage