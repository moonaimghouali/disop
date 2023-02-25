import React from 'react'
import PageHeader from '../../components/PageHeader'
import KpiItem from './components/Kpiitem'

const Kpi = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Indicateurs de" pageName="Performance" />
      <div className='grid grid-cols-4 w-full h-full my-8 gap-2'>
        
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>
        <KpiItem/>

      </div>
      
    </div>
  )
}

export default Kpi