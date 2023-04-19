import React from 'react'
import PageHeader from '../../components/PageHeader'
import {RapportMenu, Rapport} from './components'

const Reporting = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Elaboration des " pageName="Rapports" />

      <div className='grid grid-cols-12 gap-4 my-8 w-full h-full'>
        {/* <RapportMenu /> */}
        <Rapport />
      </div>
    </div>
  )
}

export default Reporting