import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/xpApi'
import { useDispatch, useSelector } from 'react-redux';

const PerimetreProductionData = ({productionData}) => {
  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'>   
         
         <GridComponent  dataSource={productionData} 
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            <ColumnDirective field='id' headerText='Id' textAlign='left'/>
            <ColumnDirective field='code_perimetre' headerText='Perimetre' textAlign='left'/>
            <ColumnDirective field='production.stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
            <ColumnDirective field='production.production_perimetre_tm' headerText='Production(TM)' textAlign='left'/>
            <ColumnDirective field='production.expedition_perimetre_tm' headerText='Expedition(TM)' textAlign='left'/>
            <ColumnDirective field='production.stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            {/* <ColumnDirective field='production.validation_xp' headerText='Validation' textAlign='Center' template={validationTemplate} width={"150"}/> */}
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        
    </div>
  )
}

export default PerimetreProductionData