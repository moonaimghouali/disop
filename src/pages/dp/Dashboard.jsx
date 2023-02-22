import React from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Dashboard" />
      <ControlMenu />
      <div className=' grid grid-rows-8 grid-cols-2 gap-2 w-full h-full rounded' >
        <div className='bg-white rounded-sm row-span-3'> Info</div>
        <div className='bg-white rounded-sm row-span-4'>2</div>
        <div className='bg-white rounded-sm row-span-5'>3</div>
        <div className='bg-white rounded-sm row-span-4'>4</div>
      </div>
    </div>
  )
}

export default Dashboard