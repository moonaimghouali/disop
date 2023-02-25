import React from 'react'
import PageHeader from '../../components/PageHeader'
import MapInfo from './components/MapInfo'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'


const Map = () => {

  const handleentitesChange = () =>{}

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="" pageName="Carte Geographique" />

      <div className="grid grid-cols-10 gap-2 w-full h-full my-8">
        <div className='col-span-7 flex flex-col'>
          {/* Control Menu  */}
          <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm shadow-sm'>
            <div className="w-fit">
            <DropDownListComponent  change={handleentitesChange} id="entites" dataSource={['Regions', 'Unites', 'Bacs']} placeholder="Localiser les ..." ></DropDownListComponent>
            </div>
          </div>

          {/* Map */}
          <div className='h-full w-full mt-2 bg-white rounded-sm shadow-sm'>
            Map
          </div>
        </div>

        <MapInfo />
      </div>

    </div>
  )
}

export default Map