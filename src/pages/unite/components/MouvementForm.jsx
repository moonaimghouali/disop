import React from 'react'
import MouvementMesures from './MouvementMesures'
import MenuMouvements from './MenuMouvements'

const MouvementForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("hello its working")
        console.log(e.target.cote.value)
    }

  return (
    <div className='h-full w-1/2 '>
        <form className='h-full w-full flex flex-col gap-6' method='POST' onSubmit={handleSubmit}>
            <MenuMouvements type={false}/>
            <MouvementMesures />
            

            {/* Button  */}
            <div className='flex w-full items-center justify-center px-20'>
                <button type="submit" className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
                    Calculer</button>
            </div>
        </form>
    </div>
  )
}

export default MouvementForm