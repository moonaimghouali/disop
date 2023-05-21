import React,{useState, useEffect} from 'react'
import {PageHeader} from '../../components'
import {PrevisionsForm} from './components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {useSelector} from 'react-redux'
import * as api from '../../api/xpApi'

const Previsions = () => {
  let {id, code, nom} = useSelector((state) => state.system)
  const [menu, setMenu] = useState({date : new Date()})
  const [prevRegion, setPrevRegion] = useState([])
  const [perimetres, setPerimetres] = useState([])

  useEffect(()=>{

      const fn = async () =>{
        let year = menu.date.getFullYear()
        let response = await api.fetchPrevisions(id, year, "yes") 
        setPrevRegion(response.data.data)
        setPerimetres(response.data.perimetres) 
        console.log("prev", prevRegion, perimetres);
      }
      fn()
  },[menu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Etablissement des " pageName="Previsions"/>

      <div className='mt-4 w-full h-full flex flex-col gap-4'>
        <div className='w-full flex flex-row items-center p-2 h-fit bg-white rounded-sm mb-2 shadow-sm'>
          <div className='w-fit mr-4'>
            <DatePickerComponent format="yyyy" start='Decade' depth='Decade' placeholder='Choisir une date' value={menu.date}  change={e=> setMenu({date : e.value})}></DatePickerComponent>
          </div>
        </div>

        <div className='h-full w-full flex flex-col bg-white shadow-sm'>
          
          {/* Existing Data */}
          {prevRegion.length !==0 && (
            <table className='w-full overflow-y-auto max-h-48  mt-2 table-fixed '>
              {/* Header */}
              <tr className='bg-orange-500 h-10 text-white '> 
                <th>-----</th> <th>Janvier</th> <th>Fevrier</th> <th>Mars</th> <th>Avril</th> <th>Mai</th> <th>Juin</th> <th>Juillet</th> <th>Aout</th> <th>Septembre</th> <th>Octobre</th> <th>Novembre</th> <th>Decembre</th> 
              </tr>
              {/* Perimetres */}
              {perimetres.map(p=>(
                <tr className='h-10 border border-gray-200'>
                    <td>{p.code_perimetre}</td>
                  {p.Prevision_perimetres.map(prev=>(
                    <td>{prev.prevision_production_perimetre_mensuelle}</td>
                  ))}
                </tr>
              ))}
              {/* Region */}
              <tr className='bg-orange-100 font-semibold py-2'><td className='p-2'>{nom}</td>{prevRegion.map(prev=>(<td >{prev.prevision_production_region_mensuelle}</td>))}</tr>
            </table>
          )}

          {prevRegion.length === 0 && (
            <PrevisionsForm perimetres={perimetres}/>
          )}


        </div>  
      </div>
    </div>
  )
}

export default Previsions