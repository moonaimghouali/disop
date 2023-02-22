import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'

const ControlMenu = () => {
    
    const [Journalier , setJournalier] =useState(false)
    const [Periodique , setPeriodique] =useState(false)
    const [Mensuel , setMensuel] =useState(false)

    const handlePeriodicteChange = (e) =>{
        switch (e.value) {
            case "Journalier":
                setJournalier(prevJournalier => !prevJournalier)
                setPeriodique(false)
                setMensuel(false)   
                break;
            case "Periodique":
                setPeriodique(prevPeriodique => !prevPeriodique) 
                setJournalier(false)
                setMensuel(false)     
                break;

            case "Mensuel":
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
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm my-4'>
        <div className='w-fit mr-4'>
            <DropDownListComponent change={handlePeriodicteChange} id="periode" dataSource={[ 'Journalier', 'Periodique', 'Mensuel']} placeholder={"Periodicite"} ></DropDownListComponent>
        </div>
        
        { Journalier && (
        <div className='w-fit mr-4'> <DatePickerComponent format="dd-MMM-yyyy" change={handleDateChange}></DatePickerComponent> </div>
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