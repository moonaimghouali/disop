import React,{useState, useEffect} from 'react'

const RealTimeData = ({puits}) => {
  return (
    <div className='h-full w-full  mt-4 grid grid-cols-2'>
        <div className='h-full border-r-2 border-gray-200'> Pression</div>
        <div className='h-full'>Injection</div>
    </div>
  )
}

export default RealTimeData