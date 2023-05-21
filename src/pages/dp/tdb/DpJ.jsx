import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation, ChartProduction, ChartContribution, ChartEvolution } from '../charts'
import { formatInfos } from './Utils'

const DpJ = ({dbMenu, setError}) => {

  const [infos, setInfos] = useState([])
  const [productionData, setProductionData] = useState([])
  const [evolutionData, setEvolutionData] = useState([])

  useEffect(()=>{
    const fn = async() =>{
      let res = await api.fetchDpDailyData(new Date(dbMenu.date).toISOString().split("T")[0])

      console.log("daily data",res);
      if (!res.success  || res.evolution.length === 0 || res.production.length === 0) {
        setError(true)
        return
      }
      setInfos(formatInfos(productionData))
      setProductionData(res.production)
      setEvolutionData(res.evolution)
    }
    
    fn()  
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])

  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        <GlobalInformation dbMenu={dbMenu} data={infos}/>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <ContributionChart data={data}/>  */}
        < ChartContribution data={productionData} type={"Regions"}/>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <Kpi />  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        {/* <ProductionRegionChart data={data}/>  */}
        <ChartProduction data={productionData} type={"Regions"} />

      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        {/* <EvolutionProduction data={evolutionData}/> */}
        < ChartEvolution data={evolutionData}/>
      </div>
    </>
  )
}

export default DpJ