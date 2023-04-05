import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'

const Baremage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <div className='flex flex-row w-full gap-4'>
      <NavLink to="/p/unite/stock"> <FiArrowLeft size={38}/> </NavLink>
      <div className='text-3xl font-bold'>Table de baremage</div>   
      </div>
      {/* Info Section */}
      <div className='w-1/2 h-32 flex flex-col my-6 rounded-sm shadow-sm bg-white py-2 px-3' >
        <div className='text-xl font-semibold mt-1'>RA_310</div>
        <div className='mt-2 flex flex-row gap-8'>
          <div>etablie le : <b >31-12-2014</b> </div>
          <div>a mettre a jour le : <b>31-12-2024</b></div>
        </div>
        <div className='mt-2 '> etablie par : <b >Amine Mohammed</b></div>
      </div>

      {/* Table Baremage */}
      <div className='w-full h-full flex flex-col bg-white rounded-sm shadow-sm '>
        <div className='text-lg font-semibold pl-3 my-2'>Table de Baremage</div>
      <GridComponent height={"100%"}  allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:9}}>
          
          <ColumnsDirective >
            <ColumnDirective field='dm_valeur' headerText='Dm' textAlign='left'/>
            <ColumnDirective field='mm_valeur_00' headerText='00 (mm)' textAlign='left' />
            <ColumnDirective field='mm_valeur_10' headerText='10 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_20' headerText='20 (mm)' textAlign='left' />
            <ColumnDirective field='mm_valeur_30' headerText='30 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_40' headerText='40 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_50' headerText='50 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_60' headerText='60 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_70' headerText='70 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_80' headerText='80 (mm)' textAlign='left'/>
            <ColumnDirective field='mm_valeur_90' headerText='90 (mm)' textAlign='left'/>
          </ColumnsDirective>
          <Inject services={[Page, PdfExport, ExcelExport, Toolbar, Edit]} />
         </GridComponent>
      </div>
      
    </div>
  )
}

export default Baremage