import React from 'react'
import warning from '../../assets/images/warning.png'

const Error = () => {
  return (
    <div className='h-screen flex flex-col w-full items-center bg-gray-100 py-20 px-24'>
      <img className="w-20 mt-8" src={warning} alt="" />
      <div className='Text-base font-semibold mt-4'>Error Title</div>
      <div className='Text-base font-medium mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil ut culpa deleniti quis unde ab dignissimos natus voluptas necessitatibus!</div>
    </div>
  )
}

export default Error