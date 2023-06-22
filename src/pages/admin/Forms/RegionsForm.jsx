import React, { useState } from 'react'
import { PopupBG } from '../../../components'
import * as api from '../../../api/adminApi'
import { toast } from 'react-toastify'

const RegionsForm = ({setForm, update, data}) => {

  const [code, setCode] = useState(data?.code_region)
  const [nom, setNom] = useState(data?.nom_region)
  const [coordonnees, setCoordinates] = useState(data?.coordonnees)

  const handleAnnulment = (e) => {
    e.preventDefault()
    setForm(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let body = { 
      code_region : e.target.code_region.value,
      nom_region : e.target.nom_region.value,
      coordonnees : e.target.coordonnees.value,
    }
   
    let res = await api.addRegion(body)
    if (res.data.success) {
      toast.success("La region est ajoutee.")
      setForm(false)
    }else{
      toast.error("L'ajout d'une region n'a pas reussi, veuillez réessayer ultérieurement.")
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    setForm(false)
  }
  
  return (
    <PopupBG setShow={setForm}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
        
        {/* Title */}
        <div className='text-3xl font-semibold my-3'>{update? "Modifier" : "Ajouter"} une region</div>
        {/* divider */}
        <div className='h-px w-full bg-gray-300'/>
        
        {/* form add */}
        {!update && (
          <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Code region </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="code_region" name='code_region' />

            <div className='col-span-2 font-semibold'>Nom region </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="nom_region" name='nom_region' />

            <div className='col-span-2 font-semibold'>* Coordonnees geographiques</div>            
            <textarea className="col-span-8 border-1 border-gray-400  pl-2 ml-2 "
            name="coordonnees" id="coordonnees" cols="30" rows="8" placeholder='lat1,long1;lat2,long2;lati,longi;'></textarea>
            
          </div>

          <div className='flex-1'></div>

          {/* Form Buttons */}
          <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
            <button type='submit' className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>    
            <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
          </div>

        </form>
        )}


        {/* form add */}
        {update && (
          <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleUpdate}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Code region </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text" value={code} onChange={(e)=>setCode(e.value)}
            required id="code_region" name='code_region' />

            <div className='col-span-2 font-semibold'>Nom region </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="nom_region" name='nom_region' value={nom} onChange={(e)=>setNom(e.value)} />

            <div className='col-span-2 font-semibold'>* Coordonnees geographiques</div>            
            <textarea className="col-span-8 border-1 border-gray-400  pl-2 ml-2 "
            name="coordonnees" id="coordonnees" cols="30" rows="8" placeholder='lat1,long1;lat2,long2;lati,longi;' 
            value={coordonnees} onChange={(e)=>setCoordinates(e.value)} ></textarea>
            
          </div>

          <div className='flex-1'></div>

          {/* Form Buttons */}
          <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
            <button type='submit' className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>    
            <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
          </div>

        </form>
        )}
        
      </div>
    </PopupBG>
  )
}

export default RegionsForm