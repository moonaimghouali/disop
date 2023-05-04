import React,{useEffect, useState} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useSelector } from 'react-redux'
import * as api from '../../../api/epApi'

const PerimetresMenu = ({perimetresMenu, setPerimetresMenu}) => {

    const [perimetreData, setPerimetreData] = useState([]) 
    let RegionId = useSelector((state)=> state.system.id)
    
    const perimetreFields = {text : "perimetre" , value :"id" }

    useEffect(()=>{
        const fn = async() =>{
            let perimetres = await api.fetchPerimetres(RegionId) 
            
            if (perimetres.length ===0) return

            let perims = []
            perimetres.map((p)=>{
                let perimetre = { perimetre : p.nom_perimetre, id : p.id }
                perims.push(perimetre)
            })
            perims.unshift({ perimetre : "Tous", id : -1 })
            setPerimetreData(perims)
        }
        fn()
    },[])
    
    const handlePerimetreChange = (e) =>{
        setPerimetresMenu( prev => ({perimetre : e.value, date : prev.date}))
    }

    const handleDateChange = (e) =>{
        setPerimetresMenu( prev => ({perimetre : prev.perimetre , date : e.value}))
    }
  
  return (
    <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-4 shadow-sm'>
        
        {/* Perimetre */}
        <div className='w-fit mr-4'>
            <DropDownListComponent   change={handlePerimetreChange} id="entite" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetre"} ></DropDownListComponent>
        </div>

        {/*  Journee*/}
        <div className='w-fit mr-4'> 
            <DatePickerComponent  value={perimetresMenu.date} format="dd-MMM-yyyy"  change={handleDateChange} placeholder='Choisir la journee'></DatePickerComponent> 
        </div>


    </div>
  )
}

export default PerimetresMenu