import React from 'react'
import PageHeader from '../../components/PageHeader'
import CommentairesForm from './components/CommentairesForm'
import CommentairesList from './components/CommentairesList'

const Commentaires = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Saisi de" pageName="Commentaires"/>

      <div className="w-full h-full my-8 flex flex-row gap-10">
        <CommentairesForm/>
        {/* divider */}
        {/* <div className='w-px h-full bg-gray-200'></div> */}

        <CommentairesList/>

        
      </div>
    </div>
  )
}

export default Commentaires