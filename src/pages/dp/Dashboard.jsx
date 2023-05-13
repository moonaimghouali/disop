import React, { useState, useEffect } from 'react'
import {PageHeader, NoData} from '../../components'
import ControlMenu from './components/ControlMenu'
import {GlobalInformation, ContributionChart, ProductionRegionChart, Kpi, ExpeditionRegionChart, EvolutionProduction } from './charts'
import { DpJ, DpM, RegJ, RegM} from './tdb'
import * as api from '../../api/dpApi'


const Dashboard = () => {
  const [dbMenu, setDbMenu] = useState({entite : -1, journalier : true , date : new Date(new Date()- 86400000) }) 
  const [error, setError] = useState(false) 


  useEffect(()=>{

      if(dbMenu.date >= new Date()) {
        setError(true) 
        return
      }else { setError(false) }
    
  },[dbMenu.entite, dbMenu.journalier, dbMenu.date])


  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Dashboard Production Global" />
      <ControlMenu setDbMenu={setDbMenu} dbMenu={dbMenu}/>
      
      <div className=' grid grid-rows-6 grid-cols-12 gap-2 w-full h-full rounded' >
      
        { error ? 
        (<div className='col-span-12 row-span-6'><NoData/></div>) : 
        (<>
        {(dbMenu.entite ===-1 && dbMenu.journalier) && (<DpJ dbMenu={dbMenu} setError={setError} />)}
        {(dbMenu.entite ===-1 && !dbMenu.journalier) && (<DpM dbMenu={dbMenu}  />)}
        {(dbMenu.entite !==-1 && dbMenu.journalier) && (<RegJ dbMenu={dbMenu}  />)}
        {(dbMenu.entite !==-1 && !dbMenu.journalier) && (<RegM dbMenu={dbMenu} />)}
        </>)
        }
        
      </div>
    </div>
  )
}

export default Dashboard