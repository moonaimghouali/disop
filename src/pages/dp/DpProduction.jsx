import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'
import { useDispatch, useSelector} from 'react-redux'
import {data} from '../../data/TreeData'
import * as api from '../../api/dpApi'
import { dateToString } from '../../utils/Date'

const DpProduction = () => {
  const [ production, setProduction ] = useState([])
  const menuDateDp = useSelector((state)=>state.menus.menuDateDp)

  useEffect(  ()=>{
    //  const fetchData = async ()=>{
    //   let repsonse = await api.fetchProductionRegionByUnites()
    //   console.log(repsonse);
    //   setProduction(repsonse)
    // }
    // fetchData()
    console.log(menuDateDp);
    console.log(dateToString(menuDateDp.start ) , dateToString(menuDateDp.end));
  },[menuDateDp.start, menuDateDp.end])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Production" subTitle="Consulter la" />
      <ControlMenu/>
      
      <div className='flex w-full h-full rounded bg-white shadow-sm' >

        <TreeGridComponent dataSource={production} allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}
          childMapping="unites" treeColumnIndex={0} >

            <ColumnsDirective>
              <ColumnDirective field='code' headerText='Code' textAlign='left'></ColumnDirective>
              <ColumnDirective field='nom' headerText='Nom' textAlign='left'></ColumnDirective>
              <ColumnDirective field='stock_initial_tm' headerText='Stock Initial' textAlign='left'></ColumnDirective>
              <ColumnDirective field='production_tm' headerText='Production' textAlign='left'></ColumnDirective>
              <ColumnDirective field='expedition_tm' headerText='Expedition' textAlign='left'></ColumnDirective>
              <ColumnDirective field='stock_final_tm' headerText='Stock Final' textAlign='left'></ColumnDirective>
            </ColumnsDirective>

          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>
    </div>
  )
}

export default DpProduction