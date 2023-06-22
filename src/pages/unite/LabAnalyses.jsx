import React, { useState, useEffect } from 'react'
import {PageHeader, ToggleSwitch} from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../../api/uniteApi'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { toast } from 'react-toastify'

const LabAnalyses = () => {
  const [ toggle, setToggle ] = useState(false)
  const dispatch = useDispatch()
  const UniteId = useSelector((state) => state.system.id)
  const {loading, uniteBacs, error} = useSelector(state => state.bacs)
  let bacsFields = { text: 'code_bacs', value: 'id' };

  const [bac, setBac] =useState(-1)

  useEffect(()=>{
    dispatch(api.fetchBacs(UniteId))
  },[])


  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (bac ===-1) {
      toast.warn("vous devez choisir un bac avant d'envoyer le formulaire.")
      return
    }

    let analyseBody = {
      date_analyse : new Date().toISOString().split("T")[0],
      densite : parseFloat(e.target.densite.value) , 
      temperature : parseFloat(e.target.temperature.value) ,
      salinite : parseFloat(e.target.salinite.value) ,
      tvr : parseFloat(e.target.tvr.value) ,
      bsw : parseFloat(e.target.bsw.value) ,
      BacId : bac
    }
    let anomalieBody = null
    if (toggle){
      anomalieBody = {
        titre : e.target.titre.value,
        detail : e.target.detail.value,
      }
    }

    let Body = { analyse : analyseBody, anomalie : anomalieBody}
    console.log("body", Body);
    let res = await api.postAnalyses(Body)
    if (res.data.success) {
      toast.success("Les caracteristiques sont enregistrees.")
    }else{
      toast.error("L'enregistrement n'a pas reussi, veuillez réessayer ultérieurement.")
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 px-8 py-8">
      <PageHeader subTitle="Tests des" pageName="Laboratoires"/>

      <form className='h-full w-full grid grid-cols-2 gap-8 mt-8 px-2 py-3 bg-white shadow-sm' onSubmit={handleSubmit}>
        
        {/* saisi des caracteristiques */}
        <div className='h-full col-span-1 flex flex-col px-2'>
          <div className='mt-4 font-semibold text-xl'>Saisi des caracteristiques</div>

          <div className='w-1/4 my-4'>
            <DropDownListComponent 
            id="Bacs"
            fields={bacsFields}
            value={-1}
            dataSource={uniteBacs} 
            placeholder={"Choisir un bac"}
            change={(e) => setBac(e.value)}/>
            
          </div>

          <div className='w-full h-fit grid grid-cols-11 gap-1 pr-2 mt-4 border-r-1 border-gray-200'>

            <div className='col-span-4'>Densite </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='__.__' type="number"
            id="densite" name='densite' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Temperature </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='__.__' type="number"
            id="temperature" name='temperature' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>Salinite </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='__.__' type="number"
            id="salinite" name='salinite' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>TVR </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='__.__' type="number"
            id="tvr" name='tvr' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>

            <div className='col-span-4'>BSW </div>            
            <input className="col-span-5 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='__.__' type="number"
            id="bsw" name='bsw' />
            <div className='col-span-1 pt-2 text-gray-700'>kg/cm2</div>
          </div>

          <div className='flex w-full items-center justify-center mt-8'>
            <button type="submit" className='h-10 w-3/4 rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
              Envoyer</button>
          </div>
          
        </div>

        {/* divider
        <div className='h-full w-px bg-gray-300'/> */}
        
        
        {/* Fiche d'anomalie */}
        <div className='h-full col-span-1 flex flex-col '>
          
          <div className='flex flex-row gap-2 justify-end mr-4'>
            Remplir le fiche d'anomalie <ToggleSwitch toggle={toggle} setToggle={setToggle}/></div>
          
          {toggle && (
          <div className='h-full w-full mt-4 p-2  flex flex-col'>
            {/* titre */}
            <label>Titre</label>
            <input className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 p-1" required={toggle} type="text" id="titre" name='titre' placeholder='titre de la fiche'/>
            
            {/* contenu */}
            <label className='mt-4'>Cotenu</label>
            <textarea className="border-1 border-gray-300 h-8 rounded mt-1 mx-2 flex-1 p-1  align-top" required={toggle} type="text" id="detail" name='detail' placeholder='Contenu de la fiche'/> 

          </div>)}
        </div>

      </form>

    </div>
  )
}

export default LabAnalyses