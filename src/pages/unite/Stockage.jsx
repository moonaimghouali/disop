import React from 'react'
import PageHeader from '../../components/PageHeader'
import BacsGroup from './components/BacsGroup'

const Stockage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Consulter le" pageName="Stockage"/>
      <div className='grid grid-rows-2 gap-2 my-6 h-full w-full'>

      {/* Onspec bacs */}
      <BacsGroup onSpec={true}/>
      <BacsGroup onSpec={false}/>

      </div>
    </div>
  )
}

export default Stockage