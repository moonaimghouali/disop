import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {utilisateurs} from '../../data/utilisateursData';

const Utilisateurs = () => {
  return (
    <div>
      <div className="flex flex-col h-screen w-full bg-gray-100 px-8 py-8">
      <PageHeader className="mb-10" subTitle="Gestion des" pageName="Utilisateurs"/>  

      <div className='flex w-full h-full mt-8 rounded bg-white shadow-sm' >
        <GridComponent height={"100%"} dataSource={utilisateurs} allowPaging={true}  allowSorting={true} pageSettings={{pageSize:10}} >
          <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
        </div>
      </div>
    </div> 
  )
}

export default Utilisateurs