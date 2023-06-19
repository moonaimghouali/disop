import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import * as api from '../../api/uniteApi'

const Baremage = () => {
  let {id} =  useParams();
  let uniteBacs = useSelector((state)=>state.bacs.uniteBacs)
  let [baremeTable, setBaremeTable] = useState([])
  let [bareme, setBareme] = useState({})
  
  useEffect( ()=>{
  let fn = async () =>{
    //setBaremeTable([])
    let bac = uniteBacs.filter((bac)=>bac.code_bacs ===id)

    try {
      let response  = await api.fetchTableBaremage(bac[0].id);
      if(response.data.success){
        try {
          let responseBareme = await api.fetchBareme(bac[0].id);
          if(responseBareme.data.success) {
            setBareme(responseBareme.data.data[0])
          }
          
          
        } catch (error) {
          console.log(error.message)
        }
      }
      let values = response.data.data
      // var row = {dm_valeur : -1, mm_valeur_00 : -1,  mm_valeur_10 : -1, mm_valeur_20 : -1, mm_valeur_30 : -1, mm_valeur_40 : -1, mm_valeur_50 : -1, mm_valeur_60 : -1, mm_valeur_70 : -1, mm_valeur_80 : -1, mm_valeur_90 : -1, }
      let j = 0
      let temp = []
      let array = []

        values.map((item) => {
          // row[`mm_valeur_${j}0`] = item.volume_apparent
          temp.push(item.volume_apparent)
          j++
          if (j === 10 ) {
            let row = {dm_valeur : item.dm_valeur, mm_valeur_00 : temp[0],  mm_valeur_10 : temp[1], mm_valeur_20 : temp[2], mm_valeur_30 : temp[3], mm_valeur_40 : temp[4], mm_valeur_50 : temp[5], mm_valeur_60 : temp[6], mm_valeur_70 : temp[7], mm_valeur_80 : temp[8], mm_valeur_90 : temp[9] }
            array.push(row)
            temp = []
            j=0
          } 
        })
      
      setBaremeTable(array)

    } catch (error) {
      console.log(error);
    }
  }
  fn()
  },[])


  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <div className='flex flex-row w-full gap-4'>
      <NavLink to="/p/unite/stock"> <FiArrowLeft size={38}/> </NavLink>
      <div className='text-3xl font-bold'>Table de baremage du bac {id}</div>   
      </div>
      {/* Info Section */}
      <div className='w-1/2 h-32 flex flex-col my-4 rounded-sm shadow-sm bg-white py-2 px-3' >
        <div className='text-xl font-semibold mt-1'>Bac "{id}"</div>
        <div className='mt-2 flex flex-row gap-8'>
          <div>etablie le : <b >{/*new Date(bareme.date_creation).toISOString().split("T")[0]*/ bareme.date_creation}</b> </div>
          <div>a mettre a jour le : <b>{/*new Date(bareme.date_mis_a_jour).toISOString().split("T")[0]*/ bareme.date_mis_a_jour}</b></div>
        </div>
        <div className='mt-2 '> etablie par : <b >{bareme.etablie_par}</b></div>
      </div>

      {/* Table Baremage */}
      <div className='w-full h-full flex flex-col bg-white rounded-sm shadow-sm '>
        <div className='text-lg font-semibold pl-3 my-1'>Table de Baremage</div>
      <GridComponent dataSource={baremeTable} height={"100%"}  allowPaging={true} allowPdfExport={true} allowExcelExport={true} pageSettings={{pageSize:8}}>
          
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