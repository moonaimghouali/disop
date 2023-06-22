import React, { useEffect, useState } from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { IoMdAddCircleOutline} from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { updateMenuMouvements, initializerMenuMouvement } from '../../../store/slices/menusSlice'
import * as api from '../../../api/uniteApi'
import { roles } from "./../../../store/types/roles";

const MenuMouvements = ({type, MouvementsMenu, setMouvementsMenu}) => {
  
  const {loading, uniteBacs, error} = useSelector(state => state.bacs)
  // const uniteBacs = []
  const UniteId = useSelector((state) => state.system.id)

  const role = useSelector((state) => state.user.userInfo.role)
  

  // operations data
  let operationsData = [{id:"All" , operation: "Tous"}, {id:"StockFinal" , operation: "Stock Final"}, 
  {id:"Expedition" , operation: "Expedition"}, {id:"Purge" , operation: "Purge"}]

  if(!type){operationsData = operationsData.filter(operation => operation.id !== "All")}
  let operationsFields = { text: 'operation', value: 'id' };

  // bac data
  let [bacsData, setBacsData] = useState([])
  if(!type){bacsData = bacsData.filter(bac => bac.id !== -1)}
  let bacsFields = { text: 'bac', value: 'id' };

  const dispatch = useDispatch()

  const handleClick = () =>{
    // dispatch(initializerMenuMouvement({operation : "NAN" , bac : "kska" }))
  }

  useEffect(()=>{
    try {
      dispatch(api.fetchBacs(UniteId))
    } catch (error) {
      console.log(error);
    }
    
    let bacs = []
  
    uniteBacs.map((bacItem) => {
      let bac = { bac : bacItem.code_bacs, id : bacItem.id }
      bacs.push(bac) 
    })

    if(type) {
      bacs.unshift({id : -1, bac : "Tous"})
    }
    setBacsData(bacs)
  },[])

  return (
    <div className='flex flex-row gap-4 items-center px-2 py-2 w-full h-14 bg-white rounded-sm shadow-sm'>
        {/* Bacs Selector */}
        <div className=''>
        <DropDownListComponent 
        id="Bacs"
        fields={bacsFields}
        value={-1}
        dataSource={bacsData} 
        placeholder={"Choisir un bac"}
        change={(e) => setMouvementsMenu(prev=>({operation: prev.operation, bac : e.value  }))}/>
        
        </div>
    
        {/* Type de mouvement Selector */}
        <div className=''>
        <DropDownListComponent 
        id="Operations"
        fields={operationsFields}
        value={"All"}
        dataSource={operationsData} 
        placeholder={"type de mouvement"}
        change={(e) => setMouvementsMenu(prev=>({operation: e.value, bac : prev.bac  }))}/>
        </div>


        {(type && (role === roles.Unite)) && (
        <>
            <div  onClick={handleClick} className='flex-1'></div>
            <NavLink  className='px-2 py-1 text-white font-semibold bg-blue-600 rounded shadow hover:bg-blue-700 hover:shadow-md flex flex-row items-center'
            to= "/p/unite/mouvement">
            <IoMdAddCircleOutline size={18} className="mr-1" color='#fff'/>Nouveau Mouvement
            </NavLink>
        </>
        )}
        
        
    </div>
  )

}

export default MenuMouvements