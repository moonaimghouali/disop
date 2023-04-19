import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const serverUrl = "http://localhost:5000"

const RouteDp= `${serverUrl}/api/analytics`

export const fetchProductionRegionByUnites = async ({start, end}) =>  {
    try {
        return axios.get(`${RouteDp}/productionRegionsByUnites?start=${start}&end=${end}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

