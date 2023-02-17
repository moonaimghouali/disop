import React from 'react'

const PageHeader = ({subTitle, pageName}) => {
  return (
    <div className='flex flex-col'>
        <p className='text-base font-medium'>{subTitle}</p>
        <p className='text-3xl font-bold'>{pageName}</p>
    </div>
  )
}

export default PageHeader