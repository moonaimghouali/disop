import React, { useEffect, useState } from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { NavLink, Navigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import * as api from '../../../api/uniteApi'
import { roles } from '../../../store/types/roles'

const MenuAnalyses = ({menu, setMenu}) => {
    const dispatch = useDispatch()
    
    const {loading, uniteBacs, error} = useSelector(state => state.bacs)
    const UniteId = useSelector((state) => state.system.id)

    let role = useSelector((state)=> state.user.userInfo.role)
    let type = false
    if(role === roles.Lab) type = true

    // bac data
    let [bacsData, setBacsData] = useState([])
    let bacsFields = { text: 'bac', value: 'id' };
  
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
        bacs.unshift({id : -1, bac : "Tous"})
          
        setBacsData(bacs)
    },[])

    return (
    <div className='flex flex-row gap-4 items-center px-2 py-2 w-full h-14 bg-white rounded-sm shadow-sm'>
        {/* Bacs Selector */}
        <div className=''>
        <DropDownListComponent 
        id="Bacs"
        placeholder={"Choisir un bac"}
        dataSource={bacsData} 
        fields={bacsFields}
        value={menu.bac}
        change={(e)=>{ setMenu( prev => ({bac :e.value,  date : prev.date}))}}/>
        </div>

        <div className='w-fit mr-4'> 
        <DatePickerComponent value={menu.date}  format="dd-MMM-yyyy"  change={(e)=>{setMenu( prev => ({bac :prev.bac,  date : e.value}))}}></DatePickerComponent> 
        </div>

        {type && (
        <>
            <div   className='flex-1'></div>
            <NavLink  className='px-2 py-1 text-white font-semibold bg-blue-600 rounded shadow hover:bg-blue-700 hover:shadow-md flex flex-row items-center'
            to= "/p/unite/lab/analyses/new">
            <IoMdAddCircleOutline size={18} className="mr-1" color='#fff'/> Nouveau test de laboratoire
            </NavLink>
        </>
        )} 
    </div>
  )
}

export default MenuAnalyses