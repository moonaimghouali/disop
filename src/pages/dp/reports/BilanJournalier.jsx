import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const BilanJournalier = () => {
    let grid;

  return (
    <div className='w-full h-full pb-4'>
        <GridComponent   ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Real. Jounraliere`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Prev. JJounraliere`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Ecart. JJounraliere`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`real. Mensuel`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Prev. Mensuel`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Ecart. Mensuel`} textAlign='left'/>
            
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default BilanJournalier;