import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import {perimetres} from '../../data/perimetresData'

const Perimetres = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader className="mb-10" subTitle="Gestion des" pageName="Perimetres"/>  
    
      <div className='flex w-full h-full mt-8 rounded bg-white shadow-sm' >
     <GridComponent dataSource={perimetres} allowPaging={true}  allowSorting={true} pageSettings={{pageSize:10}} height={"100%"}>
       <Inject services={[Page, Sort, Filter, Group]}/>
     </GridComponent>
     </div>
    
    </div>
  )
}

export default Perimetres