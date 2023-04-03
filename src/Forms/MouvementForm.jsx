import React, {useState, useEffect} from 'react'
import MouvementMesuresForm from '../pages/unite/components/MouvementMesuresForm'
import MenuMouvements from '../pages/unite/components/MenuMouvements'
import { validateMouvementForm } from './UniteFormValidation'
import { useSelector } from 'react-redux'
import { calculResultatMouvement, calculResultatJournee } from '../utils/CalculProduction'

const MouvementForm = () => {

    const [error, setError] = useState({error:false , errorMessage:""})
    let menuMouvements = useSelector((state) =>state.menus.menuMouvementsValue)
    
    useEffect(()=>{
        
        console.log(menuMouvements)
    },[menuMouvements])

    // handle the submit event
    const handleSubmit = (e) =>{

        e.preventDefault()
        // verify the user has selected an operation and a bac
        if(menuMouvements.operation ==="NAN"){
            setError({error:true , errorMessage:"Veiullez choisir une operation."})
            return
        }
        if(menuMouvements.bac ==="NAN") {
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
        // validateMouvementForm()
        // if error set error 
        // else delete all errors
        let bilan;
        if(menuMouvements.operation === "StockFinal") {
            bilan = calculResultatJournee(FormValues)
            console.log(bilan, menuMouvements)
        }else{
            bilan = calculResultatMouvement(FormValues)
            console.log(bilan, menuMouvements)
        }

        // update bac storage with volume apparent finale


        // post the mouvement
        let requestBody = {
            dateOperatio : new Date(),
            typeOperation : menuMouvements.operation,
            inialCote : bilan.valeursInitiales.cote,
            initialTemperature : bilan.valeursInitiales.temperature,
            initialDensite : bilan.valeursInitiales.densite,
            initialVolumeApparent : bilan.valeursInitiales.volumeApparent,
            initialCoeffCorrection : bilan.valeursInitiales.coeffCorrection,
            initialVolumeStandard : bilan.valeursInitiales.volumeStandard,
            initialMasseStandard : bilan.valeursInitiales.masseStandard,
            finalCote : bilan.valeursFinales.cote,
            finalTemperature : bilan.valeursFinales.temperature,
            finalDensite : bilan.valeursFinales.densite,
            finalVolumeApparent : bilan.valeursFinales.volumeApparent,
            finalCoeffCorrection : bilan.valeursFinales.coeffCorrection,
            finalVolumeStandard : bilan.valeursFinales.volumeStandard,
            finalMasseStandard : bilan.valeursFinales.masseStandard,
            resultatVolumeStandard : bilan.resultatVolumeStandard ,
            resultatMasseStandard : bilan.resultatVolumeStandard,
            BacId : menuMouvements.bac
        }
        // post the requestBody

        // if success clear the form else show the error
    }

  return (
    <div className='h-full w-1/2 '>
        <form className='h-full w-full flex flex-col gap-6' method='POST' onSubmit={handleSubmit}>
            <MenuMouvements type={false}/>
            <MouvementMesuresForm />
            

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