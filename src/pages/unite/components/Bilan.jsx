import React, { useEffect,useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBilanUnite }from '../../../store/slices/BilansSlice'
import * as api from '../../../api/uniteApi'
import jsPDF from 'jspdf';
import { toast } from 'react-toastify';

const Bilan = ({setPopUp}) => {
  const [error, setError] = useState({error:false , errorMessage:""})
  const nomUnite = useSelector(state =>state.system.nom)
  const user = useSelector((state)=> state.user.userInfo)
  const reportTemplateRef = useRef(null);
  const {hide , bilanProductionUnite , bilanProductionBacs, bacsOperations } = useSelector((state) =>state.bilans.bilanUnite)  
  const dispatch = useDispatch()

  
  useEffect(()=>{
    console.log("data", hide , bilanProductionUnite , bilanProductionBacs, bacsOperations );
  },[])

  const handleAnnulment = () =>{
    dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations : [], hide: true}))
    setError({error:false , errorMessage:""})
    setPopUp(false)
  }

  const handleValidation = async () =>{
    let body  = {...bilanProductionUnite, validation_resp_unite : true , validation_xp : false}
    let response = await api.postUniteProduction(body)
    if (response.data.success) {
      toast.success("La production Journaliere de l'unite est enregistree.")
      setError({error:false , errorMessage:""})
      dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations : [], hide: true}))
      dispatch(api.fetchUniteProduction(body.UniteId, new Date()))
      setPopUp(false)
    }else{
      setError({error:true , errorMessage:response.data.message})
    }
  }

  // useEffect(()=>{
    
  //   dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations:[], hide: true}))
    
  // },[])

  return (
    <div onClick={(e)=> e.stopPropagation()} className='h-full my-8 w-1/2 flex flex-col p-3 items-center bg-white rounded-sm shadow-sm z-50'>
      {!hide && (
        < >
        <div ref={reportTemplateRef} className='w-full h-full flex flex-col overflow-y-scroll '>
        {/* Bilan Unite */}
        <div className='flex flex-col pb-4 border-b border-gray-300'>
          <div className='mt-3 text-lg font-semibold'>Bilan Production Journaliere</div>
          {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>) }
          <div className='mt-3'>Unite : <b>{nomUnite}</b></div>
          <div className='mt-1'>Journee production : <b>{bilanProductionUnite.journee_production}</b></div>
        </div>

        <table className='mt-3'>
          <tr className='h-10 bg-gray-50'><th></th> <th>Tonne </th> <th>m3</th> </tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Stock Initial</td> <td>{bilanProductionUnite.stock_initial_tm}</td> <td>{bilanProductionUnite.stock_initial_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Expedition</td>    <td>{bilanProductionUnite.expedition_unite_tm}</td>    <td>{bilanProductionUnite.expedition_unite_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Eau purgee</td>    <td>{bilanProductionUnite.purge_unite_tm}</td>         <td>{bilanProductionUnite.purge_unite_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Production</td>    <td>{bilanProductionUnite.production_unite_tm}</td>    <td>{bilanProductionUnite.production_unite_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Stock Final</td>   <td>{bilanProductionUnite.stock_final_tm}</td>   <td>{bilanProductionUnite.stock_final_vm}</td></tr>
        </table>

        {/* Production par Bacs */}
        {(bilanProductionBacs.length >0) && (<div className='mt-8 mb-1 text-lg font-semibold'>Production par Bac</div>)}
        {bilanProductionBacs.map((bilanBac) => (
          <div className='flex flex-col w-full'>
            <div className='mt-6 mb-1 font-semibold bg-orange-100 p-2 texto rounded-sm w-fit'>bac "{bilanBac.code_bacs}"</div>
            {/* production */}
            <table >
            <tr className='h-10 bg-gray-50'><th></th> <th>Tonne </th> <th>m3</th> </tr>
            <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Stock Initial</td> <td>{bilanBac.bac_stock_initial_tm}</td> <td>{bilanBac.bac_stock_initial_vm}</td></tr>
            <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Expedition</td>    <td>{bilanBac.bac_expedition_tm}</td>    <td>{bilanBac.bac_expedition_vm}</td></tr>
            <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Eau purgee</td>    <td>{bilanBac.bac_purge_tm}</td>         <td>{bilanBac.bac_purge_vm}</td></tr>
            <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Production</td>    <td>{bilanBac.bac_production_tm}</td>    <td>{bilanBac.bac_production_vm}</td></tr>
            <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Stock Final</td>   <td>{bilanBac.bac_stock_final_tm}</td>   <td>{bilanBac.bac_stock_final_vm}</td></tr>
            </table>

            {/* Mouvements */}
            <div className='w-full'>
              <div className='mt-4 mb-1 text-lg font-semibold w-full'> Operations sur le bac</div>
              <table className='w-full'>
                  <tr className='h-10 bg-gray-50'><th>Date</th> <th>Type</th> <th>Resultat TM</th> <th>Resultat m3</th> </tr>
              {
                bacsOperations.filter((bac)=> bac.id === bilanBac.BacId).map((bac)=>bac.BacsOperations.map((operation)=>(
                  <tr className='h-8 border-b border-gray-100'><td>{(operation.date_operation).split("T")[0]}</td> <td>{operation.type_operation}</td> <td>{operation.resultat_masse_standard}</td> <td>{operation.resultat_volume_standard}</td></tr>
                ))) 
              }
              </table>
            </div>
          </div>
        
        ))}
      </div>
      <div className=' py-3 bottom-0 w-full flex flex-row items-center justify-center gap-4'>
        <button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>
        <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>

      </div>
      </>
      )}
    </div>
  )
}

export default Bilan