import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'


const Spe = ({rapport}) => {
    let grid;
    

  return (
    <div className='w-full h-full bg-white rounded-sm shadow-sm'>
     
      
      <div className='py-2 pl-2'> Rapport SPE du mois "<b>{rapport && rapport.date && rapport.date.toLocaleString('fr-FR', { month: 'long', year: "numeric" })}</b>"</div>
        <GridComponent   ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_region' headerText='Region' textAlign='left'/>
            <ColumnDirective field='realisation_prev' headerText={`Real. ${rapport && rapport.date && rapport.date.getFullYear() -1}`} textAlign='left'/>
            <ColumnDirective field='cumul_realisation_prev' headerText= {`Real.Cumul ${rapport && rapport.date && rapport.date.getFullYear() -1}`} textAlign='left'/>
            <ColumnDirective field='prevision_realisation' headerText={`Prev.Real. ${rapport && rapport.date && rapport.date.getFullYear() }`} textAlign='left'/>
            <ColumnDirective field='realisation' headerText={`Real. ${rapport && rapport.date && rapport.date.getFullYear() }`} textAlign='left'/>
            <ColumnDirective field='taux_realisation' headerText={`Taux Real.`} textAlign='left'/>
            <ColumnDirective field='prevision_cumul_realisation' headerText={`Prev.Cumul ${rapport && rapport.date && rapport.date.getFullYear() }`}  textAlign='left'/>
            <ColumnDirective field='cumul_realisation' headerText={`Real. Cumul ${rapport && rapport.date && rapport.date.getFullYear() }`} textAlign='left'/>
            <ColumnDirective field='taux_cumul_realisation' headerText={`Taux Real.`} textAlign='left'/> 
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

    </div>
  )
}

export default Spe