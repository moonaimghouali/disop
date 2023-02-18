import React from 'react'
import BacDetail from './BacDetail'

const BacsGroup = ({onSpec}) => {
  return (
    <div className='h-full w-full flex flex-cols '>
          <div className='h-full w-16 bg-white shadow-sm border-r-1 border-gray-200 flex justify-center items-center mr-4'>
            <span className='-rotate-90 whitespace-nowrap text-xl font-medium'>Bacs {onSpec ? ("On") : ("Off")}-Spec </span>
          </div>

            {/* bacs de stockage */}
          <div className='flex flex-row flex-wrap h-full w-full gap-4 py-2 overflow-y-auto whitespace-nowrap '>
            <BacDetail/>
            {onSpec && <BacDetail/> }
            {onSpec && <BacDetail/> }
            {onSpec && <BacDetail/> }
          </div>
        </div>
  )
}

export default BacsGroup