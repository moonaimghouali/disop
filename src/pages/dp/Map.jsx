import React from 'react'
import PageHeader from '../../components/PageHeader'


const Map = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="" pageName="Carte Geographique" />
      <div className="grid grid-cols-10 gap-1 w-full h-full py-8">
        <div className='col-span-7 shadow-sm bg-white'>Map</div>
        <div className='col-span-3 shadow-sm rounded bg-white'></div>
      </div>

    </div>
  )
}

export default Map