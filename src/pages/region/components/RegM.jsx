import React,{useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {RealPrevisions, MonthlyStats, ChartRealisation, ChartRealisationCumul, ChartContribution } from '../../dp/charts'
import { useSelector } from 'react-redux'

const RegM = ({dbMenu, setError}) => {

  const [toggle, SetToggle] = useState(false)
  const [realisationsData, setRealisationsData] = useState([])
  const [realisationsCumulData, setRealisationsCumulData] = useState([])
  const [perimetres, setPerimetres] = useState([])
  const [monthlyStats, setMonthlyStats] = useState([])
  const [realPrevisions, setRealPrevisions] = useState([])
  const RegionId = useSelector((state)=>state.system.id)

    useEffect(()=>{
      const fn = async() =>{
        let year = new Date(dbMenu.date).getFullYear()
        let month = new Date(dbMenu.date).getMonth()
        console.log("monthly date", month, year);
        
        let res =  await api.fetchRegionMonthlyData(year, month+1, RegionId)

        console.log("res", res);
        if (!res.success  || res.realisations.length === 0 || res.realisationsCumulees.length === 0 || res.perimetres.length === 0 || res.monthlyStats.length === 0 || res.realPrevisions.length === 0) {
          setError(true)
          return
        }
        setMonthlyStats(res.monthlyStats)
        setRealPrevisions(res.realPrevisions)
        setPerimetres(res.perimetres)
        setRealisationsData(res.realisations)
        setRealisationsCumulData(res.realisationsCumulees)
          
      }
        
      fn()  
    },[dbMenu.date, dbMenu.journalier])

  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        <MonthlyStats data={monthlyStats} />
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <ChartContribution data={perimetres} type ={"Perimetres"}/>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <RealPrevisions data={realPrevisions} type='Perimetres'/>
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <ChartRealisation data={realisationsData}/> 
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '>
        <ChartRealisationCumul data={realisationsCumulData}/>
      </div>
    </>
  )
}

export default RegM