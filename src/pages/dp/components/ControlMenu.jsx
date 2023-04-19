import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { updateMenuDateDp } from '../../../store/slices/menusSlice'
import { dateToLastWeek, dateToString } from '../../../utils/Date'

const ControlMenu = () => {
    
    let ddlObj ;

    const data = [ { periodicite:'Journalier', id:0}, { periodicite:'Periodique', id:1}, { periodicite:'Mensuel', id:2}]
    const fields = {text : "periodicite" , value :"id" }

    const menuDateDp = useSelector((state)=>state.menus.menuDateDp)
    const dispatch = useDispatch()

    const [Journalier , setJournalier] =useState(true)
    const [Periodique , setPeriodique] =useState(false)
    const [Mensuel , setMensuel] =useState(false)

    const handlePeriodicteChange = async (e) =>{
        console.log(e.value)
        switch (e.value) {
            case 0:
                dispatch(updateMenuDateDp({start:  new Date(new Date()- 86400000), end : new Date(new Date()- 86400000)}))
                setJournalier(prevJournalier => !prevJournalier)
                setPeriodique(false)
                setMensuel(false)   
                break;
            case 1:
                await dispatch(updateMenuDateDp({start: new Date(new Date()- 8*24*60*60*1000), end : new Date(new Date()- 24*60*60*1000)}))
                setPeriodique(prevPeriodique => !prevPeriodique) 
                setJournalier(false)
                setMensuel(false)     
                break;

            case 2:
                await dispatch(updateMenuDateDp({start: new Date(new Date().getFullYear(), (new Date().getMonth()-1).toString()), end : new Date()}))
                setMensuel(prevMensuel => !prevMensuel) 
                setJournalier(false) 
                setPeriodique(false)            
                break;
            default:
                break;
        }
    }

    const handleDateChange = (e) =>{
        // let start = dateToString(e.value)
        let start = e.value
        let end = e.value
        dispatch(updateMenuDateDp({start : start, end :end}))
    }

    const handlePeriodChange = (e) =>{
        // let start = dateToString(e.value[0])
        // let end = dateToString(e.value[1])
        let start = e.value[0]
        let end = e.value[1]
        dispatch(updateMenuDateDp({start : start, end :end}))
    }

    const handleMonthChange = (e) =>{
        let year = new Date(e.value).getFullYear()
        let month = new Date(e.value).getMonth()

        // let start =  dateToString(new Date(year, month.toString()))
        // let end = dateToString(new Date(year, (month + 1).toString(), 0))
        let start =  (new Date(year, month.toString()))
        let end = (new Date(year, (month + 1).toString(), 0))
        dispatch(updateMenuDateDp({start : start, end :end}))
    }

  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        <div className='w-fit mr-4'>
            <DropDownListComponent  value={0} change={handlePeriodicteChange} id="periodicite" fields={fields} dataSource={data} placeholder={"Periodicite"} ></DropDownListComponent>
        </div>
        
        { Journalier && (
        <div className='w-fit mr-4'> <DatePickerComponent value={menuDateDp.start}  format="dd-MMM-yyyy"  change={handleDateChange}></DatePickerComponent> </div>
        ) }

        { Periodique && (
            <div className='w-fit mr-4'> </div>
            // <DateRangePickerComponent value={[menuDateDp.start, menuDateDp.end]} format="dd-MMM-yyyy" change={handlePeriodChange}></DateRangePickerComponent> </div>
        ) }

        { Mensuel && (
        <div className='w-fit mr-4'> 
        <DatePickerComponent change={handleMonthChange} value={menuDateDp.start} format="MMM-yyyy" start="Year" depth='Year'></DatePickerComponent> </div>

        ) }
        
    
    </div>
   
  )
}

export default ControlMenu