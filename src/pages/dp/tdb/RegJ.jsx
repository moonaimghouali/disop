import React, {useState, useEffect} from 'react'
import {EvolutionProductionRegion, ProductionUniteChart, ProductionPerimetreChart, ChartProduction, ChartEvolution, ChartContribution} from '../charts'
import * as api from '../../../api/dpApi'


const RegJ = ({dbMenu, setError}) => {
  const [toggle, SetToggle] = useState(false)
  const [toggle2, SetToggle2] = useState(false)
  const [perimetresProductionData, setPerimetresProductionData] = useState([])
  const [unitesProductionData, setUnitesProductionData] = useState([])
  const [evolutionData, setEvolutionData] = useState([])


  useEffect(()=>{
    const fn = async() =>{
      let res = await api.fetchRegionDailyData(new Date(dbMenu.date).toISOString().split("T")[0], dbMenu.entite)

      console.log("daily data",res);
      if (!res.success  || res.evolution.length === 0 || (res.perimetres.length === 0 && res.unites.length === 0)) {
        setError(true)
        return
      }
      setPerimetresProductionData(res.perimetres)
      setUnitesProductionData(res.unites)
      setEvolutionData(res.evolution)
      
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])

  return (
     <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation dbMenu={dbMenu} data={data}/> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
      <div className='h-[95%] w-full flex flex-col'>
        <div className='w-full h-full flex flex-row hover:cursor-pointer' onClick={()=>SetToggle2((prev) => !prev)}>
          {!toggle2 && (<ChartContribution data ={unitesProductionData} type={"unites"}/>)}
          {toggle2 && (<ChartContribution data ={perimetresProductionData} type={"perimetres"}/> )}
        </div> 

        <div className='w-full flex flex-row justify-center gap-2  items-center hover:cursor-pointer'>
            {toggle2 && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
            <div className='w-2 h-2 rounded-full bg-gray-600'></div>
            {!toggle2 && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
        </div>
      </div>
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <Kpi />  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <div className='w-full h-fit flex flex-row hover:cursor-pointer' onClick={()=>SetToggle((prev) => !prev)}>
          {!toggle && (<ChartProduction data ={unitesProductionData} type={"unites"}/>)}
          {toggle && (<ChartProduction data ={perimetresProductionData} type={"perimetres"}/> )}
        </div> 

        <div className='w-full flex flex-row justify-center gap-2  items-center hover:cursor-pointer'>
            {toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
            <div className='w-2 h-2 rounded-full bg-gray-600'></div>
            {!toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
        </div>
        
        {/* <ChartProduction data={[]}/>  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <ChartEvolution data={evolutionData}/>
      </div>
    </>
  )
}

export default RegJ