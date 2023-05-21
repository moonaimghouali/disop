import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import * as api from '../../../api/dpApi'


const ControlMenu = ({dbMenu, setDbMenu}) => {
    
    let ddlObj ;

    const periodiciteData = [ { periodicite:'Journalier', id:0},  { periodicite:'Mensuel', id:1}]
    const periodiciteFields = {text : "periodicite" , value :"id" }

    const [entiteData, setEntiteData] = useState([]) 
    const entiteFields = {text : "entite" , value :"id" }

    useEffect(()=>{
        const fn = async() =>{
            let regions = await api.fetchRegions()
            console.log("resigons : ",regions);
            if (regions.length ===0) return

            let entites = []
            regions.map((region)=>{
                let entite = { entite : region.nom_region, id : region.id }
                entites.push(entite)
            })

            entites.unshift({ entite : "Division Production", id : -1 })
            setEntiteData(entites)
        }
        fn()
    },[])


    const handleEntiteChange = (e) =>{
        setDbMenu( prev => ({entite : e.value, journalier : prev.journalier , date : prev.date}))
    }

    const handlePeriodicteChange = async (e) =>{
       
        switch (e.value) {
            case 0:
                setDbMenu( prev => ({entite : prev.entite, journalier : true , date : new Date(new Date()- 86400000)}))
                break;

            case 1:
                setDbMenu( prev => ({entite : prev.entite, journalier : false , date : new Date( new Date().getFullYear(), new Date().getMonth() -1 )}))
                break;

            default:
                break;
        }
    }

    const handleDateChange = (e) =>{
        setDbMenu( prev => ({entite : prev.entite, journalier : true , date : e.value})) 
    }

    const handleMonthChange = (e) =>{
        setDbMenu( prev => ({entite : prev.entite, journalier : false , date : e.value})) 
    }

  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-2 shadow-sm'>
        
        {/* Choix d'entite */}
        <div className='w-fit mr-4'>
            <DropDownListComponent  value={-1} change={handleEntiteChange} id="entite" fields={entiteFields} dataSource={entiteData} placeholder={"Entite"} ></DropDownListComponent>
        </div>

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