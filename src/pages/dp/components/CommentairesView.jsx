import React, { useEffect } from 'react'
import { PopupBG } from '../../../components'

const CommentairesView = ({setCommentShow , commentaires, entite}) => {

  useEffect(()=>{
    console.log('heeer', commentaires, entite)
  },[])
    
  return (
    <PopupBG setShow={setCommentShow}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-3 rounded flex flex-col">
            
            <div className='text-2xl font-bold mt-2'> {entite.nom} </div>

            {/* divider */}
            <div className='w-full h-px bg-gray-300 my-6'></div>

            {commentaires?.map(c =>(
                <>
                <div className='text-xl font-semibold'>{c.titre_commentaire}</div>
                <div className='text-gray-500'>{new Date(c.date_commentaire).toISOString().split("T")[0]}</div>
                <div className='text-black mt-1'>{c.contenu_commentaire}</div>
                {/* divider */}
                <div className='w-full h-px bg-gray-200 mt-2 my-4'></div>
                </>  
            ))}
      </div>
    </PopupBG>
  )
}

export default CommentairesView