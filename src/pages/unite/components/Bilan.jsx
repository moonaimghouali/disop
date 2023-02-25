import React from 'react'
import { useSelector } from 'react-redux';

const Bilan = () => {

    const handleClick = () =>{

    }
    const user = useSelector((state)=> state.user);
    
    
  return (
    <div className='h-full w-1/3 flex flex-col p-2 items-center bg-white rounded-sm shadow-sm'>
        <div className='h-full w-full mb-2 '>Content</div>
        {user.isRespUnite && (
            <button onClick={handleClick} className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
            Valider</button>
        )}
    </div>
  )
}

export default Bilan