import React from 'react'
import { PopupBG } from '../../../components'

const UniteForm = ({setForm}) => {
  return (
    <PopupBG setShow={setForm}>
    <div className="h-full w-1/2 bg-white shadow-md p-2 rounded">
      Form Unite
    </div>
  </PopupBG>
  )
}

export default UniteForm