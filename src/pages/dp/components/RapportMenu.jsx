import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { updateMenuDateDp } from '../../../store/slices/menusSlice'
import { dateToLastWeek, dateToString } from '../../../utils/Date'


const RapportMenu = ({rapport , setRapport}) => {

    let ddlObj ;

    const data = [ { rapport:'Bilan Journalier', id:0}, { rapport:'SPE', id:1}, { rapport:'MEM', id:2}]
    const fields = {text : "rapport" , value :"id" }

    const handleRapportChange = async (e) =>{
        console.log(e.value)
        switch (e.value) {
            case 0:
                setRapport({rapport : 0, date : new Date( new Date() - 86400000) })
                break;
            case 1:
                setRapport({rapport : 1, date : new Date( new Date().getFullYear(), new Date().getMonth() -1 )})
                break;

            case 2:
                setRapport({rapport : 2, date : new Date( new Date().getFullYear(), new Date().getMonth() -1 )})     
                break;
            default:
                break;
        }
    }

    const handleDateChange = (e) => {
        setRapport(prev=> ({rapport : prev.rapport, date : e.value}))

    }

    const handleMonthChange = (e) => {
        setRapport(prev=> ({rapport : prev.rapport, date : e.value}))
        
    }
    

  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        <div className='w-fit mr-4'>
            <DropDownListComponent  value={0} change={handleRapportChange} id="periodicite" fields={fields} dataSource={data} placeholder={"Periodicite"} ></DropDownListComponent>
        </div>
        
        { (rapport.rapport === 0) && (
        <div className='w-fit mr-4'> <DatePickerComponent value={rapport.date} change={handleDateChange} format="dd-MMM-yyyy" ></DatePickerComponent> </div>
        ) }

        { (rapport.rapport === 2 || rapport.rapport === 1) && (
        <div className='w-fit mr-4'> <DatePickerComponent value={rapport.date} change={handleMonthChange}  format="MMM-yyyy" start="Year" depth='Year'></DatePickerComponent> </div>
        ) }

    </div>
  )
}

export default RapportMenu