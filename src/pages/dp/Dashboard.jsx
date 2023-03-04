import React from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'
import ProductionRegionChart from './charts/ProductionRegionChart'
import ExpeditionRegionChart from './charts/ExpeditionRegionChart'
import ContributionChart from './charts/ContributionChart'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Dashboard Production" />
      <ControlMenu />
      <div className=' grid grid-rows-8 grid-cols-2 gap-2 w-full h-full rounded' >
        <div className='bg-white rounded-sm row-span-3 p-40'> Info</div>
        <ProductionRegionChart />
        <ContributionChart />
        <ExpeditionRegionChart/>      
      </div>
    </div>
  )
}

export default Dashboard