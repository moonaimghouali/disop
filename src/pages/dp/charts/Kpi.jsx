import React, { useState } from 'react'
import {AiFillAlert} from 'react-icons/ai'

const Kpi = () => {

    const [toggle, SetToggle] = useState(false)
    const handleClick = () =>{
        SetToggle((prev) => !prev)
    }

    const Item = ({name, value, color})=>{
        let style = `text-base font-semibold text-${color}-700`
        
        return(
            <div className='flex flex-col  bg-gray-50 rounded'>
                <div className='flex flex-row gap-2 px-1 pt-1 items-center'> 
                    <span><AiFillAlert size={14}/></span>
                    <div className='text-base font-medium text-gray-500'>{name}</div> 
                </div>
                <div className='w-full h-full flex flex-row justify-center items-center'>
                    <div className='text-lg font-semibold w-full text-center'>{value}</div>
                </div>
            </div>
        )
    }

  return (
    <div className='w-full h-full flex flex-col p-2 hover:cursor-pointer' onClick={handleClick}>
        <div className='text-lg font-semibold w-full text-center'>Indicateurs de performance</div>
        
        {/* first Page */}
        {!toggle && (
        <div className='h-full w-full grid grid-rows-2 grid-cols-2 gap-1 mt-3'>
            <Item name="Evolution production" value="" color={""}/>
            <Item name="Production moyenne" value="" color={""}/>
            <Item name="Plus performante" value="" color={""}/>
            <Item name="Moins performante" value="" color={""}/>
        </div>
        )}
        {/* second Page */}
        {toggle && (
        <div className='h-full w-full grid grid-rows-2 grid-cols-2 gap-1 mt-3'>
            <Item name="Evolution production2" value="" color={""}/>
            <Item name="Production moyenne2" value="" color={""}/>
            <Item name="Plus performante2" value="" color={""}/>
            <Item name="Moins performante2" value="" color={""}/>
        </div>
        )}
        <div onClick={handleClick} className='w-full flex flex-row justify-center gap-2 pt-2 items-center hover:cursor-pointer'>
            {toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
            <div className='w-2 h-2 rounded-full bg-gray-600'></div>
            {!toggle && (<div className='w-2 h-2 rounded-full bg-gray-300'></div>)}
        </div>
    </div>
  )
}

export default Kpi