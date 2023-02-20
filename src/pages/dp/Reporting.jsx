import React from 'react'
import PageHeader from '../../components/PageHeader'

const Reporting = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Elaboration des " pageName="Rapports" />
      <div className='grid grid-cols-3 gap-4 my-8 w-full h-full'>
        <div className='bg-white h-full shadow-sm rounded p-4'>Journalier</div>
        <div className='bg-white h-full shadow-sm rounded p-4'>Mensuel</div>
        <div className='bg-white h-full shadow-sm rounded p-4'>Annuel</div>
      </div>

    </div>
  )
}

export default Reporting