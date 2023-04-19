import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const Spe = () => {
    let grid;

  return (
    <div className='w-full h-full pb-4'>
        <GridComponent   ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Real. ${2022}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Real.Cumul ${2022}`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Prev.Real. ${2023}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Real. ${2023}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Taux Real.`} textAlign='left'/>
            <ColumnDirective field='expedition_unite_tm' headerText={`Prev.Cumul ${2023}`}  textAlign='left'/>
            <ColumnDirective field='expedition_unite_vm' headerText={`Real. Cumul ${2023}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Taux Real.`} textAlign='left'/> 
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default Spe