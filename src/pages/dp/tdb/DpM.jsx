import React from 'react'
import {GlobalInformation, RealisationDpChart, RealisationDpCumuleesChart } from '../charts'
import * as api from '../../../api/dpApi'


const DpM = ({dbMenu}) => {
  return (
    <>
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
        {/* <GlobalInformation /> */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <ContributionChart data={data}/>  */}
      </div>

      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
        {/* <Kpi />  */}
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <RealisationDpChart /> 
      </div>
      
      <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
        <RealisationDpCumuleesChart />
      </div>
    </>
  )
}

export default DpM