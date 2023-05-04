import React, { useState, useEffect } from 'react'

const ToggleSwitch = ({toggle, setToggle}) => {
    const [style, setStyle] = useState("p-1  w-14 rounded-xl bg-gray-400 flex flex-row transition-all ease-in-out duration-300")
    
    useEffect(()=>{
        if(toggle) setStyle ("p-1 w-14 rounded-xl bg-green-500 flex flex-row-reverse transition-all ease-in-out duration-300")
        else setStyle("p-1  w-14 rounded-xl bg-gray-400 flex flex-row transition-all ease-in-out duration-300")
    },[toggle])
    const handleClick = () =>{
        setToggle(prev => !prev)
    }

  return (
    <button className ={style} onClick={handleClick}>
        <div className='h-5 w-6 rounded-full bg-white transition-all ease-in-out duration-300'></div>
    </button>
  )
}

export default ToggleSwitch