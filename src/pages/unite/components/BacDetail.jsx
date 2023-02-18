import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const BacDetail = () => {
  return (
   
    <div className='h-full w-1/4 bg-white flex flex-col shadow-sm rounded '>
        {/* info section */}
        <div className='w-full h-3/5 px-2 pt-2'> info</div>

        {/* stock section */}
        <div className='w-full h-2/5 border-t-1 border-gray-200 flex-row-reverse'>
            <TooltipComponent position="TopCenter" content="2500019 (80%)">
            <div className='bg-yellow-900 w-full h-8 bottom-0'></div>
            </TooltipComponent>         
        </div>
    </div>
           
  )
}

export default BacDetail