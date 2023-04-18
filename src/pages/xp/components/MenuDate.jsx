import React from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useDispatch, useSelector} from 'react-redux'
import { updateMenuDate } from '../../../store/slices/menusSlice'

const MenuDate = () => {
  const dispatch = useDispatch()
  let menuDate = useSelector((state)=> state.menus.menuDate)


  const handleDateChange = (e) =>{
    dispatch(updateMenuDate({date : new Date(e.value)}))
  }

  return (
    <div className='w-full flex flex-row items-center p-2 h-fit bg-white rounded-sm mb-2 shadow-sm'>
        <div className='w-fit mr-4'>
          <DatePickerComponent format="dd-MMM-yyyy" placeholder='Choisir une date' value={menuDate.date}  change={handleDateChange}></DatePickerComponent>
        </div>
    </div>
  )
}

export default MenuDate