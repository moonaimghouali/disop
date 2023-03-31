import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';

const NouveauBacForm = () => {
    const [error, setError] = useState({error:false , errorMessage:""}) 

    const handleFiles = (files ) => {
        console.log(files[0] )
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
    }

  return (

    <form className='flex flex-col h-full p-4' method='POST' onSubmit={handleSubmit}>
        <div className='flex flex-row'>
            <div className='flex-1 flex flex-col'>
            {/* Bac Info */}
            <div className='font-semibold text-lg text-gray-800 mb-2'>Informations sur le bac</div>
            <label>Identifiant du bac</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="text" id="code_bac" name='code_bac' placeholder='ex : RA_310 ...'/>
            
            <label>Type de bac</label>

            <label>Capacite de Stockage (m3)</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="number" id="capacite_stockage" name='capacite_stockage' placeholder='ex : 150 000 ...'/>
            </div>

            <div className='flex-1 flex flex-col'>
            {/* Bareme Info */}
            <div className='font-semibold text-lg text-gray-800 mb-2 mt-2'>Informations sur le bareme du bac</div>
            <label>Etablie par</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="text" id="etablie_par" name='etablie_par' placeholder='ex : Amine mohammed ...'/>

            <label>Etablie le</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="date" id="etablie_par" name='etablie_par' placeholder='ex : Amine mohammed ...'/>
            </div>

        </div>
        {/* error Message */}
        {error.error && (<div className='text-red-500 font-medium my-2'>{error.errorMessage}</div>)}

        {/* Table Baremage Info */}
        <div>
        <div className='font-semibold text-lg text-gray-800 mb-2 mt-4'>Table de baremage du bac</div>
        
        {/* File reader */}
        <ReactFileReader handleFiles={handleFiles} fileTypes={["xlsm",".xlsx" , ".xls"]}>
            <button className='btn'>Upload</button>
        </ReactFileReader>
        </div>
            
        <div className='flex w-full items-center justify-center mt-4'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
            Envoyer</button>
        </div>

    </form>
    
  )
}

export default NouveauBacForm