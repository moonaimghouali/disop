import React, {useState, useEffect} from 'react'
import * as api from '../../../api/dpApi'
import {GlobalInformation  } from '../charts'

const RegM = ({dbMenu, setError}) => {

  const [toggle, SetToggle] = useState(false)

  useEffect(()=>{
    const fn = async() =>{
      
    }
    fn()
  },[dbMenu.date, dbMenu.journalier, dbMenu.entite])

  return (
     <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation dbMenu={dbMenu} data={data}/> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <ContributionPerimetreChart/> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <PerimetresEffeciency /> */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        {/* <ProductionPerimetreChart />  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '>
        {/* <div className='w-full h-fit flex flex-row hover:cursor-pointer' onClick={()=>SetToggle((prev) => !prev)}>
          {!toggle && (<RealisationDpChart />)}
          {toggle && (<RealisationDpCumuleesChart /> )}
        </div> 

        <div className='w-full flex flex-row justify-center gap-2  items-center hover:cursor-pointer'>
            {toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
            <div className='w-2 h-2 rounded-full bg-gray-600'></div>
            {!toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
        </div> */}
        
      </div>
    </>
  )
}

export default RegM