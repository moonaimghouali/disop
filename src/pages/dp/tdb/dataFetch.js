import * as api from '../../../api/dpApi'

export const fetchDpJData = async ( date ) => {

    let prodJournee = await api.fetchDpDailyData(new Date(date).toISOString().split("T")[0])
    let evolution = await api.fetchDpDailyEvolutionData(new Date(date).toISOString().split("T")[0])
    console.log("fetch", prodJournee, evolution);
    return {prodJournee, evolution}
    
}