import React,{useState, useEffect} from 'react'
import { PopupBG } from '../../../components'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import {fetchRegions} from '../../../api/dpApi'

const UniteForm = ({setForm, update}) => {
  const[regions, setRegions] = useState([])
  const regionsFields = {text : "nom_region" , value :"id" }

  const handleAnnulment = (e) => {
    e.preventDefault()
    setForm(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("submitted")
  }

  useEffect(()=>{
    const fn = async()=>{
      let response = await fetchRegions()
      setRegions(response)
    }
    fn()
  },[])

  return (
  <PopupBG setShow={setForm}>
    <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
        
        {/* Title */}
        <div className='text-3xl font-semibold my-3'>{update? "Modifier" : "Ajouter"} une unite</div>
        {/* divider */}
        <div className='h-px w-full bg-gray-300'/>
        
        {/* form */}
        <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Code unite </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="heure_de_marche" name='heure_de_marche' />

            <div className='col-span-2 font-semibold'>Nom unite </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="heure_de_marche" name='heure_de_marche' />

            <div className='col-span-2 font-semibold'>Region </div>    
            <div className='col-span-8 pl-2'><DropDownListComponent dataSource={regions} fields={regionsFields} id="Region" placeholder={"Regions"} ></DropDownListComponent></div>
                    
            

            <div className='col-span-2 font-semibold'>* Coordonnees geographiques</div> 
            <div className='w-full flex flex-row '>
              <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='latitude' type="number"
              required id="heure_de_marche" name='heure_de_marche' />
              <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='longtitude' type="number"
              required id="heure_de_marche" name='heure_de_marche' />
            </div>
            
          </div>

          <div className='flex-1'></div>

          {/* Form Buttons */}
          <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
            <button type='submit' className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>    
            <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
          </div>

        </form>

      </div>
  </PopupBG>
  )
}

export default UniteForm