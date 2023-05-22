
import React, {useState, useEffect} from 'react'

const RegJ = ({dbMenu, setError}) => {
    
  
    useEffect(()=>{
      const fn = async() =>{
        
      }
      
      fn()  
    },[dbMenu.date, dbMenu.journalier])
  
    return (
      <>
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4 '> 
          
        </div>
  
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
          
        </div>
  
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-4'> 
         
        </div>
        
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
  
        </div>
        
        <div className='bg-white rounded-sm shadow-sm row-span-3 col-span-6 '> 
         
        </div>
      </>
  )
}

export default RegJ