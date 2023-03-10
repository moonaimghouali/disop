import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import {regions} from '../../data/regionsData'


const Regions = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader className="mb-10" subTitle="Gestion des" pageName="Regions"/>  
    
      <div className='flex w-full h-full mt-8 rounded bg-white shadow-sm' >
     <GridComponent height={"100%"} dataSource={regions} allowPaging={true}  allowSorting={true} pageSettings={{pageSize:10}} >
       <Inject services={[Page, Sort, Filter, Group]}/>
       
     </GridComponent>
     </div>
    
    </div>
  )
}

export default Regions