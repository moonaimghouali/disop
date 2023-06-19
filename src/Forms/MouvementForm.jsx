import React, {useState, useEffect} from 'react'
import MouvementMesuresForm from '../pages/unite/components/MouvementMesuresForm'
import MenuMouvements from '../pages/unite/components/MenuMouvements'
import { validateMouvementForm } from './UniteFormValidation'
import { updateBilanMouvement } from '../store/slices/BilansSlice'
import { useSelector , useDispatch} from 'react-redux'
import { calculResultatMouvement, calculResultatJournee } from '../utils/CalculProduction'

const MouvementForm = ({MouvementsMenu, setMouvementsMenu}) => {

    const [error, setError] = useState({error:false , errorMessage:""})
    // let menuMouvements = useSelector((state) =>state.menus.menuMouvementsValue)
    const dispatch = useDispatch()

    // useEffect(()=>{    
    //     console.log(menuMouvements)
    // },[menuMouvements])

    // handle the submit event
    const handleSubmit = async(e) =>{

        e.preventDefault()
        // verify the user has selected an operation and a bac
        if(MouvementsMenu.operation ==="NAN"){
            setError({error:true , errorMessage:"Veiullez choisir une operation."})
            return
        }
        if(MouvementsMenu.bac ==="NAN") {
            setError({error:true , errorMessage:"Veiullez choisir un bac."})
            return
        }
            
        let FormValues = {
            initiale_densite : e.target.initiale_densite.value,
            initiale_cote : e.target.initiale_cote.value,
            initiale_temperature : e.target.initiale_temperature.value,
            finale_densite : e.target.finale_densite.value,
            finale_cote : e.target.finale_cote.value,
            finale_temperature : e.target.finale_temperature.value
        }
         
        // validate the inputs
        let {error, errorMessage} = validateMouvementForm(FormValues, MouvementsMenu.operation)
        if (error) {
            setError({error : error, errorMessage : errorMessage})
            return
        }
        setError({error:false , errorMessage:""})
        
        let resultat;
        if(MouvementsMenu.operation === "StockFinal") {
            resultat = await calculResultatJournee(FormValues, MouvementsMenu.bac)
        }else{
            resultat = await calculResultatMouvement(FormValues, MouvementsMenu.bac)
        }
        // suvgarder le bilan dans state
        let bilan = {
            id : null,
            date_operation : new Date(),
            type_operation : MouvementsMenu.operation,
            initiale_cote : resultat.valeursInitiales.cote,
            initiale_temperature : resultat.valeursInitiales.temperature,
            initiale_densite : resultat.valeursInitiales.densite,
            initiale_volume_apparent : Number (resultat.valeursInitiales.volume_apparent),
            initiale_coef_correction : Number (resultat.valeursInitiales.coef_correction),
            initiale_volume_standard : Number (resultat.valeursInitiales.volume_standard),
            initiale_masse_standard : Number (resultat.valeursInitiales.masse_standard),
            finale_cote : resultat.valeursFinales.cote,
            finale_temperature : resultat.valeursFinales.temperature,
            finale_densite : resultat.valeursFinales.densite,
            finale_volume_apparent : Number (resultat.valeursFinales.volume_apparent),
            finale_coef_correction : Number (resultat.valeursFinales.coef_correction),
            finale_volume_standard : Number (resultat.valeursFinales.volume_standard),
            finale_masse_standard : Number (resultat.valeursFinales.masse_standard),
            resultat_volume_standard : Number (resultat.resultat_volume_standard ),
            resultat_masse_standard : Number (resultat.resultat_masse_standard),
            BacId : MouvementsMenu.bac
        }
        console.log(bilan);
        dispatch(updateBilanMouvement({bilan : bilan , hide: false}))
    }

  return (
    <div className='h-full w-1/2 '>
        <form className='h-full w-full flex flex-col gap-6' method='POST' onSubmit={handleSubmit}>
            
            <MenuMouvements type={false} MouvementsMenu={MouvementsMenu} setMouvementsMenu={setMouvementsMenu} />
            {error.error && (<div className=' text-red-600 text-base font-semibold'>{error.errorMessage}</div>)}
            <MouvementMesuresForm MouvementsMenu={MouvementsMenu} setMouvementsMenu={setMouvementsMenu}/>
            {/* Button  */}
            <div className='flex w-full items-center justify-center px-20'>
                <button type="submit" className='h-10 w-full rounded-sm text-lg text-white font-semibold shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg ease-in-out duration-150'>
                    Calculer</button>
            </div>
        </form>
    </div>
  )
}

export default MouvementForm