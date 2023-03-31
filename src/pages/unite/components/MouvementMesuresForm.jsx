import React from 'react'
import InputField from '../../../components/InputField'

const MouvementMesuresForm = () => {
  return (
    <div className='bg-white w-full h-fit px-3 py-4 rounded-sm shadow-sm grid grid-cols-3 gap-4 gap-x-7'>
      <div></div>
      <div className='text-base font-semibold text-center'>Mesures Initiales</div>
      <div className='text-base font-semibold text-center mb-2'>Mesures Finales</div> 
      
      {/* Cote */}
      <div className='text-sm font-medium text-end align-middle'>Cote (mm)</div> 
      <InputField label="" required={true} type="number" id="cote" name="cote" placeholder="Inserer la cote du bac"  isDisabled={false}/>
      <InputField label="" required={true} type="number" id="cote" name="cote" placeholder="Inserer la cote du bac"  isDisabled={false}/>
      
      {/* Temperature */}
      <div className='text-sm font-medium text-end align-middle'>Temperature (C)</div> 
      <InputField label="" required={true} type="number" id="temperature" name="temperature" placeholder="Inserer la cote du bac" />
      <InputField label="" required={true} type="number" id="temperature" name="temperature" placeholder="Inserer la cote du bac" />
      
      {/* Densite */}
      <div className='text-sm font-medium text-end align-middle'>Densite (15 C)</div> 
      <InputField label="" required={true} type="number" id="densite" name="densite" placeholder="Inserer la densite du bac" />
      <InputField label="" required={true} type="number" id="densite" name="densite" placeholder="Inserer la densite du bac" />
          
    </div>
  )
}

export default MouvementMesuresForm