import React ,{useEffect} from 'react'
import DotLoader from "react-spinners/DotLoader";

import PageHeader from '../../components/PageHeader'
import BacsGroup from './components/BacsGroup'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../../api/uniteApi'




const Stockage = () => {
  
  const {loading, uniteBacs, error} = useSelector(state => state.bacs)
  const onspecBacs = uniteBacs.filter(bac => bac.typeBacs === "OnSpecs")
  const offspecBacs = uniteBacs.filter(bac => bac.typeBacs !== "OnSpecs")

  const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(api.fetchBacs())
  },[])

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Consulter le" pageName="Stockage"/>
      <div className='grid grid-rows-2 gap-2 my-6 h-full w-full'>
    
       
       {/* Onspec bacs */}

        {/* <div className='flex items-center justify-center'>  */}
          <DotLoader color={"#f5821f"} loading={loading} size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        {/* </div> */}

      {!loading && (
        <>
        <BacsGroup onSpec={true} bacs={onspecBacs}/>
        <BacsGroup onSpec={false} bacs={offspecBacs}/> 
        </>
      )}

      </div>
    </div>
  )
}

export default Stockage