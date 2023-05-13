import React,{useEffect, useState}  from 'react'
import {PageHeader} from '../../components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {RegionProductionData} from './components'
import {useSelector, useDispatch} from 'react-redux'
import * as api from '../../api/xpApi'

const XpProduction = () => {

    let RegionId = useSelector((state) => state.system.id)
    const [menu, setMenu] = useState({date : new Date()})
    let {loading, production, error } = useSelector(state => state.production.regionProduction)
    const dispatch = useDispatch()

    useEffect(()=>{
      
      dispatch(api.fetchRegionProduction({RegionId : RegionId, month : menu.date}))
      console.log(production, menu.date);

    },[menu.date])
        
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production" pageName="Regional"/>

      <div className='mt-4 w-full h-full flex flex-col gap-4'>
        <div className='w-full flex flex-row items-center p-2 h-fit bg-white rounded-sm mb-2 shadow-sm'>
          <div className='w-fit mr-4'>
            <DatePickerComponent format="MMM-yyyy" start='Year' depth='Year' placeholder='Choisir une date' value={menu.date}  change={e=> setMenu({date : e.value})}></DatePickerComponent>
          </div>
        </div>

        <RegionProductionData productionData={production} />  
      </div>
      
    </div>
  )
}

export default XpProduction