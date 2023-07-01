import React, {useState, useEffect} from 'react'
import {ProdChart, HeuresMarche, TemperatureChart, PressionChart} from '../charts'
import * as api from '../../../api/epApi'
import {toast} from 'react-toastify'

const HistoricView = ({puits, setToggle}) => {

    const [ error, setError] = useState(false)
    const [ prod, setProd] = useState([])
    const [ params, setParams] = useState([])

    useEffect(()=>{
      setError(false)
      const fn = async () =>{
        let journee_production = new Date().toISOString().split("T")[0]
      
      let res = await api.fetchPuitsMonitoring(puits.id, journee_production)
      
      if (!res.success  || res.prod.length === 0   ) {
        setError(true)
        return
      }

      setProd(res.prod)
      setParams(res.params)
      }
      fn()
    },[puits])

    useEffect(()=>{
      if (error) toast.warn("Aucune donnée n'est trouvée pour ce puits.")
    },[error])

  return (
    <>
    {!error && (
      <div className='h-full w-full px-2 py-4 grid grid-cols-2 gap-2'>
        <div> <ProdChart data={prod}/>   </div>
        <div> <HeuresMarche data={prod}/> </div>
        <div> <PressionChart data={params}/> </div>
        <div> <TemperatureChart data={params}/> </div>
      </div>
    )}
    </>
    
  )
}

export default HistoricView