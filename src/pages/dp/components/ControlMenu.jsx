import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'

const ControlMenu = () => {
    
    let ddlObj ;

    const data = [ { periodicite:'Journalier', id:0}, { periodicite:'Periodique', id:1}, { periodicite:'Mensuel', id:2}]
    const fields = {text : "periodicite" , value :"id" }

    const [Journalier , setJournalier] =useState(true)
    const [Periodique , setPeriodique] =useState(false)
    const [Mensuel , setMensuel] =useState(false)

    const handlePeriodicteChange = (e) =>{
        console.log(e.value)
        switch (e.value) {
            case 0:
                setJournalier(prevJournalier => !prevJournalier)
                setPeriodique(false)
                setMensuel(false)   
                break;
            case 1:
                setPeriodique(prevPeriodique => !prevPeriodique) 
                setJournalier(false)
                setMensuel(false)     
                break;

            case 2:
                setMensuel(prevMensuel => !prevMensuel) 
                setJournalier(false) 
                setPeriodique(false)            
                break;
            default:
                break;
        }
    }

    const handleDateChange = (e) =>{
        console.log(e.value)
    }

    const handlePeriodChange = (e) =>{
        console.log(e.value)
    }

    const handleMonthChange = (e) =>{
        console.log(e.value)
    }


  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        <div className='w-fit mr-4'>
            <DropDownListComponent  value={0} change={handlePeriodicteChange} id="periodicite" fields={fields} dataSource={data} placeholder={"Periodicite"} ></DropDownListComponent>
        </div>
        
        { Journalier && (
        <div className='w-fit mr-4'> <DatePickerComponent format="dd-MMM-yyyy"  change={handleDateChange}></DatePickerComponent> </div>
        ) }

        { Periodique && (
            <div className='w-fit mr-4'> <DateRangePickerComponent format="dd-MMM-yyyy" change={handlePeriodChange}></DateRangePickerComponent> </div>
        ) }

        { Mensuel && (
        <div className='w-fit mr-4'> 
        <DatePickerComponent change={handleDateChange} format="MMM-yyyy" start="Year" depth='Year'></DatePickerComponent> </div>

        ) }
        
    
    </div>
   
  )
}

export default ControlMenu