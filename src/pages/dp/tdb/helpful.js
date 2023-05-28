export const formatStats = (stats, journee) =>{
    // console.log(stats)

    if(stats.length !== 4 ) return []
    
    // console.log( stats[0], stats[1], stats[2], stats[3])

    let data = []
    let mensuelLastYear = {realisation : (stats[1].production - stats[0].production), expedition : (stats[1].expedition - stats[0].expedition)}
    let mensuel = {realisation : (stats[3].production - stats[2].production), expedition : (stats[3].expedition - stats[2].expedition)}
    
    let monthlyStat = {titre : "Realisation Mensuel" , value : mensuel.realisation, evolution : Number((((mensuel.realisation - mensuelLastYear.realisation)/(mensuelLastYear.realisation))*100).toFixed(2)) }

    let yearlyStat = {titre : "Realisation Annuel" , value : stats[3].production, evolution : Number((((stats[3].production - stats[1].production)/(stats[1].production))*100).toFixed(2))}

    data.push(monthlyStat, yearlyStat)
    return data

    // console.log("Stats", data)
}