import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = "http://localhost:5000"
const RoutePerimetre= `${serverUrl}/api/perimetres`
const RoutePuits= `${serverUrl}/api/puits`
const RouteRegion= `${serverUrl}/api/regions`

// //////////////////////////////////////////////////////////////////////////////
// Puits
export const fetchPuits = async (perimetreId) =>  {
    try {
        return axios.get(`${RoutePuits}?perimetre=${perimetreId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////
// PuitsProduction
export const fetchPuitsProduction = async (PuitId, journee_production) =>  {
    try {
        return axios.get(`${RoutePuits}/${PuitId}/production?journee_production=${journee_production}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}




// //////////////////////////////////////////////////////////////////////////////
// Perimetres
export const fetchPerimetres = async (RegionId) =>  {
    try {
        return axios.get(`${RoutePerimetre}?region=${RegionId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}