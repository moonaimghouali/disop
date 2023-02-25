import React from 'react'

const KpiItem = ({title, value }) => {

  return (
    
    <div className='flex flex-col items-center bg-white p-1 rounded shadow-sm hover:shadow '>
        <div className='font-black h-1/2 align-middle text-center text-5xl mt-2 text-green-500'>2.3M</div>
        <div className='font-semibold text-base  text-gray-800 mt-2 py-1'>Production Mensuel</div>
    </div>
  )
}

export default KpiItem