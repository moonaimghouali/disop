import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation, ChartRealisation, ChartRealisationCumul } from '../charts'


const DpM = ({dbMenu, setError}) => {

  const [realisationData, setRealisationData] = useState([])

  useEffect(()=>{
    const fn = async() =>{
      let res = await api.fetchDpMonthlyData(new Date(dbMenu.date).toISOString().split("T")[0])
      if (!res.success  || res.realisation.length === 0) {
        setError(true)
        return
      }

      setRealisationData(res.realisation)
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])
  
  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation /> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <ContributionChart data={data}/>  */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <Kpi />  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <ChartRealisation data={realisationData}/> 
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <ChartRealisationCumul />
      </div>
    </>
  )
}

export default DpM