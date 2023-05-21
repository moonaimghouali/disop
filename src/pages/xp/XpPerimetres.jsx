
import React, {useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import { MenuDate, PerimetreProductionData } from './components'
import {useSelector} from 'react-redux'
import * as api from './../../api/xpApi'

const XpPerimetres = () => {
  let menuDate = useSelector((state)=> state.menus.menuDate)
  let RegionId = useSelector((state) => state.system.id)
  const [ productionData, setProductionData ] = useState([])


  useEffect(()=>{
    const fn = async ()=>{
      let journee = new Date(menuDate.date).toISOString().split("T")[0]
      let response = await api.fetchRegionPerimetresProduction(RegionId, journee)
      console.log(response);
      setProductionData(response)
    }
    fn()
  },[menuDate.date])
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
    <PageHeader subTitle="Production par" pageName="Perimetres"/>

    <div className='mt-4 w-full h-full flex flex-col gap-4'>
      <MenuDate />
      <PerimetreProductionData productionData={productionData}/>

    </div>
  </div> 
  )
}

export default XpPerimetres