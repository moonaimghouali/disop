
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

export const calculCoeffCorrection = (densite, temperature) =>{
    let CoeffCorrection = 0;
    return CoeffCorrection
}

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
     let CoeffCorrection = coef_d0 + ((coef_d1 - coef_d0)/(d1 - d0)) * (densite-d0)
 
     return CoeffCorrection;

}

export const calculVolumeStandard = (coteValue, densiteValue , temperatureValue) =>{
    let coeffCorrection  = 0

    // aroondir les valeurs saisis
    let cote = arrondirCote(coteValue)
    let densite = densiteValue
    let temperature = arrondirTemperature(temperatureValue)

    // Get le volume apparent depuis la table de baremage.

    // calculer le CoefCorrectionVolume
    

}

export const calculResultatMouvement = () =>{

}
