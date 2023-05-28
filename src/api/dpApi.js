import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const serverUrl = "http://localhost:5000"

const RouteDp= `${serverUrl}/api/analytics`

//////////////////////////////////////////////////////////////////////////////////////////////////////
export const fetchRegions = async () =>  {
    try {
        return axios.get(`${serverUrl}/api/regions`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// Dashboard

export const fetchDpDailyData = async (journee) =>  {
    try {
        return axios.get(`${RouteDp}/dashboard/dp-daily?journee=${journee}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchDpMonthlyData = async (year, month) =>  {
    try {
        return axios.get(`${RouteDp}/dashboard/dp-monthly?annee=${year}&mois=${month}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchRegionDailyData = async (journee, RegionId) =>  {
    try {
        return axios.get(`${RouteDp}/dashboard/region-daily/${RegionId}?journee=${journee}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchRegionMonthlyData = async (year, month, RegionId) =>  {
    try {
        return axios.get(`${RouteDp}/dashboard/region-monthly/${RegionId}?annee=${year}&mois=${month}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}
// export const fetchDpDailyEvolutionData = async (journee) =>  {
//     try {
//         return axios.get(`${RouteDp}/dashboard/journalier/dpEvolution?journee=${journee}`).then((response) => response.data.data)
//     } catch (error) {
//         console.log(error.message);   
//     }  
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////
// Production

export const fetchDailyProduction = async (journee) =>  {
    try {
        return axios.get(`${RouteDp}/prod?start=${journee}&end=${journee}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchMonthlyProduction = async (start, end) =>  {
    try {
        return axios.get(`${RouteDp}/prod?start=${start}&end=${end}`).then((response) => response.data)
    } catch (error) {
        console.log(error.message);   
    }  
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Reporting
export const fetchBilanJournalier = async (journee) =>  {
    try {
        let response = await (axios.get(`${RouteDp}/bilans/bilan-journalier?journee=${journee}`))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const fetchBilanSpe = async (date) =>  {
    let day= date.toISOString().split("T")[0]
    let annee = parseInt(day.split("-")[0])
    let mois = parseInt(day.split("-")[1])
    if (mois === 12) mois=0
    console.log(date, day, annee, mois+1);
    try {
        let response = await (axios.get(`${RouteDp}/bilans/bilan-spe?mois=${mois+1}&annee=${annee}`))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const fetchBilanMem = async (date) =>  {
    let day= date.toISOString().split("T")[0]
    let annee = parseInt(day.split("-")[0])
    let mois = parseInt(day.split("-")[1])
    if (mois === 12) mois=0
    console.log(date, day, annee, mois+1);
    try {
        let response = await (axios.get(`${RouteDp}/bilans/bilan-mem?mois=${mois+1}&annee=${annee}`))
        return response
    } catch (error) {
        console.log(error);
    }
}





