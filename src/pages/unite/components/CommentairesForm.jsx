import React from 'react'

const CommentairesForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(e.target.titre.value)
        e.target.titre.value = ""
        
    }

  return (
    <div className='h-full w-6/12 flex flex-col p-4 bg-white rounded-sm shadow-sm'>
        <div className='font-semibold text-lg text-gray-800'>Ajouter un Commentaire</div>
        <form className='flex flex-col h-full mt-4' method='POST' onSubmit={handleSubmit}>

            {/* titre */}
            <label>Titre</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1" type="text" id="titre" name='titre' placeholder='titre du commentaire'/>
            
            {/* contenu */}
            <label className='mt-4'>Contenu</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 flex-1 p-1 align-text-top align-top" type="text" id="detail" name='detail' placeholder='Contenu de commentaire'/>

            <div className='flex w-full items-center justify-center mt-4'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>
            </div>

        </form>
    </div>
  )
}

export default CommentairesForm