import React,{useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { useSelector, useDispatch } from 'react-redux'
import * as api from '../../../api/epApi'

const MonitoringMenu = ({menu, setMenu, setPuits}) => {

    const dispatch = useDispatch()
    let RegionId = useSelector((state)=> state.system.id)

    const [perimetreData, setPerimetreData] = useState([]) 
    const perimetreFields = {text : "perimetre" , value :"id" }
    
    const [puitsData, setPuitsData] = useState([])

    const {loading, perimetrePuits, error} = useSelector(state => state.puits)
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
            
            setMenu(prev =>({perimetre : perims[0].id, puits : prev.puits }))
        }
        fn()
    },[])

    const handlePerimetreChange = async (e) =>{
        dispatch(api.fetchPuits(e.value))
        if(perimetrePuits.length >0) setPuitsData(perimetrePuits)
        else return

        console.log("puits", perimetrePuits[0].id);
        setMenu( prev => ({perimetre : e.value, puits : perimetrePuits[0].id}))
        setPuits(perimetrePuits[0])
    }

    const handlePuitsChange = (e) =>{
        setMenu( prev => ({perimetre : prev.perimetre, puits : e.value}))
        let puits = puitsData.filter((p)=> p.id === e.value)
        setPuits(puits[0])
    }
  
    return (
    <div className='w-full p-2 flex flex-row bg-white shadow-sm my-4'>

        <div className='w-fit mr-4'>
            <DropDownListComponent   change={handlePerimetreChange} id="perimetres" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetres"} value={menu.perimetre}></DropDownListComponent>
        </div>

        {/*  Journee*/}
        <div className='w-fit mr-4'> 
            <DropDownListComponent   change={handlePuitsChange} id="puits" fields={puitsFields} dataSource={puitsData}  placeholder={"Puits"} value={menu.puits}></DropDownListComponent>

        </div>
    </div>
  )
}

export default MonitoringMenu