import React from 'react'
import InputField from '../../../components/InputField'
import { useSelector } from 'react-redux'

const MouvementMesuresForm = ({MouvementsMenu, setMouvementsMenu}) => {
  // let menuMouvements = useSelector((state) => state.menus.menuMouvementsValue)
  let hide = (MouvementsMenu.operation ==="StockFinal")? true : false; 

  return (
    <div className='bg-white w-full h-fit px-3 py-4 rounded-sm shadow-sm grid grid-cols-3 gap-4 gap-x-7'>
      <div></div>
      <div className='text-base font-semibold text-center'>Mesures Initiales</div>
      <div className='text-base font-semibold text-center mb-2'>Mesures Finales</div> 
      
      {/* Cote */}
      <div className='text-sm font-medium text-end align-middle'>Cote (mm)</div> 
      <InputField label="" required={true} type="number" id="initiale_cote" name="initiale_cote" placeholder="Inserer la cote du bac"  isDisabled={hide} min={0}/>
      <InputField label="" required={true} type="number" id="finale_cote" name="finale_cote" placeholder="Inserer la cote du bac" min={0}  />
      
      {/* Temperature */}
      <div className='text-sm font-medium text-end align-middle'>Temperature (C)</div> 
      <InputField label="" required={true} type="number" id="initiale_temperature" name="initiale_temperature" placeholder="Inserer la cote du bac" isDisabled={hide} min={0} step=".01"/>
      <InputField label="" required={true} type="number" id="finale_temperature" name="finale_temperature" placeholder="Inserer la cote du bac" min={0} step=".01" />
      
      {/* Densite */}
      <div className='text-sm font-medium text-end align-middle'>Densite (15 C)</div> 
      <InputField label="" required={true} type="number" id="initiale_densite" name="initiale_densite" placeholder="Inserer la densite du bac" isDisabled={hide} min={0.500} step=".001"/>
      <InputField label="" required={true} type="number" id="finale_densite" name="finale_densite" placeholder="Inserer la densite du bac" min={0.500} step=".001"/>
          
    </div>
  )
}

export default MouvementMesuresForm