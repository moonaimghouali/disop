import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation, ChartProduction, ChartContribution, ChartEvolution, Stats } from '../charts'
import { formatInfos } from './Utils'
import { formatStats } from './helpful'

const DpJ = ({dbMenu, setError}) => {

  const [stats, setStats] = useState([])
  const [infos, setInfos] = useState([])
  const [productionData, setProductionData] = useState([])
  const [evolutionData, setEvolutionData] = useState([])
 

  useEffect(()=>{
    const fn = async() =>{

      let journee = new Date(dbMenu.date).toISOString().split("T")[0] 

      let res = await api.fetchDpDailyData(journee)

      console.log("daily data",res);
      if (!res.success  || res.evolution.length === 0 || res.production.length === 0 || res.infos.length ===0 || res.stats.length===0) {
        setError(true)
        return
      }
      setStats(formatStats(res.stats))
      // console.log("stats", stats);

      setInfos(res.infos[0])
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
        <Stats data={stats}/>
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