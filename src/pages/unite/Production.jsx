import React, {useState, useEffect} from 'react'
import {PageHeader, PopupBG} from '../../components'
import Bilan from './components/Bilan'
import ProductionData from './components/ProductionData'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useSelector, useDispatch } from 'react-redux'
import * as api from '../../api/uniteApi'


const Production = () => {

  const {loading, production, error} = useSelector(state => state.production.uniteProduction)
  const {hide , bilanProductionUnite , bilanProductionBacs, bacsOperations } = useSelector((state) =>state.bilans.bilanUnite)
  const [popUp, setPopUp] = useState(false)
  const UniteId = useSelector((state) => state.system.id)
  const [menu, setMenu] = useState({date : new Date()})
  const dispatch = useDispatch()

  useEffect(()=>{
    // alert("saask")
    dispatch(api.fetchUniteProduction({UniteId : UniteId, date : menu.date}))
  },[menu.date])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Consulter la" pageName="Production"/>

      <div className='my-8 w-full h-full flex flex-col gap-4'>

        <div className='w-full flex flex-row items-center p-2 h-fit bg-white rounded-sm  shadow-sm'>
          <div className='w-fit mr-4'>
            <DatePickerComponent format="MMM-yyyy" start='Year' depth='Year' placeholder='Choisir une date' value={menu.date}  change={e=> setMenu({date : e.value})}></DatePickerComponent>
          </div>
        </div>

        <ProductionData uniteProduction = {production} setPopUp={setPopUp}/>
        {popUp && (<PopupBG setShow={setPopUp}> <Bilan/> </PopupBG>)}
        {/* <Bilan/> */}
        
      </div>
    </div>  
  )
}

export default Production

