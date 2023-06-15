import React, { useState } from 'react'
import {PageHeader, ToggleSwitch} from '../../components'

const LabAnalyses = () => {
  const [ toggle, setToggle ] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("kasjks")
    console.log(e.target);
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Tests des" pageName="Laboratoires"/>

      <form className='h-full w-full grid grid-cols-2 gap-8 mt-8 px-2 py-3 bg-white shadow-sm' onSubmit={handleSubmit}>
        
        {/* saisi des caracteristiques */}
        <div className='h-full col-span-1 flex flex-col px-2'>
          <div className='mt-4 font-semibold text-xl'>Saisi des caracteristiques</div>

          <div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 mt-4 border-r-1 border-gray-200'>

            <div className='col-span-4'>Densite </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temperature </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Salinite </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>TVR </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>BSW </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="number"
            id="pression_pipe" name='pression_pipe' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>
          </div>

          <div className='flex w-full items-center justify-center mt-8'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
              Envoyer</button>
          </div>
          
        </div>

        {/* divider
        <div className='h-full w-px bg-gray-300'/> */}
        
        
        {/* Fiche d'anomalie */}
        <div className='h-full col-span-1 flex flex-col '>
          
          <div className='flex flex-row gap-2 justify-end mr-4'>
            Remplir le fiche d'anomalie <ToggleSwitch toggle={toggle} setToggle={setToggle}/></div>
          
          {toggle && (
          <div className='h-full w-full mt-4 p-2  flex flex-col'>
            {/* titre */}
            <label>Titre</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1" required={toggle} type="text" id="titre" name='titre' placeholder='titre de la fiche'/>
            
            {/* contenu */}
            <label className='mt-4'>Cotenu</label>
            <textarea className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 flex-1 p-1  align-top" required={toggle} type="text" id="detail" name='detail' placeholder='Contenu de la fiche'/> 

          </div>)}
        </div>

      </form>

    </div>
  )
}

export default LabAnalyses