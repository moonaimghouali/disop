import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const ControlMenu = ({dbMenu, setDbMenu}) => {
    const periodiciteData = [ { periodicite:'Journalier', id:0},  { periodicite:'Mensuel', id:1}]
    const periodiciteFields = {text : "periodicite" , value :"id" }

    const handlePeriodicteChange = async (e) =>{
       
        switch (e.value) {
            case 0:
                setDbMenu( prev => ({ journalier : true , date : new Date(new Date()- 86400000)}))
                break;

            case 1:
                setDbMenu( prev => ({ journalier : false , date : new Date( new Date().getFullYear(), new Date().getMonth() -1 )}))
                break;

            default:
                break;
        }
    }

    const handleDateChange = (e) =>{
        setDbMenu( prev => ({ journalier : true , date : e.value})) 
    }

    const handleMonthChange = (e) =>{
        setDbMenu( prev => ({ journalier : false , date : e.value})) 
    }

  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        
        
        {/* Choix de periodicite */}
        <div className='w-fit mr-4'>
            <DropDownListComponent  value={0} change={handlePeriodicteChange} id="periodicite" fields={periodiciteFields} dataSource={periodiciteData} placeholder={"Periodicite"} ></DropDownListComponent>
        </div>
        
        {/* Date Journaliere */}
        { dbMenu.journalier && (
        <div className='w-fit mr-4'> <DatePickerComponent value={dbMenu.date}  format="dd-MMM-yyyy"  change={handleDateChange}></DatePickerComponent> </div>
        ) }

        {/* Date Mensuelle */}
        { !dbMenu.journalier && (
        <div className='w-fit mr-4'> 
        <DatePickerComponent change={handleMonthChange} value={dbMenu.date} format="MMM-yyyy" start="Year" depth='Year'></DatePickerComponent> </div>
        ) }
    </div>
  )
}

export default ControlMenu