import React, { useEffect }  from 'react'
import {PageHeader} from '../../components'
import {MenuDate , UniteProductionData, UniteBilan} from './components'
import {useSelector, useDispatch} from 'react-redux'
import { updateMenuDate } from '../../store/slices/menusSlice'
import * as api from '../../api/xpApi'


const XpUnites = () => {
  let menuDate = useSelector((state)=> state.menus.menuDate)
  let RegionId = useSelector((state) => state.system.id)
  let {loading, production, error } = useSelector(state => state.production.regionUnitesProduction)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateMenuDate({date : new Date(new Date() - 86400000)})) 
    let journee_production = new Date(menuDate.date).toISOString().split("T")[0]
    dispatch(api.fetchRegionUnitesProduction({RegionId , journee_production}))

    console.log("effect1",journee_production,production);
  },[])

  useEffect(()=>{
    let journee_production = new Date(menuDate.date).toISOString().split("T")[0]
    dispatch(api.fetchRegionUnitesProduction({RegionId , journee_production}))

    console.log("effect2",journee_production, new Date(menuDate.date) ,production);
  },[menuDate.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des " pageName="Unites"/>

      <div className='mt-4 w-full h-full flex flex-col gap-4'>
        <MenuDate />

        <div className='grid grid-cols-12 gap-4 w-full h-full'>
          <UniteProductionData productionData= {production}/>
          <UniteBilan />
        </div>
      </div>

    </div>
  )
}

export default XpUnites