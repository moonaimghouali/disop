import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import NouveauBacForm from '../../Forms/NouveauBacForm'

const NouveauBac = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      {/* Header */}
      <div className='flex flex-row w-full gap-4'>
        <NavLink to="/p/unite/stock"> <FiArrowLeft size={38}/> </NavLink>
        <div className='text-3xl font-bold'>Ajouter un nouveau bac</div>   
      </div>

      <div className='mt-6 flex flex-col w-full h-full bg-white shadow-sm rounded-sm'>
        <NouveauBacForm/>
      </div>

    


    </div>
  )
}

export default NouveauBac