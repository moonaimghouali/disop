import React, {useState, useEffect} from 'react'
import {PageHeader, PopupBG} from '../../components'
import Bilan from './components/Bilan'
import ProductionData from './components/ProductionData'
import { useSelector, useDispatch } from 'react-redux'
import * as api from '../../api/uniteApi'


const Production = () => {

  const {loading, production, error} = useSelector(state => state.production.uniteProduction)
  const {hide , bilanProductionUnite , bilanProductionBacs, bacsOperations } = useSelector((state) =>state.bilans.bilanUnite)
  const UniteId = useSelector((state) => state.system.id)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(api.fetchUniteProduction(UniteId))
  },[])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Consulter la" pageName="Production"/>

      <div className='my-8 w-full h-full flex flex-row gap-6'>
        <ProductionData uniteProduction = {production}/>
        {/* <PopupBG > <Bilan /> </PopupBG> */}
        <Bilan/>
        
      </div>
    </div>  
  )
}

export default Production

