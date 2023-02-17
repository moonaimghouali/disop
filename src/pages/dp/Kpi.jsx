import React from 'react'
import PageHeader from '../../components/PageHeader'

const Kpi = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Indicateurs de" pageName="Performance" />
      <div className='grid grid-cols-4 w-full h-full my-8 bg-white rounded p-4 shadow-sm'>
        {/* 1st row */}
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 1</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 2</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 3</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 4</div>
        {/* 2st row */}
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 5</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 6</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 7</div>
        <div className='flex flex-col items-center justify-center border-1 border-gray-100'> 8</div>

      </div>
      
    </div>
  )
}

export default Kpi