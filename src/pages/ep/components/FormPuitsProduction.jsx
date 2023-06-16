import React,{useState, useEffect, useRef} from 'react'
import * as api from '../../../api/epApi'
import {ToggleSwitch} from '../../../components'
import { toast } from 'react-toastify'

const FormPuitsProduction = ({puits, date , toggle, setToggle}) => {

    const [disabled, setDisabled] = useState(false)
    const [ show, setShow] = useState(false)
    const [error, setError] =useState({error: false, message : ""})
    const [ouvert, setOuvert] = useState(false)
    // const [ heuresDecimal, setHeuresDecimal] = useState(0)
    const [puitsProd, setPuitsProd] =useState({heures_de_marche : 0, heures_de_marche_string: "", debit_horaire : 0, production_puits : 0, taux_contribution : 0, production_corrigee : 0})
    const heuresRef = useRef(null);
    const debitRef = useRef(null);
    const prodRef = useRef(null);

    useEffect(()=>{
      // heuresRef.current = null
      // debitRef.current = null
      setPuitsProd({heures_de_marche : 0, heures_de_marche_string: "", debit_horaire : 0, production_puits : 0, taux_contribution : 0, production_corrigee : 0})      
      setOuvert(false)

      if (puits.statut_puits === true) setOuvert(true)

      let fn = async () =>{

        setShow(false)
        let journee_production = new Date(date).toISOString().split("T")[0]
        
        let response = await api.fetchPuitsProduction(puits.id, journee_production )
  
        if(! response.length)  {
          setPuitsProd({heures_de_marche : 0, heures_de_marche_string: "", debit_horaire : 0, production_puits : 0, taux_contribution : 0, production_corrigee : 0}) 
          // setProd(0)
          setShow(true)
          setDisabled(false)
        }else{
          setPuitsProd(response[0])
          setShow(false)
          setDisabled(true)
        }
      }
      fn()
    }, [puits, date])

    useEffect (()=>{
        
      // setError({error:false, message : ""})
      let h = puitsProd.heures_de_marche_string
      let d = puitsProd.debit_horaire
  
      if( d <= 0) {
        // setError({error:true, message : "Veiullez verifier le champs de debit huile horraire."})
        return
      }
      if((h.split(":").length !== 2) || (h.split(":")[0].length !== 2) || (h.split(":")[1].length !== 2)) { 
        // setError({error:true, message : "Veiullez verifier le champs de heures de marche."})
        return
      }

      let heures = parseInt(h.split(":")[0])
      let minutes = parseInt(h.split(":")[1])
      
      if( (heures < 0 || heures >24 ) || (minutes < 0 || minutes >59 ) || (heures ===24 && minutes !== 0 )) { 
        setError({error:true, message : "Veiullez verifier le champs de heures de marche."})
        return
      }

      let heuresDecimal = heures + ( minutes/60)
      setPuitsProd ({heures_de_marche : heuresDecimal, heures_de_marche_string: h, debit_horaire : d, production_puits : d * heuresDecimal, taux_contribution : 0, production_corrigee : 0})

    },[puitsProd.heures_de_marche_string, puitsProd.debit_horaire])


    const handleSubmit = async(e) =>{
      e.preventDefault()

      if (puitsProd.production_puits === 0) {
        toast.warn('Veiullez verifier que tous les champs sont remplis.')
        return
      }
      let puitsProduction = {
        journee_production : new Date(date).toISOString().split("T")[0],
        heures_de_marche : puitsProd.heures_de_marche,
        heures_de_marche_string : puitsProd.heures_de_marche_string,
        debit_horaire : Number(parseFloat(puitsProd.debit_horaire).toFixed(3)),
        production_puits  : Number(puitsProd.production_puits.toFixed(3)),
        taux_contribution : 0,
        production_corrigee : 0,
        PuitId : puits.id,
      }
      console.log("prod", puitsProduction)
      let response = await api.postPuitsProductions(puitsProduction)
      console.log("puitsProd", response)
      if (response.data.success) toast.success('La production journaliere de puits est enregistree.')
      else toast.warn("Une erreur s'est produite, veuillez répéter la tâche")
      // alert(JSON.stringify(puitsProduction))
    }
    
  return (
    <>
      <div className='flex flex-row items-center '>
        <div className='font-semibold text-xl flex-1'>Production puits " {puits.code_puits} "</div>
        <div className='flex flex-row gap-2 font-semibold items-center'> Parametres puits <ToggleSwitch toggle={toggle} setToggle={setToggle}/> </div>
      </div>
    {ouvert && ( 
      
    <div className='h-full w-1/2 flex flex-col mt-8 '>
      {error.error && ( <div className='mb-2 text-red-600 font-semibold'>{error.message}</div>)}
      <form className='w-full h-fit grid grid-cols-11 gap-2 ' onSubmit={handleSubmit}>
        
        <div className='col-span-4'>Heures de marche </div>            
        <input className="col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="text" maxLength={5}
        required  disabled={disabled} onChange={(e)=> setPuitsProd(prev=>({...puitsProd , heures_de_marche_string : e.target.value}))} ref={heuresRef} value={puitsProd?.heures_de_marche_string}
        id="heure_de_marche" name='heure_de_marche' />
        <div className='col-span-1 pt-2 text-gray-700'>hh:mm</div>

        <div className='col-span-4'>Debit horaire huile </div>
        <input className="col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='__.__' type="number"
        required disabled={disabled} onChange={(e)=> setPuitsProd(prev=>({...puitsProd , debit_horaire : e.target.value}))} ref={debitRef} value={puitsProd?.debit_horaire}
        id="debit_horaire" name='debit_horaire' />
        <div className='col-span-1 pt-2 text-gray-700'>m3/h</div> 
      
        <div className='mt-3 font-semibold col-span-4 text-lg'>Production Puits </div>
        <input className="mt-3 col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2 font-semibold text-lg " placeholder='___.___' type="text"
        required disabled={true} ref={prodRef} value={puitsProd.production_puits}
        id="production_puits" name='production_puits' />
        <div className='col-span-1 pt-4 text-gray-700'>m3</div> 
        
        {show && (
          <div  className='mt-4 w-full flex flex-row'> 
          <button type='submit' className='py-2 px-12  rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Valider
          </button>
          </div>
        )} 
    </form>  
    </div>
    )}
    </>
  )
}

export default FormPuitsProduction