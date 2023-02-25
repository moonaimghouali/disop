import React from 'react'

const RapportGroup = ({category}) => {
    const color ='red'
    // if(category =="J") color = "green"
    // if(category =="M") color = "orange"
    // if(category =="A") color = "sky"
  return (
    <div className='bg-white h-full shadow-sm rounded-sm p-4'>
        <div className={`w-fit pr-8 pb-2 text-xl font-semibold border-b-4 border-green-500 `}>{(category ==="J") ? "Journalier" : (category ==="M") ? "Mensuel" : "Annuel" }</div>
        <div className='flex flex-col h-full w-full mt-4 pl-4'>
            <div className={`w-full py-2 px-2 font-medium text-base hover:cursor-pointer rounded hover:bg-green-50 hover:text-green-500 `}>Bilan Journalier</div>
        </div>
    </div>
  )
}

export default RapportGroup