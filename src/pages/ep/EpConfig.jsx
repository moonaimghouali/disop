import React,{useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-react-grids'

import { useSelector } from 'react-redux'
import * as api from '../../api/epApi'


const EpConfig = () => {
  const [puits, setPuits] = useState([])

  const [perimetreData, setPerimetreData] = useState([])
  const perimetreFields = {text : "perimetre" , value :"id" }

  const [unitesData, setUnitesData] = useState([])
  const uniteFields = {text : "code_unite" , value :"id" }

  const [uniteChoisi, setUniteChoisi] = useState(null)
  
  let RegionId = useSelector((state)=> state.system.id)
  const [perimetre, setPerimetre] = useState(-1)  

  useEffect(()=>{
    const fn = async() =>{
      let perimetres = await api.fetchPerimetres(RegionId) 

      if (perimetres.length ===0) return

      let perims = []
      perimetres.map((p) =>{
          let perimetre = { perimetre : p.nom_perimetre, id : p.id }
          perims.push(perimetre)
      })

      
      setPerimetreData(perims)
  }
  fn()
  },[])

  useEffect(()=>{
    const fn = async() =>{  
      let response = await api.fetchPuits(perimetre) 
      if(response.length >0) setPuits(response)

      let res = await api.fetchUnites(RegionId)
      setUnitesData(res)

      console.log("state",res, unitesData)
      
  }
  fn()
  },[perimetre])

  const handleUniteChange = (e) =>{
    alert(e.value)
    // await update uniteId
  }

  const handlePerimetreChange = (e) =>{
    alert(e.value)
    // await update perimetreId
  }

  const uniteTemplate = (props) => {
    return (
      <div className='w-fit'>
        <DropDownListComponent value={props.UniteId} change={handleUniteChange} id="entite" fields={uniteFields} dataSource={unitesData}  placeholder={"Unite"} ></DropDownListComponent>
      </div>
    )
  }

  const perimetreTemplate = (props) => {
    return (
      <div className='w-full font-semibold'>
        {/* <DropDownListComponent value={props.PerimetreId} change={handlePerimetreChange} id="entite" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetre"} ></DropDownListComponent> */}
        {perimetreData.filter((p)=> p.id === props.PerimetreId)[0]?.nom_perimetre}
      </div>
    )
  }

  const statutTemplate = (props) =>(
    props.statut_puits ? 
    ( <div className='font-semibold text-green-600'>Ouvert</div>) : 
    ( <div className='font-semibold text-red-600'>Ferme</div>)
   
  )

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Configuration des" pageName="Puits"/>
      
      {/* menu perimetres */}
      <div className='w-full flex flex-row items-center px-2 h-16 bg-white rounded-sm mt-4 mb-4 shadow-sm'>
        <div className='w-fit mr-4'>
          <DropDownListComponent value={perimetreData[0]?.id} change={(e)=>setPerimetre(e.value)} id="entite" fields={perimetreFields} dataSource={perimetreData}  placeholder={"Perimetre"} ></DropDownListComponent>
        </div>
      </div>

      {/* config Puits */}
      <div className="w-full h-full flex flex-col rounded bg-white shadow-sm">
        <GridComponent dataSource={puits} allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}>
          <ColumnsDirective>
            <ColumnDirective field='id' headerText='Id' width="70" textAlign='left'></ColumnDirective>
            <ColumnDirective field='code_puits' headerText='Code' textAlign='left'></ColumnDirective>
            <ColumnDirective field='type_puits' headerText='Type' textAlign='left'></ColumnDirective>
            <ColumnDirective field='statut_puits' headerText='Statut' textAlign='left' template={statutTemplate}></ColumnDirective>
            <ColumnDirective field='Perimetre' headerText='Perimetre' textAlign='left'  template={perimetreTemplate}></ColumnDirective>
            <ColumnDirective field='Unite' headerText='Unite' textAlign='left' template={uniteTemplate}></ColumnDirective>
          </ColumnsDirective>

          <Inject services={[Page]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default EpConfig