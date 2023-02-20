import React from 'react'
import InputField from '../../../components/InputField'

const MouvementMesures = () => {
  return (
    <div className='bg-white w-full h-full p-2 rounded-sm shadow-sm flex flex-col'>
        {/* initiales */}
        <div className='h-full w-full bg-red-10 flex flex-col px-2'>
        <div className='text-base font-semibold '>Mesures Initiales</div> 
            <div className='w-full mt-2 '>
            <InputField label="Cote (mm)" required={true} type="number" id="cote" name="cote" placeholder="Inserer la cote du bac" value={129.099} isDisabled={true}/>
            <InputField label="Temperature (C)" required={true} type="number" id="temperature" name="temperature" placeholder="Inserer la cote du bac" />
            <InputField label="Densite (15 C)" required={true} type="number" id="densite" name="densite" placeholder="Inserer la densite du bac" />
        
            </div>
        </div>
        <div className='w-full h-px bg-gray-200 my-3'></div>

        {/* finales */}
        { true  && (
            <div className='h-full w-full bg-red-10 flex flex-col px-2'>
            <div className='text-base font-semibold '>Mesures Finales</div> 
                <div className='w-full mt-1 '>
                <InputField label="Cote (mm)" required={true} type="number" id="cote" name="cote" placeholder="Inserer la cote du bac" value={129.099} isDisabled={true}/>
                <InputField label="Temperature (C)" required={true} type="number" id="temperature" name="temperature" placeholder="Inserer la cote du bac" />
                <InputField label="Densite (15 C)" required={true} type="number" id="densite" name="densite" placeholder="Inserer la densite du bac" />
            
                </div>
            </div>
        )}
        



    </div>
  )
}

export default MouvementMesures