import React, { useState, useEffect } from 'react'
import {PageHeader, NoData} from '../../components'
import { RegJ, RegM, ControlMenu } from './components'
import * as api from '../../api/dpApi'

const RegionDashboard = () => {

  const [dbMenu, setDbMenu] = useState({ journalier : true , date : new Date(new Date()- 86400000) }) 
  const [error, setError] = useState(false)
  
  
  useEffect(()=>{

    if(dbMenu.date >= new Date()) {
      setError(true) 
      return
    }else { 
      setError(false) 
    }
  
},[ dbMenu.journalier, dbMenu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 pb-8 pt-4">
      {/* <PageHeader pageName="Dashboard Production Global" /> */}
      <ControlMenu setDbMenu={setDbMenu} dbMenu={dbMenu}/>
      
      <div className=' grid grid-rows-6 grid-cols-12 gap-3 w-full h-full rounded' >
      
        { error ? 
        (<div className='col-span-12 row-span-6'><NoData/></div>) : 
        (<>
        {(dbMenu.entite !==-1 && dbMenu.journalier) && (<RegJ dbMenu={dbMenu}  setError={setError} region={true}/>)}
        {(dbMenu.entite !==-1 && !dbMenu.journalier) && (<RegM dbMenu={dbMenu} setError={setError} region={true}/>)}
        </>)
        }
        
      </div>
    </div>
  )
}

export default RegionDashboard