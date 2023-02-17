import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import {regions} from '../../data/regionsData'


const Regions = () => {
  return (
    <div className='rounded-sm pl-8 py-4 bg-gray-100 w-full h-screen'>
      <PageHeader className="mb-10" subTitle="Gestion des" pageName="Regions"/>  
    
     <div className="w-2/3 mt-10">
     <GridComponent dataSource={regions} allowPaging={true}  allowSorting={true}  allowFiltering={true} pageSettings={{pageSize:10}} >
       <Inject services={[Page, Sort, Filter, Group]}/>
       
     </GridComponent>
     </div>
    
    </div>
  )
}

export default Regions