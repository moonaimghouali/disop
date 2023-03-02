import React from 'react'
import PageHeader from '../../components/PageHeader'
import MenuMouvements from './components/MenuMouvements'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import { mouvements } from '../../data/data'

const Mouvements = () => {

  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Mouvements de" pageName="Bacs"/>

      <div className='h-full w-full my-8 flex flex-col gap-6'>
        {/* Menu de Controle */}
        <MenuMouvements type={true}/>

        {/* table de mouvements */}
        <div className='w-full h-full bg-white'>
         <GridComponent height={"100%"} dataSource={mouvements} editOptions={editOptions} toolbarOptions={toolbarOptions}  allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='date_operation' headerText='Date' textAlign='left'/>
            <ColumnDirective field='type_operation' headerText='Type' textAlign='left'/>
            <ColumnDirective field='code_bac' headerText='Bac' textAlign='left'/>
            <ColumnDirective field='initiale_cote' headerText='Cote' textAlign='left'/>
            <ColumnDirective field='initiale_temperature' headerText='Temperature' textAlign='left'/>
            <ColumnDirective field='initiale_densite' headerText='Densite' textAlign='left'/>
            <ColumnDirective field='initiale_volume_apparent' headerText='Volume apparent(m3)' textAlign='left'/>
            <ColumnDirective field='initiale_coef_correction' headerText='Coef K' textAlign='left'/>
            <ColumnDirective field='itnitale_volume_standard' headerText='Volume Standard (m3)' textAlign='left'/>
            <ColumnDirective field='finale_cote' headerText='Cote' textAlign='left'/>
            <ColumnDirective field='finale_temperature' headerText='Temperature' textAlign='left'/>
            <ColumnDirective field='finale_densite' headerText='Densite' textAlign='left'/>
            <ColumnDirective field='finale_volume_apparent' headerText='Volume apparent(m3)' textAlign='left'/>
            <ColumnDirective field='finale_coef_correction' headerText='Coef K' textAlign='left'/>
            <ColumnDirective field='finale_volume_standard' headerText='Volume Standard (m3)' textAlign='left'/>
            <ColumnDirective field='resultat_volume_standard' headerText='Volume(m3)' textAlign='left'/>
            <ColumnDirective field='resultat_masse_standard' headerText='Masse(TM)' textAlign='left'/>
          </ColumnsDirective>
          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
         </GridComponent>

        </div>
      </div>
    </div>
  )
}

export default Mouvements