import React from 'react'
import {Spe, Mem, BilanJournalier } from '../reports';

const Rapport = () => {
  return (
    <div className='col-span-12 bg-white h-full shadow-sm rounded-sm p-4'>
        <Spe/>
        <Mem/>
        <BilanJournalier/>
    </div>
  )
}

export default Rapport