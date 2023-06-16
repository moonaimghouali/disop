import React, { useEffect } from 'react'

const ProdParPerimetres = ({perimetres, prodPerimetres, prodCorrigee}) => {

    useEffect(()=>{
        console.log("hashhsa", perimetres, prodPerimetres)
    },[])

  return (
    // <>
    // </>
    <>
    <div className='font-semibold text-xl mb-3 ml-2'>Production des Perimetres</div>
    <table className='w-full table-fixed px-10 mt-2'>
      <tr className='bg-orange-500 h-8 text-white '> <th>Perimetre</th> <th>Stock Initial (TM)</th> <th>Stock Initial (m3)</th> <th>Production (TM)</th> <th>Production (m3)</th>  
      <th>Expedition (TM)</th> <th>Expedition (m3)</th> <th>Stock Final (TM)</th> <th>Stock Final (m3)</th> </tr>
      {perimetres.map((p) =>{
        let prodPerim = prodPerimetres.get(`p-${p.id}`)
      return(
        <></>
        // <tr className=' h-8 border-b border-gray-200'> <td>{p.code_perimetre}</td> <td>{prodPerim.stock_initial_tm}</td> <td>{prodPerim.stock_initial_vm}</td> <td>{prodPerim.production_perimetre_tm}</td> <td>{prodPerim.production_perimetre_vm}</td> 
        // <td>{prodPerim.expedition_perimetre_tm}</td> <td>{prodPerim.expedition_perimetre_vm}</td> <td>{prodPerim.stock_final_tm}</td> <td>{prodPerim.stock_final_vm}</td></tr>
      )})}
    </table>
    </>
  )
}

export default ProdParPerimetres