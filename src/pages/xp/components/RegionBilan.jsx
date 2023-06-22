import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateBilanRegion} from '../../../store/slices/BilansSlice'
import * as api from '../../../api/xpApi'
import { toast } from 'react-toastify'

const RegionBilan = ({setShowRegion}) => {

  const [error, setError] = useState({error:false , errorMessage:""})
  const [success, setSuccess] = useState({success:false , successMessage:""})
  const {hide, bilanProductionRegion, bilansUnites} =useSelector(state => state.bilans.bilanRegion)
  const nom_region = useSelector(state=>state.system.nom)
  const dispatch = useDispatch()


  const handleValidation = async ()=> {
    let body = {...bilanProductionRegion, validation_xp : false}
    let response = await api.postRegionProduction(body)
    let response2 = await api.postRegionRealisation(bilanProductionRegion)

    if (response.data.success && response2.data.success) {
      toast.success("La journee de production est cloturee.")
      // console.log(response, response2);
      // setError({error:false , errorMessage:""})
      // setSuccess({success: true, successMessage:"La journee est validee"})
      // dispatch(updateBilanRegion({hide : true , bilanProductionRegion : {}, bilansUnites : []}))
      
    }else{
      setSuccess({success: false, successMessage:""})
      toast.error(response.data.message)
      // setError({error:true , errorMessage:response.data.message})
    }
  }

  const handleAnnulment = ()=> {
    
    dispatch(updateBilanRegion({hide : true , bilanProductionRegion : {}, bilansUnites : []}))
    setShowRegion(prev => !prev)
  }

  useEffect(()=>{
    setSuccess({success: false, successMessage:""})
    setError({error:false , errorMessage:""})
  },[])



  return (
    
    <div onClick={(e)=> e.stopPropagation()} className='h-full my-8 w-1/2 flex flex-col p-3 items-center bg-white rounded-sm shadow-sm z-50'>
      <div  className='w-full flex-1 flex flex-col overflow-y-scroll '>
        
        <div className='flex flex-col pb-4 border-b border-gray-300'>
          <div className='mt-3 text-lg font-semibold'>Bilan Production Regional Journalier</div>
          {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>) }
          {success.success && (<div className=' text-green-600 text-base font-semibold'>{success.successMessage}</div>) }
          <div className='mt-3'>Region : <b>{nom_region}</b></div>
          <div className='mt-1'>Journee production : <b>{bilanProductionRegion.journee_production}</b></div>
        </div>
        
        
        <table className='mt-3'>
          <tr><th></th> <th>Tonne </th> <th>m3</th> </tr>
          <tr><td className='font-semibold'>Stock Initial</td> <td>{bilanProductionRegion.stock_initial_tm}</td> <td>{bilanProductionRegion.stock_initial_vm}</td></tr>
          <tr><td className='font-semibold'>Expedition</td>    <td>{bilanProductionRegion.expedition_region_tm}</td>    <td>{bilanProductionRegion.expedition_region_vm}</td></tr>
          <tr><td className='font-semibold'>Production</td>    <td>{bilanProductionRegion.production_region_tm}</td>    <td>{bilanProductionRegion.production_region_vm}</td></tr>
          <tr><td className='font-semibold'>Stock Final</td>   <td>{bilanProductionRegion.stock_final_tm}</td>   <td>{bilanProductionRegion.stock_final_vm}</td></tr>
        </table>

        {/* Production des Unites */}
        {(bilansUnites.length > 0) && ( <div className='mt-8 mb-1 text-lg font-semibold'>Production des Unites</div>)}
        {bilansUnites.map((unite) => (
          <div className='flex flex-col w-full'>
            <div className='mt-6 mb-1 font-semibold bg-orange-100 p-2 texto rounded-sm w-fit'>Unite "{unite.code_unite}"</div>
            
            <table >
            <tr><th></th> <th>Tonne </th> <th>m3</th> </tr>
            <tr><td className='font-semibold'>Stock Initial</td> <td>{unite.production.stock_initial_tm}</td>       <td>{unite.production.stock_initial_vm}</td></tr>
            <tr><td className='font-semibold'>Expedition</td>    <td>{unite.production.expedition_unite_tm}</td>    <td>{unite.production.expedition_unite_vm}</td></tr>
            <tr><td className='font-semibold'>Eau purgee</td>    <td>{unite.production.purge_unite_tm}</td>         <td>{unite.production.purge_unite_vm}</td></tr>
            <tr><td className='font-semibold'>Production</td>    <td>{unite.production.production_unite_tm}</td>    <td>{unite.production.production_unite_vm}</td></tr>
            <tr><td className='font-semibold'>Stock Final</td>   <td>{unite.production.stock_final_tm}</td>         <td>{unite.production.stock_final_vm}</td></tr>
            </table>
            </div>
            
          ))}

      </div>
      <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
        <button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>
        <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
      </div>
    </div>
  )
}

export default RegionBilan