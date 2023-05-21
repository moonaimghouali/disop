import React, { useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import { MonitoringMenu } from './components'

const EpMonitoring = () => {
    const [menu, setMenu] = useState({perimetre : -1, puits : -1})
    const [ show, setShow ] = useState(false)

    useEffect(()=>{
        if (menu.puits !== -1) {
            console.log(menu);
            setShow(true)
        }else{
            setShow(false)
        }
    },[menu.puits])
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Monitoring des" pageName="Puits"/>

      <MonitoringMenu menu={menu} setMenu={setMenu}/>

      {show && (
        <div className='h-full w-full grid grid-cols-2 grid-rows-2 gap-4 bg-white shadow-sm'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
      )}
    </div>
  )
}

export default EpMonitoring