import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import CommentairesForm from '../../Forms/CommentairesForm'
import CommentairesList from './components/CommentairesList'
import DotLoader from "react-spinners/DotLoader";
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../../api/uniteApi'

const Commentaires = () => {
  const UniteId = useSelector((state) => state.system.id)
  const {loading, uniteCommentaires, error} = useSelector(state => state.commentaires)
  const dispatch = useDispatch()
  console.log(uniteCommentaires);

  useEffect(  ()=>{
    console.log(UniteId);
    dispatch(api.fetchCommentaires(UniteId))
  },[])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Saisi de" pageName="Commentaires"/>

      <div className="w-full h-full my-8 flex flex-row gap-10">
        <CommentairesForm/>
        {/* divider */}
        {/* <div className='w-px h-full bg-gray-200'></div> */}

         {/* <div className='flex items-center justify-center'>  */}
         <DotLoader color={"#f5821f"} loading={loading} size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        {!loading && (<CommentairesList commentaires ={uniteCommentaires}/>)}
      </div>
    </div>
  )
}

export default Commentaires