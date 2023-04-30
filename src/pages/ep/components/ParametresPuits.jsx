import React,{ useState, useEffect } from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {FormPuits} from '../components'

const ParametresPuits = ({puits}) => {
  const [date, setDate] = useState(new Date(new Date() - 24*60*60*1000))

  const handleDateChange = (e) =>{
    setDate(e.value)
  }

  useEffect(()=>{
    console.log(puits, date)

  },[date])


  return (
    <div className='h-full w-full flex flex-col '>
      <div className='w-fit mr-4 pl-2 pt-2'>
        <DatePickerComponent  value={date} format="dd-MMM-yyyy"  change={handleDateChange} placeholder='Choisir la journee'></DatePickerComponent> 
      </div>
          {/* Divider */}
          <div className='h-px w-full my-2 bg-gray-300'></div>

          {/* Oil well input */}
          {(Object.keys(puits).length !== 0) && (
            <div className='h-full w-full flex flex-col p-2'>
              <div className='font-semibold text-xl '>Parametres Production du puits "{puits.code_puits}"</div>
              <FormPuits puits={puits} date={date}/>
            </div>
          )}
    </div>
  )
}

export default ParametresPuits