import React from 'react'
import {PageHeader} from '../../components'
import {MenuDate , UniteProductionData, UniteBilan} from './components'


const XpUnites = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des " pageName="Unites"/>

      <div className='mt-4 w-full h-full flex flex-col gap-4'>
        <MenuDate />

        <div className='grid grid-cols-12 gap-4 w-full h-full'>
          <UniteProductionData />
          <UniteBilan />
        </div>
      </div>

    </div>
  )
}

export default XpUnites