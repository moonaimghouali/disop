import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const UniteProductionData = () => {

    let grid;

    const rowSelected = ()=>{
      if (grid) {
        /** Get the selected row indexes */
        const selectedrowindex = grid.getSelectedRowIndexes();
        /** Get the selected records. */
        const selectedrecords = grid.getSelectedRecords()[0];
        alert( JSON.stringify(selectedrecords));
    } }

  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'> 
      
         <GridComponent height={"100%"}  rowSelected={rowSelected} ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='date_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='production' headerText='Production(m3)' textAlign='left'/>
            <ColumnDirective field='expedition' headerText='Expedition(m3)' textAlign='left'/>
            <ColumnDirective field='stock' headerText='Stock FJ(m3)' textAlign='left'/>
            <ColumnDirective field='validation' headerText='Validation' textAlign='Center' />
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        
    </div>
  )
}

export default UniteProductionData