import React,{useState, useEffect, useRef} from 'react'
import * as api from '../../../api/epApi'
import {ToggleSwitch} from '../../../components'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const FormPuitsParametres = ({puits, setPuits, date , toggle, setToggle}) => {

  const dispatch = useDispatch()

  const [ouvert, setOuvert] = useState(puits.statut_puits)
  // const [statutModif, setStatutModif] = useState(puits.status_puits)
  const [puitsParam, setPuitsParam] = useState({pression_pipe:0, pression_tete : 0, temperature_pipe : 0, temperature_tete : 0, gor : 0, coeff_k : 0})
  const [gasLift, setGasLift] = useState(false)
  const [glParam, setGlParam] = useState ({debit_gl : 0, pression_gl : 0})
  const [eau, setEau] = useState(false)
  const [wParam, setWParam] = useState ({debit_eau : 0, pression_eau : 0})

  const [disabled, setDisabled] = useState(false)
  const [ show, setShow] = useState(false)

  useEffect(()=>{
    console.log("puits," , puits, ouvert)
    setOuvert(puits.statut_puits)
    setEau(false)
    setGasLift(false)

    if(puits.type_puits === "PPHS" || puits.type_puits === "PPHSGL") setEau(true)
    if(puits.type_puits === "PPHGL" || puits.type_puits === "PPHSGL") setGasLift(true)
    // if (puits.statut_puits === true) setOuvert(true)

    setPuitsParam({pression_pipe:0, pression_tete : 0, temperature_pipe : 0, temperature_tete : 0, gor : 0, coeff_k : 0})
    setGlParam({debit_gl : 0, pression_gl : 0})
    setWParam({debit_eau : 0, pression_eau : 0})

    let fn = async () =>{
      setShow(false)
      let journee_production = new Date(date).toISOString().split("T")[0]
      
      let response = await api.fetchPuitsParametres(puits.id, journee_production )
      console.log("params", response);

      if(! response.length)  {
        setPuitsParam({pression_pipe:0, pression_tete : 0, temperature_pipe : 0, temperature_tete : 0, gor : 0, coeff_k : 0})
        setGlParam({debit_gl : 0, pression_gl : 0})
        setWParam({debit_eau : 0, pression_eau : 0}) 
        // setProd(0)
        setShow(true)
        setDisabled(false)
      }else{
        setPuitsParam({pression_pipe: response[0].pression_pipe, pression_tete : response[0].pression_tete, temperature_pipe : response[0].temperature_pipe, temperature_tete : response[0].temperature_tete, gor : response[0].gor, coeff_k : response[0].coeff_k})
        setGlParam({debit_gl : response[0].debit_gl, pression_gl : response[0].pression_gl})
        setWParam({debit_eau : response[0].debit_eau, pression_eau : response[0].debit_eau})
        setShow(false)
        setDisabled(true)
      }
     
    }
    fn()
  }, [puits, date] )

  useEffect(()=>{
    const fn = async ()=>{
      if( puits.statut_puits === ouvert) return
      
      let response = await api.updatePuitsStatut(puits.id, ouvert)
      if (response.status === 204) {
        dispatch(api.fetchPuits(puits.PerimetreId))
        toast.success(`Le statut de puits "${puits.code_puits}" est changee.`)
        setPuits(prev =>({...puits, statut_puits : ouvert}))
      }else{
        toast.error("Une erreur s'est produite, veiullez repeter l'operation")
      }
    }
    fn()
  },[ouvert])

  const handleSubmit = async (e) =>{
    
    e.preventDefault() 
    let day = new Date(date).toISOString().split("T")[0] 
    let body = {...puitsParam, ...glParam, ...wParam, journee_production : day, PuitId : puits.id}
    

    if(gasLift && (puits.type_puits === "PPHS" || puits.type_puits === "PPH")){
      body = {...body,  date_reprise_gl : new Date().toISOString().split("T")[0]}
    }
    
    if(eau && (puits.type_puits === "PPHGL" || puits.type_puits === "PPH")){
      body = {...body,  date_reprise_eau : new Date().toISOString().split("T")[0]}
    }
    if((puits.type_puits === "PPHS" || puits.type_puits === "PPHSGL") && (!eau)){ 
      body = {...body, date_arret_eau : new Date().toISOString().split("T")[0]}
    }
    if((puits.type_puits === "PPHGL" || puits.type_puits === "PPHSGL") && (!gasLift)){ 
      body = {...body,  date_arret_gl : new Date().toISOString().split("T")[0]}
    }

    let response = await api.postPuitsParametres(body)
    if (response.data.success){ 
      if (gasLift) {
        if (eau) {
          let response = await api.updatePuitsType(puits.id, "PPHSGL")
        }else{
          let response = await api.updatePuitsType(puits.id, "PPHGL")
        }
      }else{
        if (eau) {
          let response = await api.updatePuitsType(puits.id, "PPHS")
        }else{
          let response = await api.updatePuitsType(puits.id, "PPH")
        }
      }
      toast.success('Les parametres journalier de puits sont enregistres.')
      dispatch(api.fetchPuits(puits.PerimetreId))
    }
    else toast.warn("Une erreur s'est produite, veuillez répéter la tâche")
    
  }

  return (
    <>
      <div className='flex flex-row items-center '>
        <div className='font-semibold text-xl flex-1'>Parametres puits " {puits.code_puits} "</div>
        <div className='flex flex-row gap-2 font-semibold items-center'> Production puits <ToggleSwitch toggle={toggle} setToggle={setToggle}/> </div>
      </div>

    <div className='h-full w-full flex flex-col my-4 '>
      {/* Toggles */}
      <div className='flex flex-row gap-8 mb-8'>
        <div className='flex flex-row gap-2 font-semibold items-center'> Statut <ToggleSwitch toggle={ouvert} setToggle={setOuvert}/> </div>
        {ouvert && (
        <>
        <div className='flex flex-row gap-2 font-semibold items-center'> Injection Gas-Lift <ToggleSwitch toggle={gasLift} setToggle={setGasLift}/> </div>
        <div className='flex flex-row gap-2 font-semibold items-center'> Injection Eau <ToggleSwitch toggle={eau} setToggle={setEau}/> </div>
        </>
        )}
      </div>
      {ouvert && (
      <form className='w-full h-fit flex flex-col gap-2 ' onSubmit={handleSubmit}>
         {/* form Content */}
        <div className='h-full w-full grid grid-cols-3 gap-4'>
          {/* Infos generales */}
          <div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 border-r-1 border-gray-200'>

            <div className='col-span-4'>Press Pipe </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.pression_pipe} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, pression_pipe : e.target.value}))}
            id="pression_pipe" name='pression_pipe' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temp Pipe </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.temperature_pipe} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, temperature_pipe : e.target.value}))}
            id="temperature_pipe" name='temperature_pipe' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>C</div>

            <div className='col-span-4'>Press Tete </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.pression_tete} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, pression_tete : e.target.value}))}
            id="pression_tete" name='pression_tete' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temp Tete  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.temperature_tete} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, temperature_tete : e.target.value}))}
            id="temperature_tete" name='temperature_tete' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>C</div>

            <div className='col-span-4'>GOR  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.gor} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, gor : e.target.value}))}
            id="gor" name='gor' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>m3/m3</div>

            <div className='col-span-4'>coef K  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={puitsParam.coeff_k} onChange={(e)=> setPuitsParam(prev => ({...puitsParam, coeff_k : e.target.value}))}
            id="coeff_k" name='coeff_k' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'></div>

          </div>

          {/* Infos Gas Lift */}
          {gasLift && (<div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 border-r-1 border-gray-200'>  
            <div className='col-span-4'>Debit G-L  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={glParam.debit_gl} onChange={(e)=> setGlParam(prev => ({...glParam, debit_gl : e.target.value}))}
            id="debit_gl" name='debit_gl' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>m3/d</div>

            <div className='col-span-4'>Pression G-L </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={glParam.pression_gl} onChange={(e)=> setGlParam(prev => ({...glParam, pression_gl : e.target.value}))}
            id="pression_gl" name='pression_gl' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>Bar</div>
          </div>)}

          {/* Info Eau */}
          {eau && (<div className='w-full h-fit grid grid-cols-11 gap-1 '>
            <div className='col-span-4'>Debit Eau  </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={wParam.debit_eau} onChange={(e)=> setWParam(prev => ({...wParam, debit_eau : e.target.value}))}
            id="debit_gl" name='debit_gl' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>m3/d</div>

            <div className='col-span-4'>Pression Eau </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            value={wParam.pression_eau} onChange={(e)=> setWParam(prev => ({...wParam, pression_eau : e.target.value}))}
            id="pression_eau" name='pression_eau' disabled={disabled}/>
            <div className='col-span-1 pt-2 text-gray-700'>Bar</div>
          </div>)}
        </div>
        
        


        {/* Button */}
        {show && (
        <div  className='mt-4 w-full flex flex-row'> 
          <button type='submit' className='py-2 px-12  rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Valider
          </button>
        </div>
        )}
      </form> 
      )} 
    </div>
    </>
  )
}

export default FormPuitsParametres