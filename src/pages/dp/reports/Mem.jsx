import React from 'react'
// import { TreeGridComponent, GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-treegrid'


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
        <TreeGridComponent  dataSource={data}
          ref={g => grid = g} toolbar={toolbar} allowPdfExport={true} allowExcelExport={true} childMapping="perimetres" treeColumnIndex={0} 
          allowPaging={true} toolbarClick={toolbarClick}  pageSettings={{pageSize:6}} >
          
          <ColumnsDirective >
            <ColumnDirective field='code' headerText='Region' textAlign='left'/>
            <ColumnDirective field='lastPrev' headerText={`Prev.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='lastReal' headerText= {`Real.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='lastEcart' headerText={`Ecart.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='lastPourcentage' headerText={`%Real.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='lastExpedition' headerText={`Exped.${rapport && rapport.date && rapport.date.getFullYear()-1}`} textAlign='left'/>
            <ColumnDirective field='Prev' headerText={`Prev.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='Real' headerText= {`Real.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='Ecart' headerText={`Ecart.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='Pourcentage' headerText={`%Real.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
            <ColumnDirective field='Expedition' headerText={`Exped.${rapport && rapport.date && rapport.date.getFullYear()}`} textAlign='left'/>
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </TreeGridComponent>

    </div>
  )
}

export default Mem;