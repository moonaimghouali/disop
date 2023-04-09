import { ASTM } from "./ASTM"
// aroondir la cote saisi en dm et mm 
export const arrondirCote = (cote) =>{

    const coteEntiere = Math.round(cote)
    const coteInDM = coteEntiere /100
    const dm = Math.trunc(coteInDM)
    var mm = coteEntiere - (dm*100)
    
    let i = -1
    while (mm > 0) {
        mm -=10;
        i++;
    }
    if(i < 0 ) i=0
    return ({coteDm : dm , coteMm : i*10})
}

// arrondir la temperature saisi
export const arrondirTemperature = (temperature) =>{

    let temperatureEntiere = Math.trunc(temperature)
    let temperatureDecimal = Number((temperature - temperatureEntiere).toFixed(2))
    let temperatureArrondi = 0
    if(temperatureDecimal < 0.25 && temperatureDecimal >= 0){
        temperatureArrondi = temperatureEntiere

    }else if(temperatureDecimal >= 0.25 && temperatureDecimal <= 0.75 ){
        temperatureArrondi = temperatureEntiere +0.5

    }else{
        temperatureArrondi = temperatureEntiere + 1
    }
    return temperatureArrondi
}

// Calculer le coeffcient de correction depuis la tables ASTM
export const calculCoeffCorrection = (densite, temperature) =>{

    let index = 0;
    if((densite < 0.5) || (densite > 0.6 && densite < 0.690) || (densite > 0.870 )){
        console.log(" [error area]")
        return
    }
    // density between 0.6 and 0.5
    if (densite >= 0.500 && densite <= 0.600 && temperature <= 60.5 ){
        console.log(" [0.5 , 0.6]")
        let steps = Math.round(((densite - 0.5) * 1000) / 5 )
        index = Math.trunc(steps) * 61 + Math.trunc(temperature)
    }

    // density between 0.69 and 0.87
    if (densite >= 0.690 && densite <= 0.870 && temperature <= 75){
        console.log(" [0.690 , 0.870]")
        let steps = Math.round(((densite - 0.690) * 1000) / 5 )
        index =(1281) + Math.trunc(steps) * 76 + Math.trunc(temperature)
        console.log(steps , index)
    }

    if(Math.trunc(temperature) === temperature ){
        return ASTM[index][2]
    }else{
        return ASTM[index][3] 
    }
}

// Calculer le coeffcient de correction depuis la tables ASTM par la methode d'interopolation
export const calculCoeffCorrectionInterpolation = (densite, temperature) =>{
    //determine the densities to use for the interpolation method
    let d0 = 0.5
    let d1 = 0.505
    while (densite > d0 & densite > d1){
        d0 = d1 
        d1 = d1 + 0.005
    }
    d0 = Number(d0).toFixed(3)
    d1 = Number(d1).toFixed(3)

     //Get from astm54 table coef_d0 and  coef_d1 coresponding to d0 and d1
     let coef_d0 = calculCoeffCorrection(d0 , temperature)
     let coef_d1 = calculCoeffCorrection(d1 , temperature)
    
    //calcul du coeffecient de correction
     let coef_correction = coef_d0 + ((coef_d1 - coef_d0)/(d1 - d0)) * (densite-d0)
 
     return coef_correction;

}

// Calculer le volume et masse standard d'un bac
export const calculVolumeStandard = (coteValue, densiteValue , temperatureValue) =>{
    let coef_correction  = 0

    // aroondir les valeurs saisis
    let cote = arrondirCote(coteValue)
    let densite = Number(densiteValue)
    let temperature = Number(arrondirTemperature(temperatureValue))

    // Get le volume apparent depuis la table de baremage.
    let volume_apparent = Number(11345.67)

    // calculer le CoefCorrectionVolume
    if((densite*1000) % 5 === 0){
        coef_correction  = calculCoeffCorrection(densite, temperature)
    }else{
        coef_correction  = calculCoeffCorrectionInterpolation(densite, temperature)
    }

    let volume_standard = Number(volume_apparent * coef_correction ).toFixed(3)
    let masse_standard =  Number(volume_standard * densite ).toFixed(3)
    volume_apparent = Number(volume_apparent).toFixed(3)
    
    return {cote , densite , temperature , volume_apparent , coef_correction , volume_standard , masse_standard}
}

// Calculer le resultat d'un mouvement (expedition, purge)
export const calculResultatMouvement = (v) =>{
    let valeursInitiales = calculVolumeStandard(v.initiale_cote , v.initiale_densite, v.initiale_temperature)
    let valeursFinales = calculVolumeStandard(v.finale_cote , v.finale_densite, v.finale_temperature)

    let resultat_volume_standard = Math.abs(valeursFinales.volume_standard - valeursInitiales.volume_standard)
    let resultat_masse_standard = resultat_volume_standard * valeursFinales.densite

    return {
        valeursInitiales, 
        valeursFinales,
        resultat_volume_standard ,
        resultat_masse_standard
    }
};

// Calculer le stock d'un bac a mi-nuit (Stock final)
export const calculResultatJournee = (v) => {
    let valeursFinales = calculVolumeStandard(v.finale_cote , v.finale_densite, v.finale_temperature)
    let valeursInitiales = calculVolumeStandard(0 , 0, 0)

    let resultat_volume_standard = Math.abs(valeursFinales.volume_standard  )
    let resultat_masse_standard = resultat_volume_standard * valeursFinales.densite

    return {
        valeursInitiales,
        valeursFinales,
        resultat_volume_standard ,
        resultat_masse_standard
    }
}
