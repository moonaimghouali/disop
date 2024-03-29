import React, { useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import { MonitoringMenu, MonitoringView, HistoricView } from './components'
import { ToggleSwitch } from '../../components/'

const EpMonitoring = () => {
    const [menu, setMenu] = useState({perimetre : -1, puits : -1})
    const [puits, setPuits] = useState(null)
    const [ show, setShow ] = useState(false)
    const [toggle, setToggle] = useState(false)

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
          <div className='flex flex-row bg-slate-50 shadow rounded-2xl p-1 font-semibold'>
            <div className='flex flex-row flex-1'> 
              <div className='px-2 py-1  text-orange-500 '>{puits?.code_puits}</div>  
              {(puits?.statut_puits === true) ? (<div className='px-2 py-1 text-green-600 '>Ouvert</div>) : (<div className='px-2 py-1 text-red-600 '>Ferme</div>)}
              <div className='px-2 py-1  text-gray-800 '>{puits?.type_puits}</div>
            </div>

              <div className='ml-12 flex flex-row items-center gap-4 justify-center mr-8'> {!toggle && (<div>Vue Historique</div>)} {toggle && (<div>Vue Temps-Reel</div>)} <ToggleSwitch toggle={toggle} setToggle={setToggle} /></div>
          </div>
            

            {toggle && (<MonitoringView puits={puits} setToggle={setToggle} />)}
            {!toggle && (<HistoricView puits={puits} setToggle={setToggle} />)}
            {/* <HistoricView puits={puits} setToggle={setToggle}/> */}
            
        </div>
      )}
    </div>
  )
}

export default EpMonitoring