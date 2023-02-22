import React from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'

const DpProduction = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Production" />
      <ControlMenu/>
      <div className='flex w-full h-full rounded bg-white shadow-sm' >
        akslas
      </div>
    </div>
  )
}

export default DpProduction