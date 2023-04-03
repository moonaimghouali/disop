import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const Baremage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <div className='flex flex-row w-full gap-4'>
      <NavLink to="/p/unite/stock"> <FiArrowLeft size={38}/> </NavLink>
      <div className='text-3xl font-bold'>Table de baremage</div>   
      </div>
      {/* Info Section */}
      <div className='w-1/2 h-32 flex flex-col my-6 rounded-sm shadow-sm bg-white py-2 px-3' >
        <div className='text-xl font-semibold mt-1'>RA_310</div>
        <div className='mt-2 flex flex-row gap-8'>
          <div>etablie le : <b >31-12-2014</b> </div>
          <div>a mettre a jour le : <b>31-12-2024</b></div>
        </div>
        <div className='mt-2 '> etablie par : <b >Amine Mohammed</b></div>
      </div>

      {/* Table Baremage */}
      <div className='w-full h-full flex flex-col bg-white rounded-sm shadow-sm p-3'>
        table de baremge
      </div>
      
    </div>
  )
}

export default Baremage