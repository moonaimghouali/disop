import React, { useEffect } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/xpApi'
import { useDispatch, useSelector } from 'react-redux';
import { calculRegionProductionJournaliere } from '../../../utils/CalculProduction';

const UniteProductionData = ({productionData}) => {

    let grid;
    const RegionId = useSelector(state=>state.system.id)
    const dispatch = useDispatch()
    let emptyBilans = productionData.filter((unite)=> Object.getOwnPropertyNames(unite.production).length === 0 ).length
    let invalidBilans = productionData.filter((unite)=> unite.production.validation_xp === false ).length

    // validation column template 
    const validationTemplate = (props) => {
    const valdiation = props.production.validation_xp
    return (
      valdiation ? <div className='py-1 px-2 w-full rounded bg-green-50 text-green-600 font-semibold hover:bg-green-100'>Validee</div> 
      : <div className='py-1 px-2 w-full rounded bg-red-50 text-red-600 font-semibold hover:bg-red-100'>Non-Validee</div>
      )
    };
    

    const rowSelected = async ()=>{
      if (grid) {
        /** Get the selected row indexes */
        const selectedrowindex = grid.getSelectedRowIndexes();
        /** Get the selected records. */
        const selected = grid.getSelectedRecords()[0];
        alert(JSON.stringify(selected))
        if (selected.production !== {}) {
          //alert("here")
          let response = await api.updateUnitesProductionValidation({UniteId : selected.id, UniteProductionId :selected.production.id }) 
          
          if(response.data.success) {
            console.log("successful");
            dispatch(api.fetchRegionUnitesProduction({RegionId : selected.RegionId , journee_production : selected.production.journee_production}))
            let response2 = await api.postUnitesRealisation(selected)
          } 
        }else{
          alert("empty")
        }          
      } 
    }

    const handleClick = async () =>{
      //console.log(emptyBilans , invalidBilans);
      if(emptyBilans > 0 || invalidBilans > 0 ) return
      let bilanProductionRegion = calculRegionProductionJournaliere(productionData, RegionId)
      console.log(productionData , bilanProductionRegion);
      let response = await api.postRegionProduction(bilanProductionRegion)
      console.log(response)
    }
    

  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'> 
    
        <div className='p-2 w-full flex flex-row justify-between'>
          {emptyBilans !== 0 ? (<div>Il y'a {emptyBilans} unites qui n'ont pas encore cloturer la journee courante</div>) : (<div>  </div>)}
          <button onClick={handleClick} className='py-1 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>Cloturer La Journee</button>
        </div>
      
         <GridComponent  dataSource={productionData} rowSelected={rowSelected} ref={g => grid = g}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            <ColumnDirective field='code_unite' headerText='Unite' textAlign='left'/>
            <ColumnDirective field='production.journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='production.stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
            <ColumnDirective field='production.production_unite_tm' headerText='Production(TM)' textAlign='left'/>
            <ColumnDirective field='production.expedition_unite_tm' headerText='Expedition(TM)' textAlign='left'/>
            <ColumnDirective field='production.stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            <ColumnDirective field='production.validation_xp' headerText='Validation' textAlign='Center' template={validationTemplate} width={"150"}/>
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

        
    </div>
  )
}

export default UniteProductionData