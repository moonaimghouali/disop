import React from 'react'
import { PageHeader } from '../../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { IoMdAddCircleOutline} from 'react-icons/io'
import { MdDelete, MdEdit} from 'react-icons/md'
import {perimetres} from '../../data/perimetresData'

const Perimetres = () => {

  const temp =  (props) => {
    let handleModif = () =>{

    } 
    let handleDelete = () =>{

    } 
    
    return (
    <div className='flex flex-row items-center justify-center gap-2'>
        <button onClick={handleModif} className='h-8 w-8 rounded-md shadow hover:shadow-md flex flex-row items-center justify-center bg-amber-500 hover:bg-amber-600 transition-all ease-in-out duration-150'> 
        <MdEdit size={13}  color='#fff'/> 
        </button>
        <button onClick={handleDelete} className='h-8 w-8 rounded-md shadow hover:shadow-md flex flex-row items-center justify-center bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-150'> 
        <MdDelete size={13} color='#fff'/> 
        </button>
    </div>
    )};

  const handleClick = () =>{
    alert("working")
  }

  return (
  <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader className="mb-10" subTitle="Gestion des" pageName="Perimetres"/>  
    
    <div className='flex flex-col w-full h-full mt-8 rounded bg-white shadow-sm' >
      
        <div   className='flex flex-row-reverse p-2'>
          <button onClick={handleClick} className='p-2 text-white font-semibold bg-blue-600 rounded shadow hover:bg-blue-700 hover:shadow-md flex flex-row items-center'>
            <IoMdAddCircleOutline size={18} className="mr-1" color='#fff'/> 
            Ajouter un perimetre
          </button>
        </div>

      <GridComponent dataSource={perimetres} allowPaging={true}  allowSorting={true} pageSettings={{pageSize:8}} height={"100%"}>
        <Inject services={[Page, Sort, Filter, Group]}/>

        <ColumnsDirective>
        <ColumnDirective field='id' headerText='Id' textAlign='left'/>
        <ColumnDirective field='code_perimetre' headerText='Code' textAlign='left'/>
        <ColumnDirective field='nom_perimetre' headerText='Nom' textAlign='left'/>
        <ColumnDirective field='nom_region' headerText='Region' textAlign='left'/>
        <ColumnDirective field='modify' headerText='Config' template={temp} width="90" textAlign='left'/>
        </ColumnsDirective>
      </GridComponent>
    </div>
    
  </div>
  )
}

export default Perimetres