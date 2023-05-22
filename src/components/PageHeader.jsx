import React from 'react'

const PageHeader = ({subTitle, pageName}) => {
  return (
    <div className='flex flex-col'>
        <p className='text-base font-medium'>{subTitle}</p>
        <p className='text-3xl font-bold'>{pageName}</p>
    </div>

    // <div className='flex flex-row justify-between w-full p-3 border-b border-gray-200 bg-white '>
    //   <div className='flex flex-row gap-2'>
    //     <p className='text-base font-medium'>{subTitle}</p>
    //     <p className='text-xl font-bold'>{pageName}</p>
    //   </div>

    //   <div className='flex flex-row gap-2'>
    //     notif
    //   </div>
    // </div>
  )
}

export default PageHeader