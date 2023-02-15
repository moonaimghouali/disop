import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {utilisateurs} from '../../data/utilisateursData';

const Utilisateurs = () => {
  return (
    <div>
      <div className='rounded-sm pl-8 py-4 bg-gray-100 w-full h-screen'>
      <PageHeader className="mb-10" pageName="Utilisateurs"/>  

        <div className="w-2/3 mt-10">
        <GridComponent dataSource={utilisateurs} allowPaging={true}  allowSorting={true}  allowFiltering={false} pageSettings={{pageSize:10}} >
          <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
        </div>
      </div>
    </div> 
  )
}

export default Utilisateurs