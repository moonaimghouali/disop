import React from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { IoMdAddCircleOutline} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const MenuMouvements = ({type}) => {

  return (
    <div className='flex flex-row gap-4 items-center px-2 w-full h-14 bg-white rounded-sm shadow-sm'>
        {/* Bacs Selector */}
        <div className=''>
        <DropDownListComponent dataSource={['Tous', 'RA-301', 'RA-302', 'RA-303', 'RA-304']} placeholder={"Choisir un bac"}/>
        </div>
    
        {/* Type de mouvement Selector */}
        <div className=''>
        <DropDownListComponent dataSource={[ 'Tous', 'Stock Final', 'Expedition', 'Purge']} placeholder={"type de mouvement"}/>
        </div>


        {type && (
        <>
            <div className='flex-1'></div>
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