import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const serverUrl = "http://localhost:5000"

const RouteDp= `${serverUrl}/api/analytics`
// //////////////////////////////////////////////////////////////////////////////////////////////////
// Dashboard
export const fetchRegions = async () =>  {
    try {
        return axios.get(`${serverUrl}/api/regions`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchDpDailyData = async (journee) =>  {
    try {
        return axios.get(`${RouteDp}/dashboard/dpJournalier?journee=${journee}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}


// //////////////////////////////////////////////////////////////////////////////////////////////////
// Production

export const fetchProductionRegionByUnites = async ({start, end}) =>  {
    try {
        return axios.get(`${RouteDp}/productionRegionsByUnites?start=${start}&end=${end}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Reporting
export const fetchBilanJournalier = async (journee) =>  {
    try {
        let response = await (axios.get(`${RouteDp}/bilans/bilanJournalier?journee=${journee}`))
        return response
    } catch (error) {
        console.log(error);
    }
}




