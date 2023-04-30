import React, { useState, useEffect } from 'react'

const GlobalInformation = ({data}) => {
    const [dpData, SetDpData] = useState([])

    useEffect(()=>{
    console.log("prod", data);
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
    <div className='w-full h-full flex flex-col p-2'>
        {/* Entite */}
        <div className='text-lg font-semibold w-full text-center'>{"Division Production"}</div>
        {/* <div className='text-base font-semibold text-gray-400'>{"12-10-2024"}</div> */}

        <div className='h-full w-full grid grid-rows-3 grid-cols-3 gap-1 mt-3'>
            <Item name={"Production"} value={1000} color="orange"/>
            <Item name={"Ecart"} value={1000} color="red"/>
            <Item name={"Prevision"} value={1000} color="blue"/>
            <Item name={"Real Mois"} value={1000} color="teal"/>
            <Item name={"Ecart"} value={1000} color="red"/>
            <Item name={"Prevision"} value={1000} color="blue"/>
            <Item name={"Real Annee"} value={1000} color="violet"/>
            <Item name={"Ecart"} value={1000} color="red"/>
            <Item name={"Prevision"} value={1000} color="blue"/>
        </div>
        
    </div>
  )
}

export default GlobalInformation