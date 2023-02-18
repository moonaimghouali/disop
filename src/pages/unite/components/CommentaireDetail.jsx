import React , {useState} from 'react'
import {MdEdit} from 'react-icons/md'

const CommentaireDetail = () => {
   const  [hideContenu, setHideContenu] = useState(true)
   const handleClick = () =>{
    setHideContenu(prevHideContenu => !prevHideContenu)
   }

  return (
    <div className='w-full h-fit p-2 shadow mb-3 rounded ease-in-out duration-200 hover:cursor-pointer' onClick={handleClick}>
        <div className='flex flex-row w-full items-center '>
            <div className='text-10 font-medium text-gray-400 mr-2'>16 fev</div>
            {/* divider */}
            <div className='w-px h-4 bg-gray-300 mr-2'></div>
            <div className='text-lg font-semibold text-gray-800 flex-1'>Panne Electrique</div>
            <button className='p-1 rounded hover:shadow-md hover:bg-orange-50'><MdEdit size={18}/></button>
        </div>

        {!hideContenu && ( <div className='text-base font-medium text-gray-600 text-ellipsis'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ratione quaerat laborum rerum quae provident! Iure mollitia laboriosam iste tempora!</div>
            )}
    </div>
  )
}

export default CommentaireDetail