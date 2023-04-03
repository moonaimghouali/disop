import React from 'react'
import CommentaireDetail from './CommentaireDetail'

const CommentairesList = ({commentaires}) => {
  return (
   
    <div className='h-full w-6/12 flex flex-col bg-white p-4 rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Mes Commentaires</div>

        <div className='flex flex-col h-full w-full mt-4 border-t-1 border-b-1 border-gray-200 p-2 overflow-scroll basis-96 grow-0'>
        {commentaires.map((commentaire) => (
                <CommentaireDetail  date={commentaire.date_commentaire} titre={commentaire.titre_commentaire} contenu={commentaire.contenu_commentaire} />
            ))}
            
        </div>
        
    </div>
  )
}

export default CommentairesList