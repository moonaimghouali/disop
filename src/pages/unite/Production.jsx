import React from 'react'
import PageHeader from '../../components/PageHeader'
import PopupBG from '../../components/PopupBG'
import Bilan from './components/Bilan'
import ProductionData from './components/ProductionData'

const Production = () => {

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Consulter la" pageName="Production"/>

      <div className='my-8 w-full h-full flex flex-row gap-8'>
        <ProductionData />
        <Bilan />
      </div>
    </div>  
  )
}

export default Production

