import React,{useEffect, useState}  from 'react'
import {PageHeader} from '../../components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {useSelector, useDispatch} from 'react-redux'
import * as api from '../../api/xpApi'

const RegionProduction = () => {

  let RegionId = useSelector((state) => state.system.id)
  const [menu, setMenu] = useState({date : new Date()})

  useEffect(()=>{
    const fn = async () =>{

    }
    fn()
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

      {/* Production */}
      <div>

      </div>
        
      </div> 
    </div>
  )
}

export default RegionProduction