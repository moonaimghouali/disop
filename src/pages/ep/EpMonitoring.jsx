import React, { useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import { MonitoringMenu, MonitoringView } from './components'

const EpMonitoring = () => {
    const [menu, setMenu] = useState({perimetre : -1, puits : -1})
    const [puits, setPuits] = useState(null)
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
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8 overflow-y-auto">
      <PageHeader subTitle="Monitoring des" pageName="Puits"/>

      <MonitoringMenu menu={menu} setMenu={setMenu} setPuits={setPuits}/>

      {show && (
        <div className='h-full w-full flex flex-col p-2 bg-white shadow-sm rounded-sm '>
            <div className='flex flex-row '> 
              <div className='px-2 py-1  bg-orange-500 text-white'>{puits?.code_puits}</div>  
              {(puits?.statut_puits === true) ? (<div className='px-2 py-1 bg-green-600 text-white'>Ouvert</div>) : (<div className='px-2 py-1 bg-red-600 text-white'>Ferme</div>)}
              <div className='px-2 py-1  bg-gray-800 text-white'>{puits?.type_puits}</div>
            </div>

            <MonitoringView puits={puits} />
            
        </div>
      )}
    </div>
  )
}

export default EpMonitoring