import React, { useEffect,useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBilanUnite }from '../../../store/slices/BilansSlice'
import * as api from '../../../api/uniteApi'
import jsPDF from 'jspdf';

const Bilan = () => {
  const [error, setError] = useState({error:false , errorMessage:""})
  const user = useSelector((state)=> state.user.userInfo)
  const reportTemplateRef = useRef(null);
  const {hide , bilanProductionUnite , bilanProductionBacs, bacsOperations } = useSelector((state) =>state.bilans.bilanUnite)  
  const dispatch = useDispatch()

  

  const handleImpression = () =>{
    const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});

  }

  const handleAnnulment = () =>{
    dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations : [], hide: true}))
    setError({error:false , errorMessage:""})
  }

  const handleValidation = async () =>{
    let body  = {...bilanProductionUnite, validation_resp_unite : true , validation_xp : false}
    let response = await api.postUniteProduction(body)
    if (response.data.success) {
      setError({error:false , errorMessage:""})
      dispatch(api.fetchUniteProduction(body.UniteId))
      dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations : [], hide: true}))
    }else{
      setError({error:true , errorMessage:response.data.message})
    }
  }

  useEffect(()=>{
    
    dispatch(updateBilanUnite({bilanProductionUnite : {}, bilanProductionBacs : [], bacsOperations:[], hide: true}))
    
  },[])

  return (
    <div className='h-full w-1/3 flex flex-col p-3 items-center bg-white rounded-sm shadow-sm'>
      {!hide && (
        < >
        <div ref={reportTemplateRef} className='w-full h-5/6  flex flex-col overflow-y-scroll '>
        {/* Bilan Unite */}
        <div className='mt-3 text-lg font-semibold'>Bilan Unite</div>
        {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>) }
        <div className='mt-3'>Journee production : <b>{bilanProductionUnite.journee_production}</b></div>

        <table className='mt-2'>
          <tr><th></th> <th>Tonne </th> <th>m3</th> </tr>
          <tr><td className='font-semibold'>Stock Initial</td> <td>{bilanProductionUnite.stock_initial_tm}</td> <td>{bilanProductionUnite.stock_initial_vm}</td></tr>
          <tr><td className='font-semibold'>Expedition</td>    <td>{bilanProductionUnite.expedition_unite_tm}</td>    <td>{bilanProductionUnite.expedition_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Eau purgee</td>    <td>{bilanProductionUnite.purge_unite_tm}</td>         <td>{bilanProductionUnite.purge_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Production</td>    <td>{bilanProductionUnite.production_unite_tm}</td>    <td>{bilanProductionUnite.production_unite_vm}</td></tr>
          <tr><td className='font-semibold'>Stock Final</td>   <td>{bilanProductionUnite.stock_final_tm}</td>   <td>{bilanProductionUnite.stock_final_vm}</td></tr>
        </table>

        {/* Production par Bacs */}
        {(bilanProductionBacs.length >0) && (<div className='mt-8 mb-1 text-lg font-semibold'>Production par Bac</div>)}
        {bilanProductionBacs.map((bilanBac) => (
          <div className='flex flex-col w-full'>
            <div className='mt-6 mb-1 font-semibold bg-orange-100 p-2 texto rounded-sm w-fit'>bac "{bilanBac.code_bacs}"</div>
            {/* production */}
            <table >
            <tr><th></th> <th>Tonne </th> <th>m3</th> </tr>
            <tr><td className='font-semibold'>Stock Initial</td> <td>{bilanBac.bac_stock_initial_tm}</td> <td>{bilanBac.bac_stock_initial_vm}</td></tr>
            <tr><td className='font-semibold'>Expedition</td>    <td>{bilanBac.bac_expedition_tm}</td>    <td>{bilanBac.bac_expedition_vm}</td></tr>
            <tr><td className='font-semibold'>Eau purgee</td>    <td>{bilanBac.bac_purge_tm}</td>         <td>{bilanBac.bac_purge_vm}</td></tr>
            <tr><td className='font-semibold'>Production</td>    <td>{bilanBac.bac_production_tm}</td>    <td>{bilanBac.bac_production_vm}</td></tr>
            <tr><td className='font-semibold'>Stock Final</td>   <td>{bilanBac.bac_stock_final_tm}</td>   <td>{bilanBac.bac_stock_final_vm}</td></tr>
            </table>

            {/* Mouvements */}
            <div>
              <div className='mt-4 mb-1 text-lg font-semibold'> Operations sur le bac</div>
              <table >
                  <tr><th>Date</th> <th>Type</th> <th>Resultat TM</th> <th>Resultat m3</th> </tr>
              {
                bacsOperations.filter((bac)=> bac.id === bilanBac.BacId).map((bac)=>bac.BacsOperations.map((operation)=>(
                  <tr><td>{operation.date_operation}</td> <td>{operation.type_operation}</td> <td>{operation.resultat_masse_standard}</td> <td>{operation.resultat_volume_standard}</td></tr>
                ))) 
              }
              </table>
            </div>
          </div>

          

        
        ))}
      </div>
      <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
        <button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>
        <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>

        </div>
      </>
      )}
    </div>
  )
}

export default Bilan