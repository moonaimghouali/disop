import React from 'react'

const PageHeader = ({pageName}) => {
  return (
    <div className='flex flex-col'>
        <p className='text-base font-medium'>Gestion des</p>
        <p className='text-3xl font-bold'>{pageName}</p>
    </div>
  )
}

export default PageHeader