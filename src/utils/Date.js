export const dateToString = (dateValue) =>{
    let date = new Date(new Date(dateValue) + 24*60*60*60*1000)
    let stringDate =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return stringDate
}

export const dateToLastWeek = (dateValue) =>{
    let date = new Date(new Date(dateValue) - 7*24*60*60*60*1000)
    let stringDate =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return stringDate
}