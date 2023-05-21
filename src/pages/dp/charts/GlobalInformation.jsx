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

    const Item = ({name, value, color})=>{
        let style = `text-base font-semibold text-${color}-700`
        
        return(
            <div className='flex flex-col justify-center items-center bg-gray-50 rounded'>
                <div className={style}>{value}</div>
                <div className='text-base font-medium text-gray-400'>{name}</div>
            </div>
        )
    }

  return (
    
        <div className='h-full w-full grid grid-rows-3 grid-cols-3 p-2 gap-2'>
            {data.map(i=>(
                <Item name={i.name} value={i.value} color={i.color}/>
            ))}
        </div>
        
  )
}

export default GlobalInformation