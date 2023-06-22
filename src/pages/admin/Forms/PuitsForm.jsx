import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { PopupBG } from '../../../components'
import {fetchRegions} from '../../../api/dpApi'
import * as api from '../../../api/adminApi'
import { toast } from 'react-toastify'


const PuitsForm = ({setForm, update}) => {

  const[types, setTypes] = useState([
    {title: "PPH", type : "PPH"}, {title: "PPHS", type : "PPHS"}, {title: "PPHGL", type : "PPHGL"}, {title: "PPHSGL", type : "PPHSGL"}
     ])
  const typesFields = {text : "title" , value :"type" }
  const [typeChoisi, setTypeChoisi] = useState("NAN")

  const[regions, setRegions] = useState([])
  const regionsFields = {text : "nom_region" , value :"id" }

  const [regionChoisi, setRegionChoisi] = useState(-1)

  const[perimetres, setPerimetres] = useState([])
  const perimetresFields = {text : "nom_perimetre" , value :"id" }
  const [perimetreChoisi, setPerimetreChoisi] = useState(-1)

  const[unites, setUnites] = useState([])
  const unitesFields = {text : "nom_unite" , value :"id" }
  const [uniteChoisi, setUniteChoisi] = useState(-1)

  useEffect(()=>{
    const fn = async()=>{
      let response = await fetchRegions()
      setRegions(response)
    }
    fn()
  },[])

  useEffect(()=>{
    const fn = async()=>{
      if (regionChoisi === -1) return

      let response = await api.fetchPerimetres()
      let regionPerimetres = response.filter((perim)=> perim.RegionId === regionChoisi)
      setPerimetres(regionPerimetres)
      
      let res = await api.fetchUnites()
      let regionUnites = res.filter((unite)=> unite.RegionId === regionChoisi)
      setUnites(regionUnites)
    }
    fn()

  },[regionChoisi])

  
  const handleAnnulment = (e) => {
    e.preventDefault()
    setForm(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (typeChoisi === "NAN") {
      toast.warn("Vous devez choisir un type.")
      return
    }

    if (perimetreChoisi === -1) {
      toast.warn("Vous devez choisir un perimetre.")
      return
    }

    if (uniteChoisi === -1) {
      toast.warn("Vous devez choisir une unite.")
      return
    }

    let body = { 
      code_puits : e.target.code_puits.value,
      nom_puits : e.target.code_puits.value,
      statut_puits : true,
      type_puits  : typeChoisi,
      PerimetreId : perimetreChoisi,
      UniteId : uniteChoisi
    }
    
    console.log("1212",body);
    let res = await api.addPuits(body)
    console.log("res", res);
    if (res.data.success) {
      toast.success("Le nouveau puits est ajoute.")
      setForm(false)
    }else{
      toast.error("L'ajout de puits n'a pas reussi, veuillez réessayer ultérieurement.")
    }

  }

  const handleUpdate = (e) => {
    e.preventDefault()
    alert("submitted")
  }

  return (
    <PopupBG setShow={setForm}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
        
        {/* Title */}
        <div className='text-3xl font-semibold my-3'>{update? "Modifier" : "Ajouter"} un puits</div>
        {/* divider */}
        <div className='h-px w-full bg-gray-300'/>
        
        {/* form */}
        <form className='h-full w-full flex flex-col mt-3' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className='w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>

            <div className='col-span-2 font-semibold'>Code </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="code_puits" name='code_puits' />

            <div className='col-span-2 font-semibold'>Type </div>
            <div className='col-span-8 pl-2'><DropDownListComponent onChange={(e)=>setTypeChoisi(e.value)} dataSource={types} fields={typesFields} id="Types" placeholder={"Type"} ></DropDownListComponent></div>     
        
            <div className='col-span-2 font-semibold'>Region </div>
            <div className='col-span-8 pl-2'><DropDownListComponent onChange={(e)=> setRegionChoisi(e.value)}  dataSource={regions} fields={regionsFields} id="Regions" placeholder={"Regions"} ></DropDownListComponent></div>     

            {(regionChoisi !== -1) && (
              <>
              <div className='col-span-2 font-semibold'>Perimetre </div>
              <div className='col-span-8 pl-2'><DropDownListComponent onChange={(e)=> setPerimetreChoisi(e.value)} dataSource={perimetres} fields={perimetresFields} id="Perimetres" placeholder={"Perimetres"} ></DropDownListComponent></div>     
  
              <div className='col-span-2 font-semibold'>Unite </div>
              <div className='col-span-8 pl-2'><DropDownListComponent onChange={(e)=> setUniteChoisi(e.value)}  dataSource={unites} fields={unitesFields} id="Unites" placeholder={"Unites"} ></DropDownListComponent></div>        
              </>
            )}
          
          </div>

          <div className='flex-1'></div>

          {/* Form Buttons */}
          <div className=' py-3 w-full flex flex-row items-center justify-center gap-4'>
            <button type='submit' className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>Valider</button>    
            <button onClick={handleAnnulment} className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-red-600 hover:bg-red-700 hover:shadow-lg ease-in-out duration-150'>Annuler</button>
          </div>

        </form>

      </div>
    </PopupBG>
  )
}

export default PuitsForm