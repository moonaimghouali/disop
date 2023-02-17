import React from 'react'
import ProductionRegionChart  from './charts/ProductionRegionChart'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <div className='w-full h-16 bg-white rounded mb-1 shadow-sm'> Menu de controle</div>
      <div className=' grid grid-cols-2 gap-1 w-full h-full rounded' >
        <div className='bg-white rounded flex items-center justify-center shadow-sm'> 1{/*<ProductionRegionChart/>*/}</div>
        <div className='bg-white rounded shadow-sm'>2</div>
        <div className='bg-white rounded shadow-sm'>3</div>
        <div className='bg-white rounded shadow-sm'>4</div>
      </div>
    </div>
  )
}

export default Dashboard