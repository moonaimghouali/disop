import React from 'react'
import {PageHeader} from '../../components'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'

const Puits = () => {

  const handleentitesChange = () =>{}
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Parametres des " pageName="Puits"/>

      <div className='h-full w-full grid grid-cols-12 gap-6 w- my-4'>

      {/* Puits */}
      <div className='col-span-3 flex flex-col items-center bg-white rounded-sm shadow-sm'>
          {/* DropDown Menu */}
          <div className=" p-2">
            <DropDownListComponent  change={handleentitesChange} id="perimetres" dataSource={['Perimetre1', 'Perimetre2', 'Perimetre3']} placeholder="Choisir un perimetre" ></DropDownListComponent>
          </div>
          {/* Divider */}
          <div className='h-px w-full my-2 bg-gray-300'></div>

        </div>

        {/* Paramtres Puits */}
        <div className='col-span-9 flex flex-col bg-white rounded-sm shadow-sm'>
          Parametres Puits
        </div>
      </div>
    </div>
  )
}

export default Puits