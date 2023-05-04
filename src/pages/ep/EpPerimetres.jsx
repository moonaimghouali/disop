import React, { useState, useEffect } from 'react'
import {PageHeader} from '../../components'
import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import { PerimetresMenu } from './components'

const EpPerimetres = () => {
  const [perimetresMenu, setPerimetresMenu] = useState ( {perimetre : -1, date : new Date( new Date() - 24*60*60*1000)})

  useEffect(()=>{
    console.log("perimenu", perimetresMenu);
  },[perimetresMenu.perimetre, perimetresMenu.date])
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Production des " pageName="Perimetres"/>
      <PerimetresMenu perimetresMenu={perimetresMenu} setPerimetresMenu={setPerimetresMenu}/>

      <div className='w-full h-full flex flex-col rounded bg-white shadow-sm'>

      <TreeGridComponent  allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}
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
    </div>
  )
}

export default EpPerimetres