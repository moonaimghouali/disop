import React,{useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import {ProductionMenu} from './components'

const EpProduction = () => {

  const [prodMenu, setProdMenu] = useState({perimetre : -1, date : new Date(new Date()- 86400000) })
  
  useEffect(()=>{

    console.log(prodMenu);

  },[prodMenu.perimetre, prodMenu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des" pageName="Puits"/>

      <ProductionMenu prodMenu={prodMenu} setProdMenu={setProdMenu}/>

      <div className='w-full h-full rounded bg-white shadow-sm' >
          
      </div>
    </div>
  )
}

export default EpProduction
