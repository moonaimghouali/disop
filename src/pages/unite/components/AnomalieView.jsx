import React from 'react'
import { PopupBG } from '../../../components'

const AnomalieView = ({setAnomalieShow , Unite_anomalie}) => {
  return (
    <PopupBG setShow={setAnomalieShow}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-3 rounded flex flex-col">
            
        <div className='text-2xl font-bold mt-2'> Fiche Anomalie </div>

        {/* divider */}
        <div className='w-full h-px bg-gray-300 my-6'></div>
        <>
        <div className='text-xl font-semibold'>{Unite_anomalie.titre}</div>
        <div className='text-black mt-1'>{Unite_anomalie.detail}</div>
        
        {/* divider
        <div className='w-full h-px bg-gray-200 mt-2 my-4'></div> */}
        </>  
      </div>
    </PopupBG>
  )
}

export default AnomalieView