import React from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const MenuDate = () => {

  const handleDateChange = () =>{

  }

  return (
    <div className='w-full flex flex-row items-center p-2 h-fit bg-white rounded-sm mb-2 shadow-sm'>
        <div className='w-fit mr-4'>
        <DatePickerComponent format="dd-MMM-yyyy"  change={handleDateChange}></DatePickerComponent>
        </div>
    </div>
  )
}

export default MenuDate