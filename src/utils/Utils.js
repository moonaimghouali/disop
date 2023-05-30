export const formatUnitesPuitsResponse = (res) =>{
    let response = []
    let valid = true

    res.map((unite)=>{

        if (unite.Production_unites.length !==1)  valid =false

        let uniteRow = {
            id : unite.id,
            code : unite.code,
            ...unite.Production_unites[0],
            puits : []
        }

        unite.Puits.map((puits) =>{
            if (puits.PuitsProductions.length !==1)  valid =false

            let puitsRow = {
                id : puits.id,
                code : puits.code,
                PerimetreId : puits.PerimetreId,
                UniteId : puits.UniteId,
                ...puits.PuitsProductions[0]
            }
            uniteRow.puits.push(puitsRow)
        })

        response.push(uniteRow)
    })

    // console.log("unitepuits",valid, res, response)
    return {valid : valid, res : response}
}