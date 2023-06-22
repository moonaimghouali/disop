import React, {useEffect, useState} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const ProdMenu = ({menuProd, setMenuProd}) => {
    const periodiciteData = [ { periodicite:'Journalier', id:0},  { periodicite:'Mensuel', id:1}]
    const periodiciteFields = {text : "periodicite" , value :"id" }


    useEffect(()=>{

    })

    const handlePeriodicteChange = (e) =>{
        switch (e.value) {
            case 0:
                setMenuProd( prev => ({ journalier : true , date : new Date(new Date()- 86400000)}))
                break;

            case 1:
                setMenuProd( prev => ({ journalier : false , date : new Date( new Date().getFullYear(), new Date().getMonth() -1 )}))
                break;

            default:
                break;
        }
    }

    const handleDateChange = (e) =>{
        setMenuProd( prev => ({ journalier : true , date : e.value})) 
    }

    const handleMonthChange = (e) =>{
        setMenuProd( prev => ({ journalier : false , date : e.value})) 
    }

    
  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        {/* Choix de periodicite */}
        {/* <div className='w-fit mr-4'>
            <DropDownListComponent  value={0} change={handlePeriodicteChange} id="periodicite" fields={periodiciteFields} dataSource={periodiciteData} placeholder={"Periodicite"} ></DropDownListComponent>
        </div> */}
        
        {/* Date Journaliere */}
        { menuProd.journalier && (
        <div className='w-fit mr-4'> <DatePickerComponent value={menuProd.date}  format="dd-MMM-yyyy"  change={handleDateChange}></DatePickerComponent> </div>
        ) }

        {/* Date Mensuelle */}
        { !menuProd.journalier && (
        <div className='w-fit mr-4'> 
        <DatePickerComponent change={handleMonthChange} value={menuProd.date} format="MMM-yyyy" start="Year" depth='Year'></DatePickerComponent> </div>
        ) }
    </div>
  )
}

export default ProdMenu