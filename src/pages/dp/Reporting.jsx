import React,{useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import { formatBilanJournalier }from '../../utils/Reports'
import { Rapport} from './components'
import {RapportMenu} from './components'
import {Spe, Mem, BilanJournalier } from './reports';
import * as api from '../../api/dpApi'


const Reporting = () => {

  const [rapport, setRapport] = useState({rapport : 0 , date: new Date(new Date()- 86400000)})
  const [production, setProduction] = useState([])

  useEffect(()=>{

    const fetcData = async ()=>{
      
      if (rapport.rapport === 0) {
        setProduction([])
        let journee = new Date(rapport.date).toISOString().split("T")[0]
        let response = await api.fetchBilanJournalier(journee)
        if (response.data.success) {
          let res = formatBilanJournalier(response.data.data)
          console.log("aas", response.data.data, res);
          setProduction(res)
        }
      }
      if (rapport.rapport === 1) {
        setProduction([])
        let response = await api.fetchBilanSpe(rapport.date)
        
      }
      if (rapport.rapport === 2) {
        
      }
    }
    fetcData()
  },[rapport.rapport, rapport.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Elaboration des " pageName="Rapports" />

      <div className='flex flex-col my-6 w-full h-full'>
        <RapportMenu setRapport = {setRapport} rapport={rapport}/>

        {(rapport.rapport === 0 )&& (<BilanJournalier rapport={rapport} productionData={production}/>)}
        {(rapport.rapport === 1 )&& (<Spe rapport={rapport} />)}
        {(rapport.rapport === 2 )&& (<Mem rapport={rapport}  />)}
      </div>
    </div>
  )
}

export default Reporting