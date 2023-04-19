import React, { Children, useState } from 'react'
import  ReactDOM  from 'react-dom'

const PopupBG = ({children , setShow}) => {
    // const [visible, setVisible] = useState(true)
    const handleClick = (prevVisible) =>{setShow(false)}

  return ReactDOM.createPortal (

        <div className='inset-0 fixed flex items-center justify-center bg-black/40 backdrop-blur-sm z-40' onClick={handleClick}>
            {children}
        </div>
    
    , document.getElementById("portal"))}

export default PopupBG