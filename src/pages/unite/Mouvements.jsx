import React from 'react'
import PageHeader from '../../components/PageHeader'
import MenuMouvements from './components/MenuMouvements'
import { GridComponent } from '@syncfusion/ej2-react-grids'

const Mouvements = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Mouvements de" pageName="Bacs"/>

      <div className='h-full w-full my-8 flex flex-col gap-6'>
        {/* Menu de Controle */}
        <MenuMouvements type={true}/>

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
         

        </div>


      </div>
      
      

    </div>
  )
}

export default Mouvements