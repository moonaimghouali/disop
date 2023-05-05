import React, {useState, useEffect} from 'react'
import { PageHeader } from '../../components'
import {UtilisateurForm} from'./Forms'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {utilisateurs} from '../../data/utilisateursData';
import { IoMdAddCircleOutline} from 'react-icons/io'
import { MdDelete, MdEdit} from 'react-icons/md'

const Utilisateurs = () => {
  const[update, setUpdate] = useState(false)
  const[form, setForm] = useState(false)


  const temp =  (props) => {
    console.log(props);
    let handleModif = (props, user) =>{
      console.log("prop",props, user);
      setUpdate(true)
      setForm(true)
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
    // alert("working")
    setUpdate(false)
    setForm(true)
  }

  return (
  <div className="flex flex-col h-screen w-full bg-gray-100 px-8 py-8">
    <PageHeader className="mb-10" subTitle="Gestion des" pageName="Utilisateurs"/>  

    <div className='flex flex-col w-full h-full mt-8 rounded bg-white shadow-sm' >
      
      <div   className='flex flex-row-reverse p-2'>
          <button onClick={handleClick} className='p-2 text-white font-semibold bg-blue-600 rounded shadow hover:bg-blue-700 hover:shadow-md flex flex-row items-center'>
            <IoMdAddCircleOutline size={18} className="mr-1" color='#fff'/> Ajouter un utilisateur
          </button>
      </div>

        <GridComponent height={"100%"} dataSource={utilisateurs} allowPaging={true}  allowSorting={true} pageSettings={{pageSize:8}} >
          <Inject services={[Page, Sort, Filter, Group]}/>

        <ColumnsDirective>
        <ColumnDirective field='id' headerText='Id'  textAlign='left'/>
        <ColumnDirective field='nom' headerText='Nom' textAlign='left'/>
        <ColumnDirective field='prenom' headerText='Prenom' textAlign='left'/>
        <ColumnDirective field='email' headerText='E-mail' textAlign='left'/>
        <ColumnDirective field='role' headerText='Role' textAlign='left'/>
        <ColumnDirective field='id' headerText='Config' template={temp} width="90" textAlign='left'/>
        </ColumnsDirective>
        </GridComponent>
    </div>

    {form && (<UtilisateurForm setForm={setForm}/>)}

  </div>
  )
}

export default Utilisateurs