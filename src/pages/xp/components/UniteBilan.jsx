import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateBilanUniteRegion} from '../../../store/slices/BilansSlice'
import * as api from '../../../api/xpApi'

const UniteBilan = ({setShowUnite}) => {

  const [error, setError] = useState({error:false , errorMessage:""})
  const {hide, bilanProductionUnite, mouvements} =useSelector(state => state.bilans.bilanUniteRegion)
  const dispatch = useDispatch()

  const handleValidation = async ()=> {
    
    let obj = {UniteId : bilanProductionUnite.id, UniteProductionId :bilanProductionUnite.production.id }
    console.log(obj);
      let response = await api.updateUnitesProductionValidation(obj)     
      dispatch(api.fetchRegionUnitesProduction({RegionId : bilanProductionUnite.RegionId , journee_production : bilanProductionUnite.production.journee_production}))   
      let response2 = await api.postUnitesRealisation(bilanProductionUnite) 
      
      console.log("validation", response , "realisation", response2);
  }

  const handleAnnulment = ()=> {
    dispatch(updateBilanUniteRegion({hide : true , bilanProductionUnite : {}, mouvements : []}))
    setShowUnite(prev => !prev)
  }

  return (
    <div onClick={(e)=> e.stopPropagation()} className='h-full my-8 w-1/2 flex flex-col p-3 items-center bg-white rounded-sm shadow-sm z-50'>
      <div  className='w-full h-5/6  flex flex-col overflow-y-scroll '>
        <div className='mt-3 text-lg font-semibold'>Bilan Production Journaliere</div>
        {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>) }
        <div className='mt-3'>Unite : <b>{bilanProductionUnite.nom_unite}</b></div>
        <div className='mt-1'>Journee production : <b>{bilanProductionUnite.production.journee_production}</b></div>
        
        <table className='mt-3'>
          <tr><th></th> <th>Tonne </th> <th>m3</th> </tr>
          <tr><td className='font-semibold'>Stock Initial</td> <td>{bilanProductionUnite.production.stock_initial_tm}</td> <td>{bilanProductionUnite.production.stock_initial_vm}</td></tr>
          <tr><td className='font-semibold'>Expedition</td>    <td>{bilanProductionUnite.production.expedition_unite_tm}</td>    <td>{bilanProductionUnite.production.expedition_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Eau purgee</td>    <td>{bilanProductionUnite.production.purge_unite_tm}</td>         <td>{bilanProductionUnite.production.purge_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Production</td>    <td>{bilanProductionUnite.production.production_unite_tm}</td>    <td>{bilanProductionUnite.production.production_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Stock Final</td>   <td>{bilanProductionUnite.production.stock_final_tm}</td>   <td>{bilanProductionUnite.production.stock_final_vm}</td></tr>
        </table>

      </div>
      <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
        {!bilanProductionUnite.production.validation_xp && (<button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>)}     
        <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>

      </div>
    </div>
  )
}

export default UniteBilan