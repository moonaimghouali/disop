import React, { useState } from 'react'
import { validateCommentaireForm } from './UniteFormValidation'
import * as api from '../api/uniteApi'
import * as xpApi from '../api/xpApi'
import { useDispatch, useSelector } from 'react-redux'


const CommentairesForm = ({type}) => {
    const [error, setError] = useState({error:false , errorMessage:""})
    const userId = useSelector(state => state.user.userInfo.id)
    const UniteId = useSelector(state => state.system.id)

    let dispatch = useDispatch()

    //handle Submit event
    const handleSubmit = async(e) =>{
      e.preventDefault()

      // Validate input fields
      const response = await validateCommentaireForm(e.target.titre.value, e.target.contenu.value )
      if(response.error) { 
        setError(response)
      }
      else{
        setError({error:false , errorMessage:""})

        let uniteBody = {
          id : null,
          date_commentaire : new Date(),
          titre_commentaire : e.target.titre.value,
          contenu_commentaire : e.target.contenu.value,
          UniteId : UniteId ,
          UserId : userId,
        }
        
        let regionBody ={
          id : null,
          date_comm_r : new Date(),
          titre_comm_r: e.target.titre.value,
          contenu_comm_r : e.target.contenu.value,
          RegionId : UniteId
        }
        
        // //ResponseData
        let response
        try {
           if (type ==="unite") {
            response = await api.postCommentaire(uniteBody)
           }else{
            response = await xpApi.postCommentaireRegion(regionBody)
           }
           
           if(response.data.success){
            var form = document.getElementById('commentaireForm');
            dispatch(api.fetchCommentaires(UniteId))
            dispatch(xpApi.fetchCommentairesRegion(UniteId))
            form.reset()
            // console.log(UniteId);
           }

        } catch (error) {
          console.log(error.message)
        }
      }    
    }

  return (
    <div className='h-full w-6/12 flex flex-col p-4 bg-white rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Ajouter un Commentaire</div>
        <form id="commentaireForm" className='flex flex-col h-full mt-4' method='POST' onSubmit={handleSubmit}>
          {/* error Message */}
          {error.error && (<div className='text-red-500 font-medium'>{error.errorMessage}</div>)}

            {/* titre */}
            <label>Titre</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1" required type="text" id="titre" name='titre' placeholder='titre du commentaire'/>
            
            {/* contenu */}
            <label className='mt-4'>Contenu</label>
            <textarea className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 flex-1 p-1 align-text-top align-top" required type="text" id="contenu" name='contenu' placeholder='Contenu de commentaire'/> 

            <div className='flex w-full items-center justify-center mt-4'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
              Envoyer</button>
            </div>

        </form>
    </div>
  )
}

export default CommentairesForm