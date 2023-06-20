import React, {useEffect, useState} from 'react';
import * as XLSX from "xlsx";
import * as Excel from  '../utils/Excel' 
import NouveauBacMesures from '../pages/unite/components/NouveauBacMesures';
import { validateNouveauBacForm } from './UniteFormValidation'
import { useSelector } from 'react-redux'
import * as api from '../api/uniteApi'
import {toast} from 'react-toastify'


const NouveauBacForm = () => {

    const [error, setError] = useState({error:false , errorMessage:""}) 
    const [baremeTable, setBaremeTable] = useState([]);
    const [displayTable, setDisplayTable] = useState([]);
    const UniteId = useSelector(state => state.system.id)
    const [baremeExistant, setBaremeExistant] = useState(false)
    const [baremeId, setBaremeId] = useState(-1)

    // Chargement Fichier Excel
    const handleFileUpload =  (e ) => {
      Excel.readExcelFile(e, setBaremeTable, setDisplayTable , setError)
    }

    useEffect(()=>{
      // console.log("bchoisi",baremeId)
    },[baremeId])

    // Handle the form submit
    const handleSubmitOld = async(e) =>{
      e.preventDefault()
      let creation = new Date(e.target.date_creation.value)
      let mis_a_jour = new Date(creation)
      mis_a_jour.setFullYear(creation.getFullYear() + 10)
      
      let requestBody = {
        code_bacs : e.target.code_bacs.value,
        type_bacs : e.target.type_bacs.value,
        categorie_bacs : e.target.categorie_bacs.value,
        capacite_stockage : e.target.capacite_stockage.value,
        stockage_actuel : 0,
        UniteId : UniteId ,
        date_creation : creation,
        date_mis_a_jour : mis_a_jour,
        etablie_par : e.target.etablie_par.value,
      }
      
      const error = await validateNouveauBacForm(requestBody)

      if(error.error) { 
        setError(error)
      }else{
        setError({error:false , errorMessage:""})

        let response
        try {
          // PostBac
          response = await api.postBacBareme(requestBody)
          if(response.data.success){
            console.log(response);
            try {
              // Post TableBaremage
              for (let i = 0; i < baremeTable.length; i++) {
                baremeTable[i].map(async (item) => {
                  try {
                    let body = { id: null, dm_valeur : item.dm_valeur ,mm_valeur : item.mm_valeur , volume_apparent : item.volume_apparent, BacsBaremeId : response.data.data.bareme.id , BacId :  response.data.data.bac.id}
                    let responseTable = await api.postTableBaremage(body)
                    console.log(responseTable);

                  } catch (error) {
                    console.log(error.message);
                  }
                }) 
              }
            } catch (error) {
              console.log(error.message)
            }
          }
          } catch (error) {
            console.log(error)
          }
         
      }
    }

    const handleSubmit = async(e) =>{
      e.preventDefault()

      
      
      let bacBody = {
        code_bacs : e.target.code_bacs.value,
        type_bacs : e.target.type_bacs.value,
        categorie_bacs : e.target.categorie_bacs.value,
        capacite_stockage : e.target.capacite_stockage.value,
        stockage_actuel : 0,
        UniteId : UniteId ,
        BacsBaremeId : -1
      }

      if (baremeExistant) {
        if (baremeId === -1) {
          toast.warn("Vous devez chois un bareme pour votre Bac")
          return
        }
        bacBody.BacsBaremeId = baremeId
        
      }else{
        let creation = new Date(e.target.date_creation.value)
        let mis_a_jour = new Date(creation)
        mis_a_jour.setFullYear(creation.getFullYear() + 10)
        
        // post Bareme + Table de baremage
        let baremeBody = {
          code_bareme : e.target.code_bareme.value,
          etablie_par : e.target.etablie_par.value,
          date_creation : creation,
          date_mis_a_jour : mis_a_jour,
        }

        let res = await api.postBareme(baremeBody) 
        bacBody.BacsBaremeId = res.data.data.id

        for (let i = 0; i < baremeTable.length; i++) {
          for (let j = 0; j < baremeTable[i].length; j++) {
            baremeTable[i][j] = {...baremeTable[i][j], BacsBaremeId : res.data.data.id}
            let res2 = await api.postTableBaremage(baremeTable[i][j])
          } 
        }
      }

      let response = await api.postBac(bacBody)
      if (response.data.success) {
        toast.success("Le nouveau Bac est enregistree dans le systeme")
      }else{
        toast.error("Une erreur est survenue, veuillez réessayer ultérieurement.")
      }
    }

  return (

    <form className='flex flex-row w-full h-full p-4' method='POST' onSubmit={handleSubmit}>
        <NouveauBacMesures baremeExistant={baremeExistant} setBaremeExistant={setBaremeExistant} setBaremeId={setBaremeId}/>

        {/* error Message */}
        {error.error && (<div className='text-red-500 font-medium my-2'>{error.errorMessage}</div>)}

        {/* Table Baremage Info */}
        {!baremeExistant && (
        <div className='w-7/12 h-1/2 flex flex-col items-center '>
          <div className='font-semibold text-lg text-gray-800 mb-4 '>Table de baremage du bac</div>
          
          <div className='w-full flex flex-col items-center p-6 rounded border-2 border-dashed border-green-600 bg-green-50 text-gray-900 font-semibold '>
              <input  
              type="file" 
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.ms-excel.sheet.macroEnabled.12"
              onChange={(e) => handleFileUpload(e)} 
              name="TableBaremage" 
              id="TableBaremage" />

              <p className="mt-6 ">Supported files</p>
              <p className="text-lg text-green-700 font-semibold">XLS, XLSX, XLSM, CSV</p>
          </div>
          {/* display uploaded table */}
          {displayTable.length && (
              <div className='h-full w-full mt-6 flex flex-col'>
                  <div className='py-2 text-gray-900'>Entete de la table : </div>
                  <table>
                      <tr className='bg-green-200'>
                        <th className='h-10 px-2'>Dm/Mm</th>
                        <th>00 </th> <th>10 </th> <th>20 </th>  <th>30 </th> <th>40 </th>  <th>50 </th> <th>60 </th> <th>70 </th> <th>80 </th> <th>90 </th>
                      </tr>

                      {displayTable.map((row) =>(
                          <tr>
                          <td className='pl-2'>{row[0].dm_valeur}</td>
                          {row.map((volume) =>(
                               <td className='pl-2'>{volume.volume_apparent}</td>
                          ))}
                      </tr>
                      ))}
                  </table>
              </div>
          )}
        </div>
        )}
    </form>
    
  )
}

export default NouveauBacForm