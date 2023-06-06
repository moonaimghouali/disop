import React,{useState, useEffect} from 'react'
import { PopupBG } from '../../../components'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import {fetchRegions} from '../../../api/dpApi'
import * as api from '../../../api/adminApi'

const UtilisateurForm = ({setForm, update, data}) => {
  
  const[roles, setRoles] = useState([
    {title: "Manager DP", role : "Manager"}, {title: "Responsable Regional", role : "Resp_Region"}, {title: "Direction XP", role : "Xp"},
    {title: "Direction EP", role : "Ep"}, {title: "Responsable Unite", role : "Resp_Unite"}, {title: "Bureau Controle Unite", role : "Unite_Controle"}, {title: "Laboratoire Unite", role : "Unite_Lab"}
  ])
  const rolesFields = {text : "title" , value :"role" }

  const[regions, setRegions] = useState([])
  const regionsFields = {text : "nom_region" , value :"id" }

  const[unites, setUnites] = useState([])
  const unitesFields = {text : "nom_unite" , value :"id" }


  const [nom, setNom] =useState(data?.nom)
  const [prenom, setPrenom] =useState(data?.prenom)
  const [email, setEmail] =useState(data?.email)
  const [role, setRole] = useState(data?.role)
  const [region, setRegion] = useState(data?.affectation_id)
  const [unite, setUnite] = useState(data?.affectation_id)

  // const [affectation, setAffectation] = useState([])

  useEffect(()=>{
    const fn = async()=>{
      if (role !== "Manager" ) {  
        let response = await fetchRegions()
        setRegions(response)

        let res = await api.fetchUnites()
        setUnites(res)
      }
    }
    fn()
  },[role])

  const handleAnnulment = () => {
   
    alert("Annuler")
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("submitted")
  }

  const handleUpdate = () => {

  }
  
  return (
    
    <PopupBG setShow={setForm}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
        
        {/* Title */}
        <div className='text-3xl font-semibold my-3'>{update? "Modifier" : "Ajouter"} un utilisateur</div>
        {/* divider */}
        <div className='h-px w-full bg-gray-300'/>
        
        {/* form add */}
        {!update && (
          <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Nom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="nom" name='nom' />

            <div className='col-span-2 font-semibold'>Prenom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="prenom" name='prenom' />

            <div className='col-span-2 font-semibold'>E-mail </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="email" name='email' />

            <div className='col-span-2 font-semibold'>Role </div>
            <div className='col-span-8 pl-2'><DropDownListComponent onChange={e=> setRole(e.value)} dataSource={roles} fields={rolesFields} id="Role" placeholder={"Roles"} ></DropDownListComponent></div>     
            
            {(role === "Xp" || role === "Ep" || role === "Resp_Region" ) && (
              <>
              <div className='col-span-2 font-semibold'>Region </div>            
              <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" placeholder={"Affectations"} dataSource={regions} fields={regionsFields} ></DropDownListComponent></div>     
              </>
            )}
           
            {(role === "Resp_Unite" || role === "Unite_Controle" || role === "Unite_Lab") && (
              <>
              <div className='col-span-2 font-semibold'>Unite </div>            
              <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" placeholder={"Affectations"} dataSource={unites} fields={unitesFields} ></DropDownListComponent></div>       
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
        )}

        {/* form modif */}
        {update && (
          <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Nom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="nom2" name='nom2' value={nom} onChange={(e)=> setNom(e.value)}/>

            <div className='col-span-2 font-semibold'>Prenom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="prenom2" name='prenom2' value={prenom} onChange={(e)=> setPrenom(e.value)} />

            <div className='col-span-2 font-semibold'>E-mail </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="email" name='email' value={email} onChange={(e)=> setEmail(e.value)} />

            <div className='col-span-2 font-semibold'>Role </div>
            <div className='col-span-8 pl-2'><DropDownListComponent value={role} onChange={e=> setRole(e.value)} dataSource={roles} fields={rolesFields} id="Role" placeholder={"Roles"} ></DropDownListComponent></div>     
            
            {(role === "Ep" || role === "Xp" || role === "Resp_Region") && (
              <>
              <div className='col-span-2 font-semibold'>Region </div>            
              <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" placeholder={"Affectations"} dataSource={regions} fields={regionsFields} value={region} onChange={(e)=> setRegion(e.value)}></DropDownListComponent></div>     
              </>
            )}
           
            {(role === "Resp_Unite" || role === "Unite_Controle" || role === "Unite_Lab") && (
              <>
              <div className='col-span-2 font-semibold'>Unite </div>            
              <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" dat placeholder={"Affectations"} dataSource={unites} fields={unitesFields} value={unite} onChange={(e)=> setUnite(e.value)}></DropDownListComponent></div>       
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
        )}
        

      </div>
    </PopupBG>
  )
}

export default UtilisateurForm