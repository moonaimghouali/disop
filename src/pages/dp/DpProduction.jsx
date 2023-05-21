import { TreeGridComponent,ColumnsDirective, ColumnDirective, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid'
import React, {useEffect, useState} from 'react'
import PageHeader from '../../components/PageHeader'
import {ProdMenu} from './components'
import {data} from '../../data/TreeData'
import * as api from '../../api/dpApi'
import { dateToString } from '../../utils/Date'

const DpProduction = () => {
  const [ production, setProduction ] = useState([])
  const [ menuProd, setMenuProd] = useState({journalier : true, date : new Date( new Date() - 24*60*60*1000) })
  // const menuDateDp = useSelector((state)=>state.menus.menuDateDp)

  useEffect(()=>{
     const fetchData = async ()=>{
      if (menuProd.journalier) {
        let journee = new Date(menuProd.date).toISOString().split("T")[0]
        console.log(journee);
        let repsonse = await api.fetchDailyProduction(journee)
        setProduction(repsonse.res)
        console.log(repsonse);
      }else{
        console.log(menuProd.date);
        // endOfMonth = ne
      }  
    }

    fetchData()
  },[menuProd.journalier, menuProd.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Production" subTitle="Consulter la" />

      <ProdMenu menuProd={menuProd} setMenuProd={setMenuProd}/>
      
      <div className='flex w-full h-full mt-2 rounded bg-white shadow-sm' >

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