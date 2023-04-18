import React,{useEffect}  from 'react'
import {PageHeader} from '../../components'
import {MenuDate , RegionProductionData, UniteBilan} from './components'
import {useSelector, useDispatch} from 'react-redux'
import { updateMenuDate } from '../../store/slices/menusSlice'
import * as api from '../../api/xpApi'

const XpProduction = () => {

    let menuDate = useSelector((state)=> state.menus.menuDate)
    let RegionId = useSelector((state) => state.system.id)
    let {loading, production, error } = useSelector(state => state.production.regionProduction)
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(updateMenuDate({date : new Date(new Date() - 86400000)})) 
        let journee_production = new Date(menuDate.date).toISOString().split("T")[0]
        dispatch(api.fetchRegionProduction(RegionId ))
        console.log(production);

    },[])
        
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production" pageName="Regional"/>

      <div className='grid grid-cols-12 mt-8 mb-4 gap-4 w-full h-full '>
        <RegionProductionData productionData={production} />
        <UniteBilan />
      </div>
    </div>
  )
}

export default XpProduction