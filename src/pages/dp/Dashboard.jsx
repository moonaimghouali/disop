import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'
import {GlobalInformation, ContributionChart, ProductionRegionChart, Kpi, ExpeditionRegionChart, EvolutionProduction } from './charts'
import * as api from '../../api/dpApi'

const Dashboard = () => {
  const [dbMenu, setDbMenu] = useState({entite : -1, journalier : true , date : new Date(new Date()- 86400000) })
  const [productionData, setProductionData] = useState([])
  const [evolutionData, setEvolutionData] = useState([])

  useEffect(()=>{
    
    const fn = async () =>{
      console.log(dbMenu);
      if (dbMenu.entite === -1 && dbMenu.journalier) {
        let response = await api.fetchDpDailyData(new Date(dbMenu.date).toISOString().split("T")[0])
        console.log("res", response);
        setProductionData(response)
        response = await api.fetchDpDailyEvolutionData(new Date(dbMenu.date).toISOString().split("T")[0])
        setEvolutionData(response)
      }
    }

    fn()
    console.log("dashboard",productionData);
  },[dbMenu.entite, dbMenu.journalier, dbMenu.date])


  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Dashboard Production Global" />
      <ControlMenu setDbMenu={setDbMenu} dbMenu={dbMenu}/>
      
      <div className=' grid grid-rows-6 grid-cols-12 gap-2 w-full h-full rounded' >
        
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
          <GlobalInformation dbMenu={dbMenu} data={productionData}/>
        </div>

        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
          <ContributionChart data={productionData}/> 
        </div>

        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
          <Kpi /> 
        </div>

        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
          <ProductionRegionChart data={productionData}/> 
        </div>
        
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
          <EvolutionProduction data={evolutionData}/>
        </div>
      
      </div>

    </div>
  )
}

export default Dashboard