import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const Mem = ({rapport, data}) => {
    let grid;
    let date = new Date(rapport.date)

    const toolbar = ['PdfExport','ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            grid.pdfExport();
        }
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport()
        }
    };

  return (
    <div className='w-full h-full bg-white rounded-sm shadow-sm'>

      <div className='py-2 pl-2'> Rapport MEM du mois "<b>{rapport && rapport.date && rapport.date.toLocaleString('fr-FR', { month: 'long', year: "numeric" })}</b>"</div>
        <GridComponent  dataSource={data}
          ref={g => grid = g} toolbar={toolbar} allowPdfExport={true} allowExcelExport={true} 
          allowPaging={true} toolbarClick={toolbarClick}  pageSettings={{pageSize:9}}>
          
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