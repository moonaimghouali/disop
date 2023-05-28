import React, { useState, useEffect } from 'react'

const GlobalInformation = ({data}) => {
    // const [dpData, SetDpData] = useState([])

    // useEffect(()=>{
    // // console.log("prod", data);
    // let arr=[0,0,0,0,0,0]
    // data.map((reg)=>{
    //     arr[0] += reg.production
    //     arr[1] += reg.prev_journaliere
    //     arr[2] += reg.stock
    //     arr[3] += reg.expedition
    //     arr[4] += reg.real_production
    //     arr[5] += reg.real_expedition
    // })
    // SetDpData(arr)
    // // console.log("arra", arr);
    // },[data])

    // const Item = ({name, value, color})=>{
    //     let style = `text-base font-semibold text-${color}-700`
        
    //     return(
    //         <div className='flex flex-col justify-center items-center bg-gray-50 rounded'>
    //             <div className={style}>{value}</div>
    //             <div className='text-base font-medium text-gray-600'>{name}</div>
    //         </div>
    //     )
    // }

  return (
    
        <div className='h-full w-full grid grid-rows-4 p-2 gap-2'>
            
            <div className='h-full w-full flex flex-row items-center row-span-1 rounded p-1 px-4 bg-gray-50'>
                <div className='flex-1 font-semibold'>Stock Initial</div>
                <div className='text-xl font-bold text-black'>{data.stock_initial}</div>
            </div>
            
            <div className='h-full w-full flex flex-row items-center row-span-1 rounded p-1 px-4 bg-gray-50'>
                <div className='flex-1 font-semibold'>Production</div>
                <div className='text-xl font-bold text-orange-600'>{data.production}</div>
            </div>
            
            <div className='h-full w-full flex flex-row items-center row-span-1 rounded p-1 px-4 bg-gray-50'>
                <div className='flex-1 font-semibold'>Expedition</div>
                <div className='text-xl font-bold text-green-600'>{data.expedition}</div>
            </div>
            
            <div className='h-full w-full flex flex-row items-center row-span-1 rounded p-1 px-4 bg-gray-50'>
                <div className='flex-1 font-semibold'>Stock Final</div>
                <div className='text-xl font-bold text-black'>{data.stock_final}</div>
            </div>

        </div>
  )
}

export default GlobalInformation