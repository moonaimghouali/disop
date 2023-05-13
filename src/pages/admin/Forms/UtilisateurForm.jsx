import React,{useState, useEffect} from 'react'
import { PopupBG } from '../../../components'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'

const UtilisateurForm = ({setForm, update}) => {
  const[roles, setRoles] = useState([
    {title: "Manager DP", role : "Manager"}, {title: "Responsable Regional", role : "Resp_Region"}, {title: "Direction XP", role : "Xp"},
    {title: "Direction EP", role : "Ep"}, {title: "Responsable Unite", role : "Resp_Unite"}, {title: "Bureau Controle Unite", role : "Unite_Controle"},
  ])
  const rolesFields = {text : "title" , value :"role" }
  
  const [role, setRole] = useState(null)

  const [affectation, setAffectation] = useState([])

  useEffect(()=>{
    const fn = async()=>{
      if (role === "Resp_Region" || role === "Xp" || role === "Ep") {
        
      }else if(role === "Resp_Unite" || role === "Unite_Controle"){
        // let response = fetch() 
        // setAffectation(response)
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
  
  return (
    
    <PopupBG setShow={setForm}>
      <div onClick={(e)=> e.stopPropagation()} className="h-full w-1/2 bg-white shadow-md p-2 rounded flex flex-col">
        
        {/* Title */}
        <div className='text-3xl font-semibold my-3'>{update? "Modifier" : "Ajouter"} un utilisateur</div>
        {/* divider */}
        <div className='h-px w-full bg-gray-300'/>
        
        {/* form */}
        <form className='h-full w-full flex flex-col mt-3 items-center' onSubmit={handleSubmit}>
          
          {/* form Inputs */}
          <div className=' w-11/12 h-min grid grid-cols-10 gap-4 mt-4'>
          
            <div className='col-span-2 font-semibold'>Nom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='___' type="text"
            required id="heure_de_marche" name='heure_de_marche' />

            <div className='col-span-2 font-semibold'>Prenom </div>            
            <input className="col-span-8 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='________' type="text"
            required id="heure_de_marche" name='heure_de_marche' />

            <div className='col-span-2 font-semibold'>Role </div>
            <div className='col-span-8 pl-2'><DropDownListComponent onChange={e=> setRole(e.value)} dataSource={roles} fields={rolesFields} id="Role" placeholder={"Roles"} ></DropDownListComponent></div>     
            
            <div className='col-span-2 font-semibold'>Region </div>            
            <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" placeholder={"Affectations"} ></DropDownListComponent></div>     

            {(role === "Resp_Unite" || role == "Unite_Controle") && (
              <>
              <div className='col-span-2 font-semibold'>Unite </div>            
              <div className='col-span-8 pl-2'><DropDownListComponent  id="Affectation" placeholder={"Affectations"} ></DropDownListComponent></div>       
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

export default UtilisateurForm