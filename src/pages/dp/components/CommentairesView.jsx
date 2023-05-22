import React from 'react'
import { PopupBG } from '../../../components'

const CommentairesView = ({setCommentShow , commentaires}) => {

    
  return (
    <PopupBG setShow={setCommentShow}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
            {commentaires.map(c =>(
                <>
                <div>{c.titre_commentaire}</div>
                <div>{c.contenu_commentaire}</div>
                </>
            ))}
      </div>
    </PopupBG>
  )
}

export default CommentairesView