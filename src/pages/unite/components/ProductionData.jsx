import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import * as api from '../../../api/uniteApi'
import { calculUniteProductionJournaliere } from '../../../utils/CalculProduction'
import { useDispatch, useSelector } from 'react-redux'
import { updateBilanUnite }from '../../../store/slices/BilansSlice'
import { toast } from 'react-toastify'
import {BilanJournalierUnite} from '../../../bilans'

const ProductionData = ({uniteProduction, setPopUp}) => {
  let grid;
  let isResp = useSelector((state) => state.user.userInfo.role) 
  let UniteId = useSelector((state) =>state.system.id)
  const dispatch = useDispatch()
  const [ bilan, setBilan ] =useState(false)
  const [ production, setProduction ] =useState([])


const rowSelected = ()=>{
  if (grid) {
    /** Get the selected row indexes */
    const selectedrowindex = grid.getSelectedRowIndexes();
    /** Get the selected records. */
    const selectedrecords = grid.getSelectedRecords()[0];
    setProduction(selectedrecords)
    setBilan(true)
    // alert( JSON.stringify(selectedrecords));
} }

// validation column template 
  const validationTemplate = (props) => {
    const valdiation = props.validation_xp
    return (
      valdiation ? <div className='py-1 px-2 w-full rounded bg-green-50 text-green-600 font-semibold hover:bg-green-100'>Validee</div> 
      : <div className='py-1 px-2 w-full rounded bg-red-50 text-red-600 font-semibold hover:bg-red-100'>Non-Validee</div>
      )
  };

  const handleClick = async () =>{
    
    let response = await api.fetchUniteProductionJournaliere(UniteId)

    if (response.data.data.length === 0) {
      toast.error("Vous ne pouvez pas cloturer la production, Aucun mouvement trouvee pour la journee courante")
      return
    }

    let resultat = await calculUniteProductionJournaliere(response.data.data)
    
    if (resultat) {
      setPopUp(prev => !prev)
      dispatch(updateBilanUnite({bilanProductionUnite : resultat.bilanProductionUnite, bilanProductionBacs : resultat.bilanProductionBacs, bacsOperations : response.data.data, hide: false}))
    }else{
      toast.warn("Vous ne pouvez pas cloturer la production, veiullez verifier les mouvements de la journee precedente")
      return
    }
  }

  return (
    <div className='h-full w-full bg-white rounded-sm shadow-sm'> 
      <div className='w-full h-full bg-white'>
        {(isResp === "Resp_Unite") && (<div className='p-2 w-full flex flex-row-reverse'> <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>Cloturer La Journee</button></div>)}
         <GridComponent  dataSource={uniteProduction} rowSelected={rowSelected} ref={g => grid = g} statelessTemplates={['directiveTemplates']}
         allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:7}}>
          
          <ColumnsDirective >
            <ColumnDirective field='journee_production' headerText='Journee' textAlign='left'/>
            <ColumnDirective field='stock_initial_tm' headerText='Stock Initial(TM)' textAlign='left'/>
            {/* <ColumnDirective field='stock_initial_vm' headerText='Stock Initial(m3)' textAlign='left'/> */}
            <ColumnDirective field='production_unite_tm' headerText='Production (TM)' textAlign='left'/>
            {/* <ColumnDirective field='production_unite_vm' headerText='Production (m3)' textAlign='left'/> */}
            <ColumnDirective field='expedition_unite_tm' headerText='Expedition (TM)' textAlign='left'/>
            <ColumnDirective field='purge_unite_tm' headerText='Purge (TM)' textAlign='left'/>
            {/* <ColumnDirective field='expedition_unite_vm' headerText='Expedition (m3)' textAlign='left'/> */}
            <ColumnDirective field='stock_final_tm' headerText='Stock Final(TM)' textAlign='left'/>
            {/* <ColumnDirective field='stock_final_vm' headerText='Stock FJ(m3)' textAlign='left'/> */}
            <ColumnDirective field='validation_xp' headerText='Validation' textAlign='Center' template={validationTemplate} width={"150"} />
              
          </ColumnsDirective>

          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />

         </GridComponent>

          {bilan && <BilanJournalierUnite setBilan={setBilan} data={production} />}
        </div>
    </div>
  )
}

export default ProductionData