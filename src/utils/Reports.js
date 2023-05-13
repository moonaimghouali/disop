export const formatBilanJournalier =(data)=>{
    // console.log(data);
    let array = []
    console.log("formatting", data);
    data.map((region) =>{
        if ( !Object.hasOwn(region, "Production_regions") || !Object.hasOwn(region, "Realisation_regions") || !Object.hasOwn(region, "Prevision_regions")) return
        console.log("here1");
        if ( !(region.Production_regions.length === 1 && region.Realisation_regions.length === 2 && region.Prevision_regions.length === 1)) return
       
        
        let row = {
            id : region.id,
            code_region : region.code_region,
            nom_region : region.nom_region,
            realisation_journee : region.Production_regions[0].production_region_tm,
            prevision_journee : region.Prevision_regions[0].prevision_production_region_journaliere,
            ecart_journee : (((region.Production_regions[0].production_region_tm ) / region.Prevision_regions[0].prevision_production_region_journaliere) *100).toFixed(3),
            realisation_mensuel : Math.abs(region.Realisation_regions[0].realisation_region_production_tm - region.Realisation_regions[1].realisation_region_production_tm),
            prevision_mensuel : region.Prevision_regions[0].prevision_production_region_mensuelle,
            ecart_mensuel : ((Math.abs(region.Realisation_regions[0].realisation_region_production_tm - region.Realisation_regions[1].realisation_region_production_tm) / region.Prevision_regions[0].prevision_production_region_mensuelle) *100 ).toFixed(3),
        }
        array.push(row)
    })
    // console.log(array);
    return array;
}