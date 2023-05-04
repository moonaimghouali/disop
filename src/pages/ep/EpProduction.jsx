import React,{useState, useEffect} from 'react'
import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import {PageHeader} from '../../components'
import {ProductionMenu} from './components'

const EpProduction = () => {

  const [prodMenu, setProdMenu] = useState({perimetre : -1, date : new Date(new Date()- 86400000) })
  const [production, setProduction] = useState([])

  const handleClick = ()=>{
    alert("production")
  }
  
  useEffect(()=>{

    console.log(prodMenu);

  },[prodMenu.perimetre, prodMenu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des" pageName="Puits"/>

      <ProductionMenu prodMenu={prodMenu} setProdMenu={setProdMenu}/>

      <div className='w-full h-full flex flex-col rounded bg-white shadow-sm' >
        <div div className='p-4 w-full flex flex-row-reverse'> 
          <button onClick={handleClick} className='py-2 px-4 rounded text-base text-white font-semibold shadow-md bg-orange-600 hover:bg-orange-700 hover:shadow-lg ease-in-out duration-150'>
            Calculer la production Corrigee
          </button>
        </div>

        <TreeGridComponent dataSource={production} allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}
          childMapping="puits" treeColumnIndex={0} >
            <ColumnsDirective>
              <ColumnDirective field='code' headerText='Code' textAlign='left'></ColumnDirective>
              <ColumnDirective field='nom' headerText='Nom' textAlign='left'></ColumnDirective>
              <ColumnDirective field='production_tm' headerText='Production (TM)' textAlign='left'></ColumnDirective>
              <ColumnDirective field='production_vm' headerText='Expedition (m3)' textAlign='left'></ColumnDirective>
              <ColumnDirective field='expedition_tm' headerText='Expedition (TM)' textAlign='left'></ColumnDirective>
              <ColumnDirective field='expedition_vm' headerText='Expedition (m3)' textAlign='left'></ColumnDirective>
            </ColumnsDirective>
          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>

      {/* Bilan */}


    </div>
  )
}

export default EpProduction
