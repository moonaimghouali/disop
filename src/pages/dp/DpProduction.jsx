import { TreeGridComponent, Inject, Page } from '@syncfusion/ej2-react-treegrid'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import ControlMenu from './components/ControlMenu'
import {data} from '../../data/TreeData'

const DpProduction = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader pageName="Production" subTitle="Consulter la" />
      <ControlMenu/>
      <div className='flex w-full h-full rounded bg-white shadow-sm' >

        <TreeGridComponent dataSource={data} allowPaging={true} pageSettings={{pageSize:9}} height={"100%"}
          childMapping="UNITES" treeColumnIndex={1} >
          <Inject services={[Page]} />
        </TreeGridComponent>
      </div>
    </div>
  )
}

export default DpProduction