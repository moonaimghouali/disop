import React, { useEffect, useState } from 'react'
import { updateBilanMouvement } from '../../../store/slices/BilansSlice'
import { useSelector , useDispatch} from 'react-redux'
import * as api from '../../../api/uniteApi'

const MouvementBilan = () => {
  let bilanMouvement = useSelector((state) => state.bilans.bilanMouvement)
  let bilan = bilanMouvement.bilan
  const dispatch = useDispatch()
  const [validation, setValidation] = useState({hide:true , message:""})

  const handleAnnulment = () =>{
    dispatch(updateBilanMouvement({bilan : {} , hide: true}))
  }

  const handleValidation = async () =>{
    let body = {...bilan }
    body.initiale_cote =body.initiale_cote.coteDm*100 + body.initiale_cote.coteMm 
    body.finale_cote =body.finale_cote.coteDm*100 + body.finale_cote.coteMm 
    console.log(body)
        try {
           let response = await api.postMouvement(body)
           if (response.data.success){
            dispatch(updateBilanMouvement({bilan : {} , hide: true}))
            setValidation({hide:false , message:"Mouvement Validee!"})
           }
           else{
            setValidation({hide:false , message:"Erreur de serveur... reessayer ulterieurement"})
           }
        } catch (error) {
          console.log(error.message)
        }
  }

  useEffect(()=>{
    dispatch(updateBilanMouvement({bilan : {} , hide: true}))
    setValidation({hide:true , message:""})
  },[])

  return (
    <div className='bg-white w-1/2 h-full px-3'>
      {!validation.hide && (
        <div className='mt-4 text-green-600 text-lg font-semibold'>{validation.message}</div>
      )}

      {!bilanMouvement.hide && (
        <div className='flex flex-col gap-3 py-3 h-full'>
        <div className=' text-lg font-semibold'>Bilan de Mouvement</div>
        <div className='flex-1 w-full'>
          <div className=' text-ls font-medium'>Type mouvement : <b>{bilan.type_operation}</b></div>
          <div className=' text-ls font-medium'>Bac : <b>{bilan.BacId}</b></div>
          
          <div className='flex flex-row w-full gap-4 mt-3'>
            {/* Resultat Initial */}
            {(bilan.type_operation ==="StockFinal")? "" : (
              <div >
              <div className=' text-lg font-semibold'>Resultats Initiaux</div>
              <div>Cote : <b>{bilan.initiale_cote.coteDm}</b>d <b> {bilan.initiale_cote.coteMm}</b>m</div>
              <div>Temperature : <b>{bilan.initiale_temperature}</b>C</div>
              <div>Densite : <b>{bilan.initiale_densite}</b></div>
              <div className=' text-ls font-medium'>Volume Apparent : <b>{bilan.initiale_volume_apparent}</b> m3</div>
              <div className=' text-ls font-medium'>Coeff Correction k : <b>{bilan.initiale_coef_correction}</b></div>
              <div className=' text-ls font-medium'>Volume Standard : <b>{bilan.initiale_volume_standard}</b> m3</div>
              <div className=' text-ls font-medium'>Masse Standard : <b>{bilan.initiale_masse_standard}</b> T</div>
              </div>
            )}
            {/* Resultat Finale */}
            <div >
              <div className=' text-lg font-semibold'>Resultats Finaux</div>
              <div>Cote : <b>{bilan.finale_cote.coteDm}</b>d <b> {bilan.finale_cote.coteMm}</b>m</div>
              <div>Temperature : <b>{bilan.finale_temperature}</b>C</div>
              <div>Densite : <b>{bilan.finale_densite}</b></div>
              <div className=' text-ls font-medium'>Volume Apparent : <b>{bilan.finale_volume_apparent}</b> m3</div>
              <div className=' text-ls font-medium'>Coeff Correction k : <b>{bilan.finale_coef_correction}</b></div>
              <div className=' text-ls font-medium'>Volume Standard : <b>{bilan.finale_volume_standard}</b> m3</div>
              <div className=' text-ls font-medium'>Masse Standard : <b>{bilan.finale_masse_standard}</b> T</div>
              </div>
            </div>

        </div>

        {/* Button */}
        <div className='flex w-full gap-4 items-center justify-center px-20'>
                <button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
                    Valider</button>
                <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>
                    Annuler</button>
            </div>
        </div>
      )} 
    </div>
  )
}

export default MouvementBilan