import React, { useState } from 'react'
import {PageHeader, ToggleSwitch} from '../../components'

const LabAnalyses = () => {
  const [ toggle, setToggle ] = useState(false)
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Tests des" pageName="Laboratoires"/>

      <div className='h-full w-full grid grid-cols-2 mt-8 px-2 py-3 bg-white shadow-sm'>
        
        <div className='h-full col-span-1 flex flex-col '>

        </div>
        
        
        <div className='h-full col-span-1 flex flex-col'>
          <div className='flex flex-row gap-2 justify-end mr-4'>
            Remplir le fiche d'anomalie <ToggleSwitch toggle={toggle} setToggle={setToggle}/></div>
          {toggle && (
          <div>
            Fiche Anomalie
          </div>)}
        </div>

      </div>
    </div>
  )
}

export default LabAnalyses