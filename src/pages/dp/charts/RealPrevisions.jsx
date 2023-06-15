import React from 'react'

const RealPrevisions = ({data, type}) => {
  return (
    <div className='h-full w-full flex flex-col p-2 overflow-y-auto'>
      <div className='text-lg font-semibold w-full text-center mb-2'>Realisation des Previsions Par {type}</div>
      
      {data.map((i)=>{
        let real = parseFloat(((i.production / i.prev)*100).toFixed(2)) 
        return(
          <div className='w-full px-2 py-4 bg-gray-100 rounded-sm flex flex-row mb-2 items-center'>
            
            <div className='flex-1 flex flex-row gap-2 items-center'>
              <div className='font-semibold'>{i?.code}</div>
              <div className='h-2 w-2 rounded-full bg-gray-300'/>
              {(real < 96 || real > 104)? 
                (<div className='font-semibold text-red-600 text-xl'>{real} % </div>) : 
                (<div className='font-semibold text-green-600 text-xl'>{real} % </div>)}
            </div>
            
            <div className='text-xs font-semibold text-gray-700'>{i.production} / {i.prev}</div>
          </div>
      )})}

      
    </div>
  )
}

export default RealPrevisions