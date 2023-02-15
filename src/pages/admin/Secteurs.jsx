import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import {secteurs} from '../../data/secteursData'

const Secteurs = () => {
  return (
    <div className='rounded-sm pl-8 py-4 bg-gray-100 w-full h-screen'>
      <PageHeader className="mb-10" pageName="Secteurs"/>  
    
     <div className="w-2/3 mt-10">
     <GridComponent dataSource={secteurs} allowPaging={true}  allowSorting={true}  allowFiltering={false} pageSettings={{pageSize:10}} >
       <Inject services={[Page, Sort, Filter, Group]}/>
     </GridComponent>
     </div>
    
    </div>
  )
}

export default Secteurs