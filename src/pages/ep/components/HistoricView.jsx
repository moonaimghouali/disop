import React, {useState, useEffect} from 'react'

const HistoricView = ({puits, setToggle}) => {

    useEffect(()=>{
        if (puits.statut_puits === true) setToggle(false)

    },[puits])

  return (
    <div className='h-full w-full px-2 py-4'>HistoricView</div>
  )
}

export default HistoricView