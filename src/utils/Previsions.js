
export const checkPerimetresPrevisions = (perimetresPrevision, perimetres, annee) =>{
    if(perimetres.length !== perimetresPrevision.size) return false
    
    let bool = true
    perimetres.map(p=>{
        let arr = perimetresPrevision.get(`p-${p.id}`)
        arr.map(prev => {
            if(prev <= 0 || prev === undefined || prev === null || isNaN(prev)) {
                bool =  false    
            }
        })
    })
    return bool
}

export const formatPrevisions = (perimetresPrevision, perimetres, regionPrevision, date, RegionId) =>{
    let annee = new Date(date).getFullYear()
    let jours = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let perimetresPrev = []
    let regionPrev = []
    perimetres.map(p=>{
        let arr = perimetresPrevision.get(`p-${p.id}`)
        arr.map((prev, i )=> {
            perimetresPrev.push({
            annee_production : annee, mois_production : i+1,  
            prevision_production_perimetre_mensuelle : prev,
            prevision_production_perimetre_journaliere : Number((prev/ jours[i]).toFixed(3)),
            PerimetreId : p.id
        })
        })
    })

    regionPrevision.map((prev, i )=> {
        regionPrev.push({
            annee_production : annee, mois_production : i+1,  
            prevision_production_region_mensuelle : prev,
            prevision_production_region_journaliere : Number((prev/ jours[i]).toFixed(3)),
            RegionId : RegionId
        })
    })
    console.log(perimetresPrev, regionPrev);
    return {perimetresPrev , regionPrev}
}