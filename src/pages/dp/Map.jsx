import React from 'react'
import PageHeader from '../../components/PageHeader'
import MapInfo from './components/MapInfo'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'


const Map = () => {

  const handleentitesChange = () =>{}

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="" pageName="Carte Geographique" />

      <div className='grid grid-cols-12 gap-2 w-full h-full my-8'>
        
        {/* Entites */}
        <div className='col-span-2 flex flex-col bg-white rounded-sm shadow-sm'>
          {/* DropDown Menu */}
          <div className="w-fit p-2">
            <DropDownListComponent  change={handleentitesChange} id="entites" dataSource={['Regions', 'Unites', 'Bacs']} placeholder="Localiser les ..." ></DropDownListComponent>
          </div>
          {/* Divider */}
          <div className='h-px w-full my-2 bg-gray-300'></div>
        </div>
        
        {/* Map */}
        <div className='col-span-6 bg-white rounded-sm shadow-sm'>Map</div>

        {/* MapInfo */}
        <div className='col-span-4 bg-white rounded-sm shadow-sm'>MapInfo</div>
      </div>



    </div>
  )
}

export default Map