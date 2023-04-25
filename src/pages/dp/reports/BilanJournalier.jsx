import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const BilanJournalier = ({rapport, productionData}) => {
    let grid;
    let date = new Date(rapport.date)

  return (
    <div className='w-full h-full bg-white rounded-sm shadow-sm'>

      <div className='py-2 pl-2'> Bilan Journalier de Production "<b>{rapport && rapport.date && rapport.date.toLocaleString('fr-FR').split(" ")[0]}</b>"</div>
        <GridComponent   ref={g => grid = g} dataSource={productionData}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
          <ColumnDirective field='id' headerText='Id' width={50} textAlign='left'/>
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='realisation_journee' headerText={`Real. Jounraliere`} textAlign='left'/>
            <ColumnDirective field='prevision_journee' headerText= {`Prev. Jounraliere`} textAlign='left'/>
            <ColumnDirective field='ecart_journee' headerText={`Ecart. Jounraliere`} textAlign='left'/>
            <ColumnDirective field='realisation_mensuel' headerText={`real. Mensuel`} textAlign='left'/>
            <ColumnDirective field='prevision_mensuel' headerText={`Prev. Mensuel`} textAlign='left'/>
            <ColumnDirective field='ecart_mensuel' headerText={`Ecart. Mensuel`} textAlign='left'/>
            
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default BilanJournalier;