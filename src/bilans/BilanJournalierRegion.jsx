import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateBilanRegion} from '../store/slices/BilansSlice'
import {AiOutlineFilePdf} from 'react-icons/ai'
import * as api from './../api/xpApi'
import {PopupBG} from '../components'
import {roles} from '../store/types/roles'
import {printBilanJournalierRegion} from './bilans'
import { toast } from 'react-toastify'


const BilanJournalierRegion = ({data, setBilan}) => {

    const [error, setError] = useState({error:false , errorMessage:""})
    const [success, setSuccess] = useState({success:false , successMessage:""})
    const {hide, bilanProductionRegion, bilansUnites} =useSelector(state => state.bilans.bilanRegion)
    const nom_region = useSelector(state=>state.system.nom)
    const code_region = useSelector(state=>state.system.code)
    
    const user = useSelector(state=>state.user.userInfo)
    const dispatch = useDispatch()

    
    const handleValidation = async ()=> {
      console.log("prod",data);
      await api.updateRegionProductionValidation(data.RegionId, data.id)
      toast.success("Le bilan de production de la region est validee.")
    }

    const handleAnnulment = ()=> {
      setBilan(false)
    }
    
    useEffect(()=>{
        setSuccess({success: false, successMessage:""})
        setError({error:false , errorMessage:""})
        // alert(JSON.stringify(data))
      
    },[])

  return (

    <PopupBG setShow={setBilan}>
      <div onClick={(e)=> e.stopPropagation()} className='h-full my-8 w-1/2 flex flex-col p-3 items-center bg-white rounded-sm shadow-sm z-50'>
      <div  className='w-full flex-1  flex flex-col overflow-y-scroll '>

        {/* Header */}
        <div className='flex flex-col pb-4 border-b border-gray-300'>
          <div className='flex flex-row w-full'>
            <div className='mt-3 text-lg font-semibold flex-1'>Bilan Production Regional Journalier</div>
            {data.validation_xp && (<button onClick={(e)=> printBilanJournalierRegion(data, nom_region,code_region, user)} className='px-2 bg-yellow-500 text-white font-semibold flex flex-row items-center rounded-sm gap-2'>
                <div>Exporter</div>
               <AiOutlineFilePdf size={18}/>
            </button>)}
          </div>
          {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>) }
          {success.success && (<div className=' text-green-600 text-base font-semibold'>{success.successMessage}</div>) }
          <div className='mt-3'>Region : <b>{nom_region}</b></div>
          <div className='mt-1'>Journee production : <b>{data.journee_production}</b></div>
        </div>

        <table className='mt-3'>
          <tr className='h-10 bg-gray-50'><th></th> <th>Tonne </th> <th>m3</th> </tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold '>Stock Initial</td> <td>{data.stock_initial_tm}</td> <td>{data.stock_initial_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Expedition</td>    <td>{data.expedition_region_tm}</td> <td>{data.expedition_region_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Production</td>    <td>{data.production_region_tm}</td> <td>{data.production_region_vm}</td></tr>
          <tr className='h-8 border-b border-gray-100'><td className='font-semibold'>Stock Final</td>   <td>{data.stock_final_tm}</td> <td>{data.stock_final_vm}</td></tr>
        </table>

      </div>
      <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
        {(user.role === roles.RespRegion && !data.validation_xp ) && <button onClick={handleValidation} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>}
        <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
      </div>
    </div>
  </PopupBG>
  )
}

export default BilanJournalierRegion