import React from 'react'
import {PageHeader} from '../../components'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import { planningPrvt } from '../../data/labData'

const LabPlanning = () => {
  
  
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Planning des" pageName="Prelevements"/>

      <div className='w-full h-full mt-8'>
        <ScheduleComponent selectedDate= {new Date()} eventSettings={ { dataSource: planningPrvt }} height='500px'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default LabPlanning