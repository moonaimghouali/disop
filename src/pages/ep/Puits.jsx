import React,{useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import {useSelector } from 'react-redux'
import {ParametresPuits} from './components'
import * as api from '../../api/epApi'

const Puits = () => {

  const perimetreFields = {text : "perimetre" , value :"id" }
  let RegionId = useSelector((state)=> state.system.id)

  const [perimetreData, setPerimetreData] = useState([])
  const [perimetre, setPerimetre] = useState(-1)  
  const [puitsData, setPuitsData] = useState([])
  const [puits, setPuits] = useState({})

  useEffect(()=>{
    const fn = async() =>{
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

  useEffect(()=>{
    const fn = async() =>{
      let response = await api.fetchPuits(perimetre)
      if(response.length >0) setPuitsData(response)
    }
    fn()
  },[perimetre])


  const handleClick = (p) =>{
     setPuits(p)
  }
  

  

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Parametres des " pageName="Puits"/>

      <div className='h-full w-full grid grid-cols-12 gap-4 w- my-4'>

      {/* Puits */}
      <div className='col-span-3 flex flex-col  bg-white rounded-sm shadow-sm'>
          {/* Perimetre */}
        <div className='w-fit mr-4 pl-2 pt-2'>
            <DropDownListComponent  change={(e)=>setPerimetre(e.value)} id="entite" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetre"} ></DropDownListComponent>
        </div>
          {/* Divider */}
          <div className='h-px w-full my-2 bg-gray-300'></div>

          <div className='h-full w-full flex flex-col gap-1 px-2 overflow-x-scroll'>
            {puitsData.map(p=>(
              <div key={p.id} 
              onClick={() => handleClick(p)} 
              className={(p.id === puits.id)? "w-full h-fit rounded-sm px-2 py-1 bg-orange-100 hover:cursor-pointer hover:bg-orange-200 transition-all ease-in duration-150 " : 'w-full h-fit rounded-sm px-2 py-1 bg-gray-100 hover:cursor-pointer hover:bg-gray-200 transition-all ease-in duration-150'}> 
                <div className='flex flex-row '>
                  <div className='font-semibold flex-1 flex flex-row items-center'>{p.code_puits} <div className='h-1 w-1 rounded-full bg-slate-300 mx-2'></div> </div>
                  {(p.statut_puits) ?  (<div className='text-green-600'>Ouvert</div>): (<div className='text-red-500'>Fermee</div>)}
                </div>
              </div>
            ))}
          </div>

      </div>

        {/* Paramtres Puits */}
        <div className='col-span-9  bg-white rounded-sm shadow-sm'>
          <ParametresPuits puits={puits}/>
        </div>
      </div>
    </div>
  )
}

export default Puits