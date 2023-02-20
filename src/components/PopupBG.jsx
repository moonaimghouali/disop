import React, { Children, useState } from 'react'
import  ReactDOM  from 'react-dom'

const PopupBG = ({children}) => {
    const [visible, setVisible] = useState(true)
    const handleClick = (prevVisible) =>{setVisible(!prevVisible)}

  return ReactDOM.createPortal (
    <>
    {visible && (
        <div className='inset-0 fixed flex items-center justify-center bg-black/50 backdrop-blur-sm z-50' onClick={handleClick}>
            {children}
        </div>
    )}
    </>
    , document.getElementById("portal"))}

export default PopupBG