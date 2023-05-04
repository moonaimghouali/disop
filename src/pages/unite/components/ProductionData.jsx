import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import {production } from '../../../data/productionData'
import * as api from '../../../api/uniteApi'
import { calculUniteProductionJournaliere } from '../../../utils/CalculProduction'
import { useDispatch, useSelector } from 'react-redux'
import { updateBilanUnite }from '../../../store/slices/BilansSlice'

const ProductionData = ({uniteProduction, setPopUp}) => {
  let grid;
  let isResp = useSelector((state) => state.user.userInfo.role) 
  let UniteId = useSelector((state) =>state.system.id)
  const dispatch = useDispatch()


const rowSelected = ()=>{
  if (grid) {
    /** Get the selected row indexes */
    const selectedrowindex = grid.getSelectedRowIndexes();
    /** Get the selected records. */
    const selectedrecords = grid.getSelectedRecords()[0];
    alert( JSON.stringify(selectedrecords));
} }

// validation column template 
  const validationTemplate = (props) => {
    const valdiation = props.validation
    return (
      valdiation ? <div className='py-1 px-2 w-full rounded bg-green-50 text-green-600 font-semibold hover:bg-green-100'>Validee</div> 
      : <div className='py-1 px-2 w-full rounded bg-red-50 text-red-600 font-semibold hover:bg-red-100'>Non-Validee</div>
      )
};

const handleClick = async () =>{
  setPopUp(prev => !prev)
  let response = await api.fetchUniteProductionJournaliere(UniteId)
  console.log("uniteProd",response);
  let resultat = await calculUniteProductionJournaliere(response.data.data)
  if (resultat) {
    //console.log("here", resultat , response.data.data);
    dispatch(updateBilanUnite({bilanProductionUnite : resultat.bilanProductionUnite, bilanProductionBacs : resultat.bilanProductionBacs, bacsOperations : response.data.data, hide: false}))
  }
}

  return (
    <div className='h-full w-full bg-white rounded-sm shadow-sm'> 
      <div className='w-full h-full bg-white'>
        {!(isResp === "Resp_Unite ") && (<div className='p-4 w-full flex flex-row-reverse'> <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>Cloturer La Journee</button></div>)}
         <GridComponent  dataSource={uniteProduction} rowSelected={rowSelected} ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText='Stock Initial(m3)' textAlign='left'/>
            <ColumnDirective field='stock_initial_vm' headerText='Stock Initial(m3)' textAlign='left'/>
            <ColumnDirective field='production_unite_tm' headerText='Production (TM)' textAlign='left'/>
            <ColumnDirective field='production_unite_vm' headerText='Production (m3)' textAlign='left'/>
            <ColumnDirective field='expedition_unite_tm' headerText='Expedition (TM)' textAlign='left'/>
            <ColumnDirective field='expedition_unite_vm' headerText='Expedition (m3)' textAlign='left'/>
            <ColumnDirective field='stock_final_tm' headerText='Stock FJ(m3)' textAlign='left'/>
            <ColumnDirective field='stock_final_vm' headerText='Stock FJ(m3)' textAlign='left'/>
            <ColumnDirective field='validation_xp' headerText='Validation' textAlign='Center' template={validationTemplate} width={"150"} />
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        </div>
    </div>
  )
}

export default ProductionData