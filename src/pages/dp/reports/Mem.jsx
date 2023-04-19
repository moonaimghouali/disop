import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const Mem = () => {
    let grid;

  return (
    <div className='w-full h-full pb-4'>
        <GridComponent   ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Prev.${22}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Real.${22}`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Ecart.${22}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`%Real.${22}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Exped.${22}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Prev.${23}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Real.${23}`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Ecart.${23}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`%Real.${23}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Exped.${23}`} textAlign='left'/>
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default Mem;