import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const Mem = ({rapport}) => {
    let grid;
    let date = new Date(rapport.date)

  return (
    <div className='w-full h-full bg-white rounded-sm shadow-sm'>

      <div className='py-2 pl-2'> Rapport MEM du mois "<b>{rapport && rapport.date && rapport.date.toLocaleString('fr-FR', { month: 'long', year: "numeric" })}</b>"</div>
        <GridComponent   ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Prev.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Real.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Ecart.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`%Real.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Exped.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText={`Prev.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText= {`Real.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText={`Ecart.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`%Real.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText={`Exped.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default Mem;