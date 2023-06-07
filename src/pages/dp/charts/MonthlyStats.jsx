import React from 'react'

const MonthlyStats = ({data}) => {
    let taux = 92.5

  return (
    <div className='h-full w-full grid grid-rows-2  p-2 gap-2'>

    {data.map((s) => (
    <div className='rounded row-span-1 h-full w-full bg-gray-50 flex flex-col justify-center items-center'>
        <div className='font-semibold text-gray-500 mb-1 text-xl'>{s.title}</div>
        <div className='flex flex-row gap-3 items-center'> 
            <div className='text-xl font-semibold text-black'>{s.prod} / {s.prev}</div>
            {(taux >=97 && taux <=103) && (<div className='font-semibold text-green-600'> [{s.taux}%]</div>)}
            {(taux <97 || taux >103) && (<div className='font-semibold text-red-600'> [{s.taux}%]</div>)}
        </div>

        {(s.evolution > 0) ? (<div className='mt-2 text-xl font-semibold text-green-600'>+ {Math.abs(s.evolution)}%</div>) : (<div className='mt-2 text-xl font-semibold text-red-600'>- {Math.abs(s.evolution)}%</div>)}
        <div className='font-semibold text-gray-400  '>{s.date}</div>
    </div>
    ))}   

    {data.length !==2 && (
    <div className='text-gray-600 font-semibold text-center'> No stats available</div>
    )}
      
    </div>
  )
}

export default MonthlyStats