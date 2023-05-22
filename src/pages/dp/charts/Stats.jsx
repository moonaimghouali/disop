import React from 'react'

const Stats = () => {
  return (
    <div className='h-full w-full grid grid-rows-2 grid-cols-2 p-2 gap-2'>
        <div className='rounded bg-gray-50 flex flex-col justify-center items-center'>
            <div className='font-semibold text-gray-500 mb-1'>Realisations</div>
            <div className='text-2xl font-semibold text-black'> 10000.1289</div>
            <div className='font-semibold text-green-600 mt-1'> + 12.09%</div>
        </div>
        
        <div className='rounded bg-gray-100 flex flex-col justify-center items-center'>
            <div className='font-semibold text-gray-500 mb-1'>Realisations</div>
            <div className='text-2xl font-semibold text-black'> 10000.1289</div>
            <div className='font-semibold text-green-600 mt-1'> + 12.09%</div>
        </div>

        <div className='rounded bg-gray-100 flex flex-col justify-center items-center'>
            <div className='font-semibold text-gray-500 mb-1'>Realisations</div>
            <div className='text-2xl font-semibold text-black'> 10000.1289</div>
            <div className='font-semibold text-green-600 mt-1'> + 12.09%</div>
        </div>

        <div className='rounded bg-gray-50 flex flex-col justify-center items-center'>
            <div className='font-semibold text-gray-500 mb-1'>Realisations</div>
            <div className='text-2xl font-semibold text-black'> 10000.1289</div>
            <div className='font-semibold text-green-600 mt-1'> + 12.09%</div>
        </div>
    </div>
  )
}

export default Stats