import React from 'react'
import db from './../assets/images/db.png'

const NoData = ({message, details}) => {
  return (
    <div className='h-full flex flex-col w-full col-span-12 items-center bg-gray-100 py-20 px-24'>
      <img className="w-20 mt-8" src={db} alt="" />
      <div className='Text-2xl font-semibold mt-4'>No Data was Found</div>
      <div className='Text-base font-medium mt-2'>{message}</div>
    </div>
  )
}

export default NoData