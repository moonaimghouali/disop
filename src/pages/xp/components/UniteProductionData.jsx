import React, { useEffect } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/xpApi'
import { useDispatch, useSelector } from 'react-redux';
import { updateBilanUniteRegion, updateBilanRegion } from '../../../store/slices/BilansSlice';
import { fetchUniteProductionJournaliere } from '../../../api/uniteApi';
import { calculRegionProductionJournaliere } from '../../../utils/CalculProduction';
import { toast } from 'react-toastify';

const UniteProductionData = ({productionData, setShowUnite, setShowRegion}) => {

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
        const selectedrowindex = grid.getSelectedRowIndexes();
        const selected = grid.getSelectedRecords()[0];
        if (Object.hasOwn(selected.production ,"stock_initial_tm")) {
          dispatch(updateBilanUniteRegion({hide : false , bilanProductionUnite : selected, mouvements : []}))
          setShowUnite(prev => !prev)

        }else{
          toast.warn("Les donnees de production de cette unites ne sont pas disponible.")
        }     
      } 
    }

    const handleClick = async () =>{
  
      if(emptyBilans > 0 || invalidBilans > 0 ) {
        setShowRegion(prev => !prev)

      }else{
        let bilanProductionRegion = calculRegionProductionJournaliere(productionData, RegionId)
        // alert(JSON.stringify(bilanProductionRegion))
        console.log(productionData);
        dispatch(updateBilanRegion({hide : false, bilanProductionRegion : bilanProductionRegion, bilansUnites : productionData}))
        setShowRegion(prev => !prev)
        
      }    
    }
    
  return (
    <div className='h-full col-span-8 bg-white rounded-sm shadow-sm'> 
    
        <div className='p-3 w-full flex flex-row justify-between items-center '>
          {emptyBilans !== 0 ? (<div>Il y'a {emptyBilans} unites qui n'ont pas encore cloturer la journee courante</div>) : (<div>  </div>)}
          {(emptyBilans === 0 && invalidBilans === 0) && (<button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>Cloturer La Journee</button>)}
        </div>
      
         <GridComponent  dataSource={productionData} rowSelected={rowSelected} ref={g => grid = g} statelessTemplates={['directiveTemplates']}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            <ColumnDirective field='production.journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='code_unite' headerText='Unite' textAlign='left'/>
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

export default UniteProductionData;