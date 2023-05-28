import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation, ChartRealisation, ChartRealisationCumul, ChartContribution } from '../charts'



const RegM = ({dbMenu, setError, region}) => {

  
  
  const [toggle, SetToggle] = useState(false)
  const [realisationsData, setRealisationsData] = useState([])
  const [realisationsCumulData, setRealisationsCumulData] = useState([])
  const [perimetres, setPerimetres] = useState([])

  useEffect(()=>{
    const fn = async() =>{

      let year = new Date(dbMenu.date).getFullYear()
      let month = new Date(dbMenu.date).getMonth()
      console.log("monthly date", month, year);
      
      let res =  await api.fetchRegionMonthlyData(year, month+1, dbMenu.entite)

      console.log("res", res);
      if (!res.success  || res.realisations.length === 0 || res.realisationsCumulees.length === 0 || res.perimetres.length === 0 ) {
        setError(true)
        return
      }
      setPerimetres(res.perimetres)
      setRealisationsData(res.realisations)
      setRealisationsCumulData(res.realisationsCumulees)
      
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])

  return (
     <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation dbMenu={dbMenu} data={data}/> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        <ChartContribution data={perimetres} type ={"Perimetres"}/>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <PerimetresEffeciency /> */}
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