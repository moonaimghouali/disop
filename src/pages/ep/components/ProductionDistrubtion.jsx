import React,{ useState, useEffect} from 'react'
import { PopupBG } from '../../../components'
import { calculProductionPuitsCorrigee, calculProductionPerimetres } from '../../../utils/CalculProduction'
import { ProductionUnites, ProductionPerimetres } from '../components'
import { AiOutlineClose } from 'react-icons/ai'
import * as api from '../../../api/epApi'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ProductionDistrubtion = ({setBilan, valid, production , journee_production}) => {

  const RegionId = useSelector((state)=>state.system.id)
  const [ prodCorrigee, setProdCorrigee] = useState([])
  const [ perimetres , setPerimetres] = useState([])
  const [ prodPerimetres, setProdPerimetres] = useState([])
  const [ toggle, setToggle ] = useState(false)

  useEffect(()=>{    
    const fn = async () =>{
      if (!valid) return

      let response = await api.fetchPerimetres(RegionId)
      setPerimetres(response)
      console.log("perimetres",response)

      let result = calculProductionPuitsCorrigee(production)
      
      let perimetresProd = calculProductionPerimetres(result, journee_production)

      console.log("res", result, "prodperim",perimetresProd)
      setProdCorrigee(result)
      setProdPerimetres(perimetresProd)
    }
    fn()
  },[valid, production])

  const handleAnnulment = (e) => {
    e.preventDefault()
    setBilan(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("before", prodCorrigee)
    let res = await api.updatePuitsProductions(prodCorrigee)
    if(res) {
      toast.success("La production corrigees des puits est enregistres.")
    }
    // await api.postPerimetresProduction(prodPerimetres, perimetres, journee_production)
    // alert("submitted")
  }

  return (
  <PopupBG setShow={setBilan}>
    <div onClick={(e)=> e.stopPropagation()} className="h-[95%] w-[95%] bg-white shadow-md p-2 rounded flex flex-col">
    
      <div className='flex flex-col h-full w-full'>
      
        <div className='flex-1 '>
          <div className='flex flex-row justify-between items-center'>
            <div className='font-semibold text-2xl mt-2 ml-2'>Calcul de la Production Corrigee des Puits | {journee_production}</div> 
            <button onClick={handleAnnulment}><AiOutlineClose  size={32}/></button>
          </div>
          <div className='w-full h-px bg-gray-300 my-3'> </div>
            
          <div className='h-[95%] w-full flex flex-col'>
            <ProductionUnites prodCorrigee={prodCorrigee} />
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

export default ProductionDistrubtion