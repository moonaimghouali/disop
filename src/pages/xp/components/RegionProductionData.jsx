import React,{useEffect} from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/xpApi'
import { useDispatch } from 'react-redux';

const RegionProductionData = ({productionData}) => {
  let grid;
  const dispatch = useDispatch()

  const rowSelected = async ()=>{
    if (grid) {
      /** Get the selected row indexes */
      const selectedrowindex = grid.getSelectedRowIndexes();
      /** Get the selected records. */
      const selected = grid.getSelectedRecords()[0];
      alert(JSON.stringify(selected))       
    } 
  }
  

  const handleClick = () =>{

  }
    

  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'> 
    
        {/* <div className='p-3 w-full flex flex-row justify-between'>
          {Invalide !== 0 ? (<div>Il y'a {Invalide} unites qui n'ont pas encore cloturer la journee courante</div>) : (<div>  </div>)}
          <div></div>
          <button onClick={handleClick} className='py-1 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>Cloturer la journee</button>
        </div> */}
      
         <GridComponent  dataSource={productionData} rowSelected={rowSelected} ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            {/* <ColumnDirective field='code_unite' headerText='Unite' textAlign='left'/> */}
            <ColumnDirective field='journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
            <ColumnDirective field='production_region_tm' headerText='Production(TM)' textAlign='left'/>
            <ColumnDirective field='expedition_region_tm' headerText='Expedition(TM)' textAlign='left'/>
            <ColumnDirective field='stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            <ColumnDirective field='validation_xp' headerText='Validation' textAlign='Center' width={"150"}/>
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        
    </div>
  )
}

export default RegionProductionData