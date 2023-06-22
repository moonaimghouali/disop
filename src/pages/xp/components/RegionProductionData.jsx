import React,{useEffect, useState} from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/xpApi'
import { useDispatch } from 'react-redux';
import { BilanJournalierRegion} from '../../../bilans'

const RegionProductionData = ({productionData}) => {
  let grid;
  const dispatch = useDispatch()

  const [bilan, setBilan] = useState(false)
  const [ production, setProduction] = useState([])

  const rowSelected = async ()=>{
    if (grid) {
      /** Get the selected row indexes */
      const selectedrowindex = grid.getSelectedRowIndexes();
      /** Get the selected records. */
      const selected = grid.getSelectedRecords()[0];
      setProduction(selected)
      setBilan(true)
      // alert(JSON.stringify(selected))       
    } 
  }
  
  const handleClick = () =>{

  }
    
  // validation column template 
  const validationTemplate = (props) => {
    const valdiation = props.validation_xp
    return (
      valdiation ? <div className='py-1 px-2 w-full rounded bg-green-50 text-green-600 font-semibold hover:bg-green-100'>Validee</div> 
      : <div className='py-1 px-2 w-full rounded bg-red-50 text-red-600 font-semibold hover:bg-red-100'>Non-Validee</div>
      )
    };

  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'> 

         <GridComponent  dataSource={productionData} rowSelected={rowSelected} ref={g => grid = g} statelessTemplates={['directiveTemplates']}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            {/* <ColumnDirective field='code_unite' headerText='Unite' textAlign='left'/> */}
            <ColumnDirective field='journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
            <ColumnDirective field='production_region_tm' headerText='Production(TM)' textAlign='left'/>
            <ColumnDirective field='expedition_region_tm' headerText='Expedition(TM)' textAlign='left'/>
            <ColumnDirective field='stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            <ColumnDirective field='validation_xp' headerText='Validation' textAlign='Center' template={validationTemplate} width={"150"}/>
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

         {bilan && <BilanJournalierRegion setBilan={setBilan} data={production}/>}
    
    </div>
  )
}

export default RegionProductionData