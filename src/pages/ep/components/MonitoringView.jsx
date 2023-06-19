import React,{useState, useEffect} from 'react'
import {GLChart, PuitsChart, WaterChart } from '../charts'

const MonitoringView = ({puits, setToggle}) => {

    useEffect(()=>{
      if (puits.statut_puits === false) setToggle(true)
    }, [puits])

  return (
    <div className='w-full h-full grid grid-cols-2 mt-2 '>
       {puits.statut_puits? 
       ( 
        <>
        {/* <PuitsChart data ={[]}/> */}
        {/* {(puits?.type_puits === "PPHGL" || puits?.type_puits === "PPHSGL") && (<GLChart data={[]}/>)} */}
        </>
       ) : 
       (
        <div className='mt-8 ml-8 font-semibold text-2xl text-red-600'> Ce puits est fermee</div>
       )
       }
    </div>
  )
}

export default MonitoringView