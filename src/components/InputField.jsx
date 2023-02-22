import React from 'react'
import { FiDatabase } from 'react-icons/fi'

const InputField = ({label, required, type, id, name, placeholder, value, isDisabled}) => {
    const handleClick = () =>{
        alert("opc server request")
    }
    const style = isDisabled ? 'flex flex-row w-full items-center justify-center opacity-70' : 'flex flex-row w-full items-center justify center '
  return (
    <div className={style}>
            {/* <label className='w-36 text-start'>{label}</label> */}
            <input className="w-full inline border-1 border-gray-300 h-8 rounded p-1" 
            required={required} type={type} id={id} step="0.01"
            name={name} placeholder={placeholder} value={value} disabled={isDisabled}/>
            { (id==="cote") && (<button className="p-1 rounded hover:shadow-md hover:bg-blue-50 ml-1" onClick={!isDisabled && handleClick}> <FiDatabase size={18}/> </button>)
            }
    </div>
  )
}

export default InputField