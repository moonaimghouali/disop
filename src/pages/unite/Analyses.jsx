import React, {useState, useEffect} from 'react'
import PageHeader from '../../components/PageHeader'
import MenuAnalyses from './components/MenuAnalyses'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'

import { updateMenuMouvements } from '../../store/slices/menusSlice'
import * as api from '../../api/uniteApi'


const Analyses = () => {
    const [ analMenu, setAnalMenu] = useState({bac: -1, date : new Date( new Date() - 24*60*60*60 )})

  useEffect(()=>{
    console.log("menu", analMenu)
  },[analMenu.bac, analMenu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Resultats des" pageName="Analyses"/>

      <div className='h-full w-full mt-4 flex flex-col gap-4'>
        {/* Menu de Controle */}
        <MenuAnalyses menu={analMenu} setMenu={setAnalMenu} />

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
          {/* { !loading && ( */}
             <GridComponent height={"100%"} dataSource={[]}  allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
             <ColumnsDirective >
               <ColumnDirective field='date_operation' headerText='Date' textAlign='left'/>
               <ColumnDirective field='Bac.code_bacs' headerText='Bac' textAlign='left'/>
               <ColumnDirective field='temperature' headerText='Temperature' textAlign='left' />
               <ColumnDirective field='densite' headerText='Densite' textAlign='left' />
               <ColumnDirective field='salinite' headerText='Salinite' textAlign='left' />
               <ColumnDirective field='tvr' headerText='TVR' textAlign='left' />
               <ColumnDirective field='bsw' headerText='BSW' textAlign='left' />
              
             </ColumnsDirective>
             <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
            </GridComponent>

          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default Analyses