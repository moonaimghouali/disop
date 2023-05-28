import React from 'react'

const Stats = ({data}) => {
  return (
    <div className='h-full w-full grid grid-rows-2  p-2 gap-2'>

      
      {data.map((stat) => (
      <div className='rounded row-span-1 h-full w-full bg-gray-50 flex flex-col justify-center items-center'>
        <div className='font-semibold text-gray-500 mb-1 text-xl'>{stat.titre}</div>
        <div className='text-3xl font-semibold text-black'> {stat.value}</div>
        {(stat.evolution > 0) ? (<div className='text-xl font-semibold text-green-600 mt-1'> + {Math.abs(stat.evolution)}%</div>) : 
        (<div className='text-xl font-semibold text-red-600 mt-1'> - {Math.abs(stat.evolution)}%</div>)}  
      </div>
      ))}   

      {data.length !==2 && (
        <div className='text-gray-600 font-semibold text-center'> No stats available</div>
      )}
      
    </div>
  )
}

export default Stats