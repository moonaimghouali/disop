import React,{useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { useSelector } from 'react-redux'
import * as api from '../../../api/epApi'

const MonitoringMenu = ({menu, setMenu}) => {

    let RegionId = useSelector((state)=> state.system.id)

    const [perimetreData, setPerimetreData] = useState([]) 
    const perimetreFields = {text : "perimetre" , value :"id" }

    const [puitsData, setPuitsData] = useState([]) 
    const puitsFields = {text : "code_puits" , value :"id" }

    
    
    useEffect(()=>{
        const fn = async () =>{
            let perimetres = await api.fetchPerimetres(RegionId) 
      
            if (perimetres.length ===0) return
      
            let perims = []
            perimetres.map((p)=>{
                let perimetre = { perimetre : p.nom_perimetre, id : p.id }
                perims.push(perimetre)
            })
            setPerimetreData(perims)
        }
        fn()
    },[])

    const handlePerimetreChange = async (e) =>{
        let response = await api.fetchPuits(e.value)
        if(response.length >0) setPuitsData(response)

        setMenu( prev => ({perimetre : e.value, puits : prev.puits}))
    }

    const handlePuitsChange = (e) =>{
        setMenu( prev => ({perimetre : prev.perimetre, puits : e.value}))
    }
  
    return (
    <div className='w-full p-2 flex flex-row bg-white shadow-sm my-4'>

        <div className='w-fit mr-4'>
            <DropDownListComponent   change={handlePerimetreChange} id="perimetres" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetres"} ></DropDownListComponent>
        </div>

        {/*  Journee*/}
        <div className='w-fit mr-4'> 
            <DropDownListComponent   change={handlePuitsChange} id="puits" fields={puitsFields} dataSource={puitsData}  placeholder={"Puits"} ></DropDownListComponent>

        </div>
    </div>
  )
}

export default MonitoringMenu