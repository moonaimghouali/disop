import React, {useEffect} from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiGrid} from 'react-icons/fi'
import { NavLink, Link } from 'react-router-dom'

const BacDetail = ({key, codeBacs, categorie_bac, capacite_stockage, stockage_actuel}) => {

  const   tankFillPercentage = stockage_actuel / capacite_stockage
  const percent = (tankFillPercentage * 100 ).toFixed(2)

  // const oilLevelSetter = ()=>{
  //   if(capacite_stockage === 0)
  //   return

  //   let oilContainer = document.getElementById("oil-container")
  //   let oil = document.getElementById("oil")
  //   let parentHeight = oilContainer.style.height
  //   alert(parentHeight)
  //   //oil.style.height = parentHeight * tankFillPercentage  
  // }

  // //oilLevelSetter()
  return ( 
    <div className='h-full w-1/4 bg-white flex flex-col shadow-sm rounded'>
        {/* info section */}
        <div className='w-full h-3/5 px-2 pt-2'> 
         <div className='w-full h flex flex-row items-center pl-1'>
            <div className='font-semibold text-base flex-1'>{codeBacs}</div>
            <TooltipComponent position="TopCenter" content="Table de baremage">
              <div className='p-1 text-green-800 rounded hover:bg-green-100 hover:shadow'>
              <Link to="/p/unite/bacs/baremage" > <FiGrid size={18}/></Link>
              </div>
            </TooltipComponent>
         </div>
         <div className='mt-1 w-fit text-blue-700 px-2 py-1 rounded bg-blue-100 '>{categorie_bac}</div>
         <div className='mt-2 text-gray-700'>Capacite Stockage : <span className='font-semibold text-black'>{capacite_stockage} m3</span></div>
         <div className='mt-1 text-gray-700'>Stockage Actuel : <span className='font-semibold text-black'>{stockage_actuel} m3</span></div>
        </div>

        {/* stock section */}
        <div id="oil-container" className='w-full h-2/5 border-t-1 border-gray-200 flex-row-reverse relative'>
            <TooltipComponent position="TopCenter" content={`${stockage_actuel} m3 (${percent} %)`}>
            <div id="oil" className='oil w-full bottom-0 absolute ease-in-out duration-150'></div>
            </TooltipComponent>         
        </div>
    </div>
           
  )
}

export default BacDetail