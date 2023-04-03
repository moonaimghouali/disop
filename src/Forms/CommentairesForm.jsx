import React, { useState } from 'react'
import { validateCommentaireForm } from './UniteFormValidation'
import * as api from '../api/uniteApi'
import { useDispatch, useSelector } from 'react-redux'

const CommentairesForm = () => {
    const [error, setError] = useState({error:false , errorMessage:""})
    const userId = useSelector(state => state.user.userInfo.id)
    const uniteId = useSelector(state => state.system.id)
    let dispatch = useDispatch()

    //handle Submit event
    const handleSubmit = async(e) =>{
      e.preventDefault()

      // Validate input fields
      // const response = await validateCommentaireForm(e.target.titre.value, e.target.contenu.value )
      // if(response.error) { 
      //   setError(response)
      // }
      // else{
        setError({error:false , errorMessage:""})

        //requestBody
        const requestBody = {
        // date_commentaire : new Date().getDate(),
        titre_commentaire : e.target.titre.value,
        contenu_commentaire : e.target.contenu.value,
        uniteId : uniteId ,
        userId : userId,
        }
        console.log(requestBody)
        // //ResponseData
        let response
        try {
           response = await api.postCommentaire(requestBody)
        } catch (error) {
          console.log(error)
        }
  
        if(!response) return 
        else{
          console.log(response)
          // update the list of comments
          // dispatch(updateCommentaires)
        }
      // }    
    }

  return (
    <div className='h-full w-6/12 flex flex-col p-4 bg-white rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Ajouter un Commentaire</div>
        <form className='flex flex-col h-full mt-4' method='POST' onSubmit={handleSubmit}>
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