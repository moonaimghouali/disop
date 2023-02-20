import React from 'react'
import PageHeader from '../../components/PageHeader'
import PopupBG from '../../components/PopupBG'

const Production = () => {

  return (
    // <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
    //   <PageHeader subTitle="Consulter la" pageName="Production"/>
    // </div>
      <PopupBG>
        <div className='bg-white h-1/2 w-3/4 p-4 rounded shadow-md'> 
          <div className='font-semibold text-3xl text-red-600 '>Attention</div> 
        </div>
      </PopupBG>
  )
}

export default Production