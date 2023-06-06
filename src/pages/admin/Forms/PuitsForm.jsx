import React, {useState, useEffect} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { PopupBG } from '../../../components'

const PuitsForm = ({setForm, update}) => {

  const[types, setTypes] = useState([
    {title: "PPH", type : "PPH"}, {title: "PPHS", type : "PPHS"}, {title: "PPHGL", type : "PPHGL"}, {title: "PPHSGL", type : "PPHSGL"}
     ])
  const typesFields = {text : "title" , value :"type" }

  const[perimetres, setPerimetres] = useState([])
  const perimetresFields = {text : "nom_perimetre" , value :"id" }

  
  const handleAnnulment = (e) => {
    e.preventDefault()
    setForm(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("submitted")
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
            <div className='col-span-8 pl-2'><DropDownListComponent dataSource={types} fields={typesFields} id="Types" placeholder={"Type"} ></DropDownListComponent></div>     
        
            <div className='col-span-2 font-semibold'>Perimetre </div>
            <div className='col-span-8 pl-2'><DropDownListComponent dataSource={perimetres} fields={perimetresFields} id="Perimetre" placeholder={"Perimetre"} ></DropDownListComponent></div>     

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