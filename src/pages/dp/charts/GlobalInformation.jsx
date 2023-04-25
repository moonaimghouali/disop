import React, { useState, useEffect } from 'react'

const GlobalInformation = ({data}) => {
    const [dpData, SetDpData] = useState([])

    useEffect(()=>{

    let arr=[0,0,0,0,0,0]
    data.map((reg)=>{
        arr[0] += reg.production
        arr[1] += reg.prev_journaliere
        arr[2] += reg.stock
        arr[3] += reg.expedition
        arr[4] += reg.real_production
        arr[5] += reg.real_expedition
    })
    SetDpData(arr)
    console.log("arra", arr);
    },[])
  return (
    <div className='w-full h-full flex flex-col p-2'>
        {/* Entite */}
        <div className='text-lg font-semibold'>{"Division Production"}</div>
        <div className='text-base font-semibold text-gray-400'>{"12-10-2024"}</div>

        <div className='h-full w-full grid grid-rows-2 grid-cols-3 gap-2 mt-3'>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-base font-semibold text-gray-700'>{dpData[0]} </div>
                <div className='text-base font-semibold text-gray-700'>Production </div>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-base font-semibold text-gray-700'>{dpData[0] - dpData[1]} </div>
                <div className='text-base font-semibold text-gray-700'>Ecart </div>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-base font-semibold text-gray-700'>{dpData[1]} </div>
                <div className='text-base font-semibold text-gray-700'>Prevision </div>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='text-base font-semibold text-gray-700'>{dpData[4]} </div>
                <div className='text-base font-semibold text-gray-700'>Realisation </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='text-base font-semibold text-gray-700'>{dpData[3]} </div>
                <div className='text-base font-semibold text-gray-700'>Expedition </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default GlobalInformation