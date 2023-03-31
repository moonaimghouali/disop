import React from 'react'
import BacDetail from './BacDetail'
import {useSelector } from 'react-redux'
import {roles } from '../../../store/types/roles'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { GrAddCircle } from 'react-icons/gr'

const BacsGroup = ({onSpec, bacs}) => {
  var style = "-rotate-90 whitespace-nowrap text-xl font-semibold";
  var style2 = onSpec? (style+= " text-green-600") : (style+= " text-red-600")

  const user = useSelector((state) => state.user)
  const isRespUnite = (user.userInfo.role === roles.RespUnite)
  
  const handleClick = () =>{

  }

  return (
    <div className='h-full w-full flex flex-cols '>
          <div className='h-full w-16 bg-white shadow-sm border-r-1 border-gray-200 flex justify-center items-center mr-4'>
            <span className={style2}>Bacs {onSpec ? ("On") : ("Off")}-Spec </span>
          </div>

            {/* bacs de stockage */}
          <div className='flex flex-row flex-wrap h-full w-full gap-4 py-2 overflow-y-auto whitespace-nowrap '>
            {bacs.map((bac) => (
                <BacDetail  codeBacs={bac.codeBacs} categorie_bac={"flottant"} capacite_stockage={bac.capacitestockage} stockage_actuel={bac.stockageActuel}/>
            ))}
            {/* Ajouter un bac */}
            
          </div>
        </div>
  )
}

export default BacsGroup