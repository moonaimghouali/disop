import React,{useState, useEffect} from 'react'
import {GLChart, PuitsChart, WaterChart } from '../charts'

const MonitoringView = ({puits}) => {

    useEffect(()=>{

    }, [puits])

  return (
    <div className='w-full h-full grid grid-cols-2 mt-2 '>
        <PuitsChart data ={[]}/>
        {/* <GLChart data ={[]}/> */}
        {(puits?.type_puits === "PPHGL" || puits?.type_puits === "PPHsGL") && (<GLChart data={[]}/>)}
    </div>
  )
}

export default MonitoringView