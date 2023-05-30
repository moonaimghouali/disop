import React from 'react'

const ProductionUnites = ({prodCorrigee}) => {
  return (
    <>
    <div className='font-semibold text-xl mb-3 ml-2'>Production des Puits par Unites</div>
    <div className='h-full w-full  grid grid-cols-2 '>

    {prodCorrigee.map((unite)=>(
      <div className='w-full h-max '>
        <div className='p-1 px-4 text-xl rounded w-fit bg-orange-100'> Unite "<b>{unite.code}</b>"</div>
        <div className='mt-1'> Production Journaliere : <b>{unite.production_unite_vm} m3</b></div>
        <div className=''> Production totale des puits reliees a l'unite : <b>{unite.production_puits} m3</b></div>
        <div className=' px-4 font-semibold my-2 '>Puits</div>
                
        <table className='w-[90%] table-fixed px-2'>
          <tr className='bg-orange-500 h-8 text-white '> <th>Puits</th> <th>Production </th> <th>Taux Contribution</th> <th>Production Corrigee</th></tr>
          {unite.puits.map((puits) =>(
            <tr className=' h-8 border-b border-gray-200'> <td>{puits.code}</td> <td>{puits.production_unite_vm}</td> <td>{puits.taux_contribution}</td> <td>{puits.production_corrigee}</td></tr>
          ))}
        </table>
      </div>
    ))}
            
    </div>
    </>
  )
}

export default ProductionUnites