import React from 'react'
import CommentaireDetail from './CommentaireDetail'

const CommentairesList = ({commentaires ,type}) => {
  return (
   
    <div className='h-full w-6/12 flex flex-col bg-white p-4 rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Mes Commentaires</div>

        <div className='flex flex-col h-full w-full mt-4 border-t-1 border-b-1 border-gray-200 p-2 overflow-scroll basis-96 grow-0'>
        {(type==="Region")?
        (
          commentaires.map((commentaire) => (
          <CommentaireDetail  date_commentaire={commentaire.date_comm_r} titre_commentaire={commentaire.titre_comm_r} contenu_commentaire={commentaire.contenu_comm_r} />
          ))
        ):
        (
          commentaires.map((commentaire) => (
          <CommentaireDetail  date_commentaire={commentaire.date_commentaire} titre_commentaire={commentaire.titre_commentaire} contenu_commentaire={commentaire.contenu_commentaire} />
          ))
        )}
            
        </div>
        
    </div>
  )
}

export default CommentairesList