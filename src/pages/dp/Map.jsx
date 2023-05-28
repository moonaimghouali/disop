import React, {useState, useEffect} from 'react'
import PageHeader from '../../components/PageHeader'
import MapInfo from './components/MapInfo'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import {BiCompass } from 'react-icons/bi'
import * as api from '../../api/dpApi'
import { MapView } from './components'


const Map = () => {
  
  const [choix, setChoix] = useState("Regions")
  const [regions, setRegions] = useState([])
  const [entite, setEntite] = useState({})
  const [show, setShow] = useState(false)
  
  const handleentitesChange = async (e) =>{
    setChoix(e.value)
  }

  useEffect(()=>{
    const fn = async () =>{
      
      if(choix ==="Regions"){
        setRegions([])
        let response = await api.fetchRegions();
        setRegions(response)
      }
    }
    fn()
  },[choix])

  const handleClick = (e) =>{
    setEntite(e)
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      {/* <PageHeader subTitle="" pageName="Carte Geographique" /> */}

      <div className='grid grid-cols-12 gap-2 w-full h-full my-8s'>
        
        {/* Entites
        <div className='col-span-2 flex flex-col bg-white rounded-sm shadow-sm'>
          
          DropDown Menu
          <div className="w-fit p-2">
            <DropDownListComponent  value="Regions" change={handleentitesChange} id="entites" dataSource={['Regions', 'Unites', 'Bacs']} placeholder="Localiser les ..." ></DropDownListComponent>
          </div>
          
          Divider
          <div className='h-px w-full mb-2 bg-gray-300'></div>

          display Entites
          <div className='h-full w-full flex flex-col gap-1 px-1'>
            
            {regions.map(e=>(
              <div key={e.id}
              onClick={() => handleClick(e)} 
              className = {(e.id === entite.id)? 
              'w-full py-5 px-1 flex flex-row items-center bg-orange-50 text-orange-600 rounded hover:bg-orange-100 hover:cursor-pointer transition-all ease-in-out duration-150' :
              'w-full py-2 px-1 flex flex-row items-center bg-gray-50 rounded hover:bg-gray-200 hover:cursor-pointer transition-all ease-in-out duration-150' }>
                <BiCompass size={18}/>
                <div className='ml-3 font-semibold'>{e.nom_region}</div>
              </div>
            ))}
          </div>

        </div> */}
        
        {/* Map */}
        <div className='col-span-12 bg-white rounded-sm shadow-sm'> <MapView regions={regions} setShow={setShow} /> </div>

        {/* MapInfo */}
        {/* {show && <div className='col-span-3 bg-white rounded-sm shadow-sm'>MapInfo</div>} */}
      
      </div>
    </div>
  )
}

export default Map