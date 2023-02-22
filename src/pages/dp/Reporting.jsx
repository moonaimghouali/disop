import React from 'react'
import PageHeader from '../../components/PageHeader'
import RapportGroup from './components/RapportGroup'

const Reporting = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Elaboration des " pageName="Rapports" />
      <div className='grid grid-cols-3 gap-4 my-8 w-full h-full'>
        <RapportGroup category={"J"}/>
        <RapportGroup category={"M"}/>
        <RapportGroup category={"A"}/>
      </div>

    </div>
  )
}

export default Reporting