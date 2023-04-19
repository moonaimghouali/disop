import { ASTM } from "./ASTM"
import {fetchVolumeApparent} from '../api/uniteApi'

// aroondir la cote saisi en dm et mm 
export const arrondirCote = (cote) =>{
    
    const coteEntiere = Math.round(cote)
    const coteInDM = coteEntiere /100
    const dm = Math.trunc(coteInDM)
    var mm = coteEntiere - (dm*100)
    
    console.log(cote , coteEntiere , coteInDM, dm, mm);
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
export const calculVolumeStandard = async(coteValue, densiteValue , temperatureValue, BacId) =>{
    let coef_correction  = 0

    if(coteValue === 0 && densiteValue ===0 && temperatureValue === 0) {
        console.log("here");
        return {cote : {coteDm : 0 , coteMm : 0} , densite : 0 , temperature : 0 , volume_apparent : 0 , coef_correction : 0 , volume_standard : 0 , masse_standard : 0}
    }
    // aroondir les valeurs saisis
    let cote = arrondirCote(coteValue)
    let densite = Number(densiteValue)
    let temperature = Number(arrondirTemperature(temperatureValue))

    let volume_apparent =0
    // Get le volume apparent depuis la table de baremage.
    try {
    if(coteValue !== 0){
            
        let response = await fetchVolumeApparent({BacId : BacId, dm_valeur :cote.coteDm , mm_valeur : cote.coteMm}) 
        if(response.data.success) {
            volume_apparent = response.data.data[0].volume_apparent
        }
    }
    } catch (error) {
        console.log(error);
        return
    }

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
export const calculResultatMouvement = async (v, BacId) =>{
    let valeursInitiales = await calculVolumeStandard(v.initiale_cote , v.initiale_densite, v.initiale_temperature, BacId)
    let valeursFinales = await calculVolumeStandard(v.finale_cote , v.finale_densite, v.finale_temperature, BacId)

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
export const calculResultatJournee = async (v, BacId) => {
    let valeursFinales = await calculVolumeStandard(v.finale_cote , v.finale_densite, v.finale_temperature, BacId)
    let valeursInitiales = await calculVolumeStandard(0 , 0, 0,BacId)

    console.log("I" , valeursInitiales);
    console.log("F" , valeursFinales);
    let resultat_volume_standard = Math.abs(valeursFinales.volume_standard  )
    console.log(resultat_volume_standard * valeursFinales.densite);
    let resultat_masse_standard = resultat_volume_standard * valeursFinales.densite

    return {
        valeursInitiales,
        valeursFinales,
        resultat_volume_standard ,
        resultat_masse_standard
    }
}

// Calculer La production Journaliere Par Bac
export const calculBacProductionJournaliere = (bac) => {

    let operations = bac.BacsOperations.filter(op => op.type_operation ==="Expedition" || op.type_operation ==="Purge")
    let StockFinal = bac.BacsOperations.filter(op => op.type_operation ==="StockFinal" )
    let journee_production = new Date(new Date() - 24*60*60*1000).toISOString().split("T")[0]
   
    if(StockFinal.length !== 1 ) return
    // check date Validation 

    let bac_stock_initial_tm = StockFinal[0].initiale_masse_standard
    let bac_stock_initial_vm = StockFinal[0].initiale_volume_standard
    let bac_stock_final_tm = StockFinal[0].finale_masse_standard
    let bac_stock_final_vm = StockFinal[0].finale_volume_standard

    let bac_expedition_tm = 0
    let bac_expedition_vm = 0
    let bac_purge_tm = 0
    let bac_purge_vm = 0
    
    if(operations.length > 0){
        for (let i = 0; i < operations.length; i++) {
            if (operations[i].type_operation ==="Expedition") {
                bac_expedition_tm += operations[i].resultat_masse_standard
                bac_expedition_vm += operations[i].resultat_volume_standard
            }
            if (operations[i].type_operation ==="Purge") {
                bac_purge_tm += operations[i].resultat_masse_standard
                bac_purge_vm += operations[i].resultat_volume_standard
            }     
        }
    }
    let response = {
        BacId : bac.id ,
        code_bacs : bac.code_bacs,
        journee_production,
        bac_stock_initial_tm,
        bac_stock_initial_vm,
        bac_purge_tm,
        bac_purge_vm,
        bac_expedition_tm,
        bac_expedition_vm,
        bac_production_tm : Number(( bac_stock_final_tm - bac_stock_initial_tm + bac_purge_tm + bac_expedition_tm).toFixed(3)),
        bac_production_vm : Number((bac_stock_final_vm - bac_stock_initial_vm + bac_purge_vm + bac_expedition_vm).toFixed(3)),
        bac_stock_final_tm ,
        bac_stock_final_vm 
    }
    return response
}

// calculer la production Journaliere de l'Unite
export const calculUniteProductionJournaliere = (Bacs) => {

    let BacsProductionBilans = []
    let BacsOperations = Bacs.filter((bac)=> bac.type_bacs !=="OffSpecs")
    console.log(BacsOperations);
    let journee_production = new Date(new Date() - 24*60*60*1000).toISOString().split("T")[0]

    let stock_initial_tm =0
    let stock_initial_vm =0
    let expedition_unite_tm = 0
    let expedition_unite_vm = 0
    let purge_unite_tm = 0
    let purge_unite_vm = 0
    let production_unite_tm = 0
    let production_unite_vm = 0
    let stock_final_tm =0
    let stock_final_vm =0

    BacsOperations.map((bac) => {
        let res = calculBacProductionJournaliere(bac)

        stock_initial_tm += res.bac_stock_initial_tm
        stock_initial_vm +=res.bac_stock_initial_vm
        expedition_unite_tm += res.bac_expedition_tm
        expedition_unite_vm += res.bac_expedition_vm
        purge_unite_tm += res.bac_purge_tm
        purge_unite_vm += res.bac_purge_vm
        production_unite_tm += res.bac_production_tm
        production_unite_vm += res.bac_production_vm
        stock_final_tm +=res.bac_stock_final_tm
        stock_final_vm +=res.bac_stock_final_vm
        BacsProductionBilans.push(res)
    })
    let response = {
        UniteId : BacsOperations[0].UniteId,
        journee_production,
        stock_initial_tm ,
        stock_initial_vm ,
        expedition_unite_tm ,
        expedition_unite_vm ,
        purge_unite_tm ,
        purge_unite_vm ,
        production_unite_tm ,
        production_unite_vm ,
        stock_final_tm ,
        stock_final_vm ,
    }
    return { bilanProductionUnite : response , bilanProductionBacs  : BacsProductionBilans}
}

// calculer la production Journaliere de l'Unite
export const calculRegionProductionJournaliere = (bilansUnites, RegionId) => {
    
    console.log("id" , bilansUnites[0])
    let bilanProductionRegion = {
        journee_production : bilansUnites[0].production.journee_production,
        RegionId : RegionId,
        stock_initial_tm :0 ,
        stock_initial_vm :0 ,
        production_region_tm :0 ,
        production_region_vm :0 ,
        expedition_region_tm :0 ,
        expedition_region_vm :0 ,
        stock_final_tm :0 ,
        stock_final_vm :0 ,
       }

    bilansUnites.map((unite)=>{
        bilanProductionRegion.stock_initial_tm += unite.production.stock_initial_tm
        bilanProductionRegion.stock_initial_vm += unite.production.stock_initial_vm
        bilanProductionRegion.production_region_tm += unite.production.production_unite_tm
        bilanProductionRegion.production_region_vm += unite.production.production_unite_vm
        bilanProductionRegion.expedition_region_tm += unite.production.expedition_unite_tm
        bilanProductionRegion.expedition_region_vm += unite.production.expedition_unite_vm
        bilanProductionRegion.stock_final_tm += unite.production.stock_final_tm
        bilanProductionRegion.stock_final_vm += unite.production.stock_final_vm

   })

   return bilanProductionRegion
}

