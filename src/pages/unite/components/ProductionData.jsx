import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import {production } from '../../../data/productionData'

const ProductionData = () => {
  let grid;

const rowSelected = ()=>{
  if (grid) {
    /** Get the selected row indexes */
    const selectedrowindex = grid.getSelectedRowIndexes();
    /** Get the selected records. */
    const selectedrecords = grid.getSelectedRecords()[0];
    alert( JSON.stringify(selectedrecords));
} }

// validation column template 
  const validationTemplate = (props) => {
    const valdiation = props.validation
    return (
    <div className='flex items-center justify-center w-full px-6'>
      { valdiation ? <div className='py-1 px-2 w-full rounded bg-green-50 text-green-600 font-semibold hover:bg-green-100'>Validee</div> 
      : <div className='py-1 px-2 w-full rounded bg-red-50 text-red-600 font-semibold hover:bg-red-100'>Non-Validee</div>
      } </div>)
};



  return (
    <div className='h-full w-2/3 bg-white rounded-sm shadow-sm'> 
      <div className='w-full h-full bg-white'>
         <GridComponent height={"100%"}  dataSource={production}  rowSelected={rowSelected} ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='date_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='production' headerText='Production(m3)' textAlign='left'/>
            <ColumnDirective field='expedition' headerText='Expedition(m3)' textAlign='left'/>
            <ColumnDirective field='stock' headerText='Stock FJ(m3)' textAlign='left'/>
            <ColumnDirective field='validation' headerText='Validation' textAlign='Center' template={validationTemplate} />
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        </div>
    </div>
  )
}

export default ProductionData