import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import MenuMouvements from './components/MenuMouvements'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { mouvements } from '../../data/data'
import * as calcul from '../../utils/CalculProduction';
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { updateMenuMouvements } from '../../store/slices/menusSlice'

const Mouvements = () => {
  
  const menuMouvements = useSelector((state) =>state.menus.menuMouvementsValue)
  // console.log(calcul.arrondirCote(10093.12)) 
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateMenuMouvements({operation : "ALL" , bac: -1}))
    console.log(menuMouvements)
  },[])
  
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Mouvements de" pageName="Bacs"/>

      <div className='h-full w-full my-8 flex flex-col gap-6'>
        {/* Menu de Controle */}
        <MenuMouvements type={true} />

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
         <GridComponent height={"100%"} dataSource={mouvements} editOptions={editOptions} allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='dateOperation' headerText='Date' textAlign='left'/>
            <ColumnDirective field='typeOperation' headerText='Mouvement' textAlign='left'/>
            <ColumnDirective field='codeBac' headerText='Bac' textAlign='left'/>
            {/* <ColumnDirective field='initiale_cote' headerText='Cote' textAlign='left'/>
            <ColumnDirective field='initiale_temperature' headerText='Temperature' textAlign='left'/>
            <ColumnDirective field='initiale_densite' headerText='Densite' textAlign='left'/> */}
            <ColumnDirective field='initialVolumeApparent' headerText='Volume apparent(m3)' textAlign='left'/>
            <ColumnDirective field='initialCoeffCorrection' headerText='Coef K' textAlign='left'/>
            <ColumnDirective field='itnitalVolumeStandard' headerText='Volume Standard (m3)' textAlign='left'/>
            {/* <ColumnDirective field='finale_cote' headerText='Cote' textAlign='left'/>
            <ColumnDirective field='finale_temperature' headerText='Temperature' textAlign='left'/>
            <ColumnDirective field='finale_densite' headerText='Densite' textAlign='left'/> */}
            <ColumnDirective field='finalVolumeApparent' headerText='Volume apparent(m3)' textAlign='left'/>
            <ColumnDirective field='finalCoeffCorrection' headerText='Coef K' textAlign='left'/>
            <ColumnDirective field='finalVolumeStandard' headerText='Volume Standard (m3)' textAlign='left'/>
            <ColumnDirective field='resultaVolumeStandard' headerText='Volume(m3)' textAlign='left'/>
            <ColumnDirective field='resultatMasseStandard' headerText='Masse(TM)' textAlign='left'/>
          </ColumnsDirective>
          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
         </GridComponent>

        </div>
      </div>
    </div>
  )
}

export default Mouvements