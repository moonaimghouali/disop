import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation, ChartRealisation, ChartRealisationCumul, ChartContribution } from '../charts'


const DpM = ({dbMenu, setError}) => {

  const [realisationsData, setRealisationsData] = useState([])
  const [realisationsCumulData, setRealisationsCumulData] = useState([])

  useEffect(()=>{
    const fn = async() =>{

      let year = new Date(dbMenu.date).getFullYear()
      let res = await api.fetchDpMonthlyData(year)
      console.log("res", res);
      if (!res.success  || res.realisations.length === 0 || res.realisationsCumulees.length === 0  ) {
        setError(true)
        return
      }

      setRealisationsData(res.realisations)
      setRealisationsCumulData(res.realisationsCumulees)
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])
  
  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation /> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <ChartContribution data={[]} type ={"Regions"} /> 
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <Kpi />  */}
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

export default DpM