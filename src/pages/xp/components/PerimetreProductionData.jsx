import React,{ useState, useEffect} from 'react'
import { PopupBG } from '../../../components'
import { AiOutlineClose } from 'react-icons/ai'
import * as epApi from '../../../api/epApi'
import * as api from '../../../api/xpApi'
import { useDispatch, useSelector } from 'react-redux';
import { calculProductionPuitsCorrigee, calculProductionPerimetres } from '../../../utils/CalculProduction'
import { toast } from 'react-toastify'
import {ProdParPerimetres} from '../components'

const PerimetreProductionData = ({setBilan, journee_production, perimetres, prodCorrigee, prodPerimetres}) => {

  const RegionId = useSelector((state)=>state.system.id)
 

  const handleAnnulment = (e) => {
    e.preventDefault()
    setBilan(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    let res = await epApi.postPerimetresProduction(prodPerimetres, perimetres, journee_production)
    console.log("postPerimetres prod",res);
    // if(res) {
    //   toast.success("La production corrigees des puits est enregistres.")
    // }
    
  }

  return (
    <PopupBG setShow={setBilan}>
    <div onClick={(e)=> e.stopPropagation()} className="h-[95%] w-[95%] bg-white shadow-md p-2 rounded flex flex-col">
    
      <div className='flex flex-col h-full w-full'>
      
        <div className='flex-1 '>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-semibold text-2xl mt-2 ml-2'>Calcul de la Production des Perimetres | {journee_production}</div> 
            <button onClick={handleAnnulment}><AiOutlineClose  size={32}/></button>
          </div>
          <div className='w-full h-px bg-gray-300 my-3'> </div>
            
          <div className='h-[95%] w-full flex flex-col'>
            <>
            <div className='font-semibold text-xl mb-3 ml-2'>Production des Perimetres</div>
            
            <table className='w-full table-fixed px-10 mt-2'>
              <tr className='bg-orange-500 h-8 text-white '> <th>Perimetre</th> <th>Stock Initial (TM)</th> <th>Stock Initial (m3)</th> <th>Production (TM)</th> <th>Production (m3)</th>  
              <th>Expedition (TM)</th> <th>Expedition (m3)</th> <th>Stock Final (TM)</th> <th>Stock Final (m3)</th> 
              </tr>
              
              {perimetres.map((p) =>{
                let prodPerim = prodPerimetres.get(`p-${p.id}`)
              return(
                // <></>
                <tr className=' h-8 border-b border-gray-200'> <td>{p.code_perimetre}</td> <td>{prodPerim.stock_initial_tm}</td> <td>{prodPerim.stock_initial_vm}</td> <td>{prodPerim.production_perimetre_tm}</td> <td>{prodPerim.production_perimetre_vm}</td> 
                <td>{prodPerim.expedition_perimetre_tm}</td> <td>{prodPerim.expedition_perimetre_vm}</td> <td>{prodPerim.stock_final_tm}</td> <td>{prodPerim.stock_final_vm}</td>
                </tr>
              )})}
            </table>
            </>
            {/* <ProdParPerimetres perimetres={perimetres} prodCorrigee={prodCorrigee} prodPerimetres={prodPerimetres} /> */}
          </div>
        </div>

      {/* Form Buttons */}
        <div className=' py-3 w-full flex flex-row items-center justify-center gap-4 px-48 border-t border-gray-300'>
          <button onClick={handleSubmit} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>    
          <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
        </div>

      </div>
    </div>
  </PopupBG>
  )
}

export default PerimetreProductionData