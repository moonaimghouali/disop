import React, {useState, useEffect} from 'react'
import {GlobalInformation, ContributionChart, ProductionRegionChart, Kpi, ExpeditionRegionChart, EvolutionProduction } from '../charts'
import * as api from '../../../api/dpApi'

const DpJ = ({dbMenu, setError}) => {
  const [data, setData] = useState([])
  const [evolutionData, setEvolutionData] = useState([])

  useEffect(()=>{
    const fn = async() =>{
      let d1 = await api.fetchDpDailyData(new Date(dbMenu.date).toISOString().split("T")[0])
      let d2 = await api.fetchDpDailyEvolutionData(new Date(dbMenu.date).toISOString().split("T")[0])
      
      if (d1.length ===0 && d2.length === 0) {
        setError(true)
        return
      }
      setData(d1)
      setEvolutionData(d2)
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])

  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        <GlobalInformation dbMenu={dbMenu} data={data}/>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <ContributionChart data={data}/> 
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <Kpi /> 
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <ProductionRegionChart data={data}/> 
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <EvolutionProduction data={evolutionData}/>
      </div>
    </>
  )
}

export default DpJ