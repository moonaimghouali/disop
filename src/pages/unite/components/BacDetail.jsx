import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiGrid} from 'react-icons/fi'

const BacDetail = () => {
  return (
   
    <div className='h-full w-1/4 bg-white flex flex-col shadow-sm rounded '>
        {/* info section */}
        <div className='w-full h-3/5 px-2 pt-2'> 
         <div className='w-full flex flex-row items-center pl-1'>
            <div className='font-semibold text-base flex-1'>RA-310</div>
            <TooltipComponent position="TopCenter" content="Table de baremage">
              <button className='p-1 text-green-800 rounded hover:bg-green-100 hover:shadow'> <FiGrid size={18}/></button>
            </TooltipComponent>
         </div>
         
        </div>

        {/* stock section */}
        <div className='w-full h-2/5 border-t-1 border-gray-200 flex-row-reverse relative'>
            <TooltipComponent position="TopCenter" content="2500019 (80%)">
            <div className='oil w-full h-10 bottom-0 absolute'></div>
            </TooltipComponent>         
        </div>
    </div>
           
  )
}

export default BacDetail