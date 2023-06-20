import React, { useState, useEffect } from 'react'
import {ToggleSwitch} from '../../../components'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import * as api from '../../../api/uniteApi'

const NouveauBacMesures = ({baremeExistant, setBaremeExistant, setBaremeId}) => {

  const [baremes, setBaremes] = useState([])
  const baremeFields = {text: 'code_bareme' , value : 'id'}
  

  useEffect(()=>{
    const fn = async() =>{
      // fetch baremes
      let res = await api.fetchBaremes()
      setBaremes(res.data.data)
    }
    fn()
  },[])
  
  return (
    <div className='flex flex-col h-full w-5/12'>
            <div className='flex-1 flex flex-col'>
            {/* Bac Info */}
            <div className='font-semibold text-lg text-gray-800 mb-2'>Informations sur le bac</div>
            <label>1.Identifiant du bac</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="text" id="code_bacs" name='code_bacs' placeholder='ex : RA_310 ...'/>
            
            <div className='grid grid-cols-2 my-2'>
            <div>
              <label>2.Type de bac</label>
              <div >
                  <input  required type="radio" id="OnSpecs" name='type_bacs' value={"OnSpecs"} />
                  <label className='ml-2'>On-Specs</label>
              </div>
              <div >
                  <input required type="radio" id="OffSpecs" name='type_bacs' value={"OffSpecs"}/>
                  <label className='ml-2'>Off-Specs</label>
              </div>
            </div>
            
            <div>
              <label className='mt-1'>3.Categorie du bac</label>
              <div>
                  <input required type="radio" id="Flottant" name='categorie_bacs' value={"Flottant"}/>
                  <label className='ml-2'>Flottant</label>
              </div>
              <div>
                  <input required type="radio" id="Fixe" name='categorie_bacs' value={"Fixe"}/>
                  <label className='ml-2'>Fixe</label>
              </div>
            </div>
            </div>
            
            <label className='mt-1'>4.Capacite de Stockage (m3)</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="number" id="capacite_stockage" name='capacite_stockage' placeholder='ex : 150 000 ...'/>
            </div>

            <div className='flex-1 flex flex-col'>
            {/* Bareme Info */}
            <div className='font-semibold text-lg text-gray-800 mb-2 mt-2 flex flex-row items-center'> 
              <div className='flex-1'>Informations sur le bareme</div>
              <div className='flex flex-row gap-2 text-base font-medium items'>{baremeExistant && (<div>Bareme Existant</div>)} {!baremeExistant && (<div>Nouveau Bareme</div>)}<ToggleSwitch toggle={baremeExistant} setToggle={setBaremeExistant}/> </div>
            </div>

            {!baremeExistant && (
            <>
            <label>1.Code bareme</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="text" id="code_bareme" name='code_bareme' placeholder='BAREME_XXX ...'/>

            <label>1.Etablie par</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="text" id="etablie_par" name='etablie_par' placeholder='ex : Amine mohammed ...'/>

            <label>2.Etablie le</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1 w-1/2 mb-2" required type="date" id="date_creation" name='date_creation' placeholder='ex : Amine mohammed ...'/>
            </>
            )}

            {baremeExistant && (
              <div className='w-1/2 mt-4'>
              <DropDownListComponent 
              id="Operations"
              fields={baremeFields}
              dataSource={baremes} 
              placeholder={"Choisir un bareme"}
              change={(e) => setBaremeId(e.value)}/>
              </div>
            )}
            
            </div>
            
            {/* Submit Button */}
            <div className='flex w-full items-center justify-center '>
                
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
              Ajouter Bac</button>
            </div>

        </div>
  )
}

export default NouveauBacMesures