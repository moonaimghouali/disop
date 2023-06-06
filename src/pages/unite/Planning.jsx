import React, { useState } from 'react'
import {PageHeader} from '../../components'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import { planningMvt, planningPrvt } from '../../data/labData'

const Planning = () => {
    
    const [choix, setChoix] = useState(0)
    const source = [{title : "Planning des prelevements" , id : 0}, {title : "Planning des mouvements" , id : 1}]
    const fields = {text : "title", value : "id"}

    return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Planning des" pageName="Prelevements"/>
        
        <div className='flex flex-row my-6 items-center px-2 py-2 w-full h-14 bg-white rounded-sm shadow-sm'>
            {/* Bacs Selector */}
            <div className=''>
                <DropDownListComponent id="Bacs" dataSource={source} fields={fields} value={0} onChange={(e)=>setChoix(e.value)}/>
            </div>
        </div>

      <div className='w-full h-full '>
        {(choix ===0? 
        (
            <ScheduleComponent selectedDate= {new Date()} eventSettings={ { dataSource: planningPrvt }} height='440px'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        ) : 
        (
            <ScheduleComponent selectedDate= {new Date()} eventSettings={ { dataSource: planningMvt }} height='440px'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        ))}
      </div>
    </div>
  )
}

export default Planning