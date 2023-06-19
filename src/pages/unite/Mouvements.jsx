import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import MenuMouvements from './components/MenuMouvements'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
// import { useConstructor } from '@toolz/use-constructor';
import { updateMenuMouvements } from '../../store/slices/menusSlice'
import * as api from '../../api/uniteApi'

const Mouvements = () => {
  
  const UniteId = useSelector((state) => state.system.id)
  const menuMouvements = useSelector((state) =>state.menus.menuMouvementsValue)
  const {loading, mouvements, error} = useSelector((state) =>state.mouvements)
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };

  const [MouvementsMenu, setMouvementsMenu] = useState({operation : "All", bac: -1})
  
  const dispatch = useDispatch()

  // runs once the component is created 
  // useEffect(()=>{
  //   // dispatch(updateMenuMouvements({operation : "All" , bac: -1}))
  //   dispatch(api.fetchMouvements({operation : MenuMouvements.operation , bac :MenuMouvements.bac, UniteId}))
  //   // console.log(mouvements);
  // },[])

  // runs everytime the menumouvements changes
  

  useEffect(()=>{
    dispatch(api.fetchMouvements({operation : MouvementsMenu.operation , bac : MouvementsMenu.bac, UniteId}))
  },[ MouvementsMenu.operation , MouvementsMenu.bac])


  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Mouvements de" pageName="Bacs"/>

      <div className='h-full w-full my-8 flex flex-col gap-6'>
        {/* Menu de Controle */}
        <MenuMouvements type={true} MouvementsMenu={MouvementsMenu} setMouvementsMenu={setMouvementsMenu}/>

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
          {/* { !loading && ( */}
             <GridComponent height={"100%"} dataSource={mouvements} editOptions={editOptions} allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
             <ColumnsDirective >
               <ColumnDirective field='date_operation' headerText='Date' textAlign='left'/>
               <ColumnDirective field='type_operation' headerText='Mouvement' textAlign='left' />
               <ColumnDirective field='Bac.code_bacs' headerText='Bac' textAlign='left'/>
               {/* <ColumnDirective field='initiale_cote' headerText='Cote' textAlign='left'/>
               <ColumnDirective field='initiale_temperature' headerText='Temperature' textAlign='left'/>
               <ColumnDirective field='initiale_densite' headerText='Densite' textAlign='left'/> */}
               <ColumnDirective field='initiale_volume_apparent' headerText='Volume apparent(m3)' textAlign='left' />
               <ColumnDirective field='initiale_coef_correction' headerText='Coef K' textAlign='left'/>
               <ColumnDirective field='initiale_volume_standard' headerText='Volume Standard (m3)' textAlign='left'/>
               {/* <ColumnDirective field='finale_cote' headerText='Cote' textAlign='left'/>
               <ColumnDirective field='finale_temperature' headerText='Temperature' textAlign='left'/>
               <ColumnDirective field='finale_densite' headerText='Densite' textAlign='left'/> */}
               <ColumnDirective field='finale_volume_apparent' headerText='Volume apparent(m3)' textAlign='left'/>
               <ColumnDirective field='finale_coef_correction' headerText='Coef K' textAlign='left'/>
               <ColumnDirective field='finale_volume_standard' headerText='Volume Standard (m3)' textAlign='left'/>
               <ColumnDirective field='resultat_volume_standard' headerText='Volume(m3)' textAlign='left'/>
               <ColumnDirective field='resultat_masse_standard' headerText='Masse(TM)' textAlign='left'/>
             </ColumnsDirective>
             <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
            </GridComponent>

          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default Mouvements