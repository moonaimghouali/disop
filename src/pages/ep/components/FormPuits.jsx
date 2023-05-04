import React,{useState, useEffect, useRef} from 'react'
import * as api from './../../../api/epApi'

const FormPuits = ({puits, date}) => {
    const [disabled, setDisabled] = useState(false)
    const [puitsProduction, setPuitsProduction] = useState()
    const [prod, setProd] = useState(0)
    const [ show, setShow] = useState(false)
    const heuresRef = useRef(null);
    const debitRef = useRef(null);

    useEffect(()=>{
        let fn = async () =>{
          setShow(false)
          let journee_production = new Date(date).toISOString().split("T")[0]
          console.log(puits);
          let response = await api.fetchPuitsProduction(puits.id, journee_production )
          console.log(response);
          if(! response.length)  {
            setPuitsProduction({heures_de_marche:0, debit_horaire:0, production_puits:0}) 
            setProd(0)
            setShow(true)
            setDisabled(false)
          }else{
            setPuitsProduction(response[0])
            setProd(response[0].production_puits)
            setShow(false)
            setDisabled(true)
          }
        }
        fn()
        setProd(0)
    }, [puits, date])

    const handleChange = () =>{
      let h = heuresRef.current.value
      let d = debitRef.current.value

      if( d <= 0) return
      if(h.split(":").length !== 2) return
      if(h.split(":")[0].length !== 2) return
      if(h.split(":")[1].length !== 2) return

      let heures = parseInt(h.split(":")[0])
      let minutes = parseInt(h.split(":")[1])

      if(heures < 0 || minutes < 0 ) return

      let heuresDecimal = heures + ( minutes/60)
      setProd(d * heuresDecimal)
      
    } 

    const handleSubmit = (e) =>{
      e.preventDefault()
      let puit = {
        journee_production : new Date(date).toISOString().split("T")[0],
        heures_de_marche  : heuresRef.current.value,
        debit_horaire : debitRef.current.value,
        production_puits  : Number(prod).toFixed(2),
      }
      alert(JSON.stringify(puit))
    }
    
  return (
    <div className='h-full w-1/2 flex flex-col mt-8 '>
      <form className='w-full h-fit grid grid-cols-11 gap-2 ' onSubmit={handleSubmit}>
        
        <div className='col-span-4'>Heures de marche </div>            
        <input className="col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="text"
        required  disabled={disabled} onChange={handleChange} ref={heuresRef}
        id="heure_de_marche" name='heure_de_marche' />
        <div className='col-span-1 pt-2 text-gray-700'>hh:mm</div> 
        
        {/* <div className='col-span-6'>Pression pipe </div>
        <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
        required value="22:33" disabled={disabled}
        id="heure_de_marche" name='heure_de_marche' />
        

        <div className='col-span-6'>Pression tete </div>
        <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
        required value="22:33" disabled={disabled}
        id="heure_de_marche" name='heure_de_marche' />
        

        <div className='col-span-6'>Temperature tete </div>
        <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
        required value="22:33" disabled={disabled}
        id="heure_de_marche" name='heure_de_marche' /> */}
   

        <div className='col-span-4'>Debit horaire huile </div>
        <input className="col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='__.__' type="text"
        required disabled={disabled} onChange={handleChange} ref={debitRef}
        id="debit_horaire" name='debit_horaire' />
        <div className='col-span-1 pt-2 text-gray-700'>m3/h</div> 
       

        {/* <div className='col-span-6'>coeff_k  </div>
        <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
        required value="22:33" disabled={disabled}
        id="heure_de_marche" name='heure_de_marche' />
        

        <div className='col-span-6'>GOR  </div>
        <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
        required value="22:33" disabled={disabled}
        id="heure_de_marche" name='heure_de_marche' /> */}
       

        <div className='mt-3 font-semibold col-span-4 text-lg'>Production Puits </div>
        <input className="mt-3 col-span-6 border-1 border-gray-400 h-8 pl-2 ml-2 font-semibold text-lg " placeholder='hh:mm' type="text"
        required value={prod} disabled={true}
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
  )
}

export default FormPuits