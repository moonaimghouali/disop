import React,{useState, useEffect} from 'react'

const FormPuits = ({puits, date}) => {
    const [disabled, setDisabled] = useState(false)

    useEffect(()=>{
        console.log("form", puits, date);

        // fetch Puits production 
        // if exists dislay it set disabled to true
        // else let the user fill the form
        
    }, [puits, date])

    const handleSubmit = () =>{

    }

  return (
    <div className='h-full w-1/3 flex flex-col mt-4 '>
        <form className='w-full h-fit grid grid-cols-10 gap-2 ' onSubmit={handleSubmit}>
           
            <div className='col-span-6'>Heures de marche </div>            
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2 " placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
            

            <div className='col-span-6'>Pression pipe </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
            

            <div className='col-span-6'>Pression tete </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
            

            <div className='col-span-6'>Temperature tete </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
       

            <div className='col-span-6'>Debit horaire huile </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
           

            <div className='col-span-6'>coeff_k  </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
            

            <div className='col-span-6'>GOR  </div>
            <input className="col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
           

            <div className='mt-3 font-semibold col-span-6'>Production Puits </div>
            <input className="mt-3 col-span-4 border-1 border-gray-400 h-8 pl-2 ml-2" placeholder='hh:mm' type="text"
            required value="22:33" disabled={disabled}
            id="heure_de_marche" name='heure_de_marche' />
            
            
        </form>
    </div>
  )
}

export default FormPuits