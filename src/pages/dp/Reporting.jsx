import React,{useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
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
        console.log("heree is working");
        let journee = new Date(rapport.date).toISOString().split("T")[0]
        console.log(journee)
        let response = await api.fetchBilanJournalier(journee)
        console.log("res", response);
        if (response.data.success) {
          setProduction(response.data.res)
          console.log("production" ,production);
        }
      }
      if (rapport.rapport === 1) {
        
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
        <RapportMenu setRapport = {setRapport} rapport = {rapport}/>
        {(rapport.rapport === 0 )&& (<BilanJournalier rapport={rapport} productionData={production}/>)}
        {(rapport.rapport === 1 )&& (<Spe rapport={rapport} />)}
        {(rapport.rapport === 2 )&& (<Mem rapport={rapport}  />)}
      </div>
    </div>
  )
}

export default Reporting