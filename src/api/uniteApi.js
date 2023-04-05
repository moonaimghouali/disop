import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require("dotenv").config();

const serverUrl = "http://localhost:5000"


const RouteMouvements = `${serverUrl}/api/unites/${1}/bacsOperations/`
const RouteUniteProduction = `${serverUrl}/api/unites/${1}/productionData/`
const RouteBacs = `${serverUrl}/api/unites/${1}/getbacs`
const RouteCommentaires = `${serverUrl}/api/unites/${1}/commentaires`

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Mouvements
export const fetchMouvements = createAsyncThunk("mouvements/fetchMouvements", ({operation , bac}) =>  {
    return axios.get(`${RouteMouvements}?type_operation=${operation}&bac=${bac}`).then((response) => response.data.data)
})

export const postMouvement = async (body) =>{
    const response = (await axios.post(`${serverUrl}/api/bacOperations`, body))
    return response
}

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Production
export const fetchUniteProduction = createAsyncThunk("production/fetchUniteProduction", () =>  {
    return axios.get(RouteUniteProduction).then((response) => response.data.data)
})

export const postUniteProduction = async (body) =>{
    const response = (await axios.post(`${RouteUniteProduction}`, body))
    return response
}



// /////////////////////////////////////////////////////////////////////////////////////////////////
//bacs
export const  fetchBacs =  createAsyncThunk("bacs/fetchBacs", () =>  {
    return axios.get(RouteBacs).then((response) => response.data.data)
})



// ////////////////////////////////////////////////////////////////////////////////////////////////
//Commentaires

export const  fetchCommentaires =  createAsyncThunk("commentaires/fetchCommentaires", () =>  {
    return axios.get(`${RouteCommentaires}`).then((response) => response.data.data)
})

// export const  fetchCommentaires =  () =>  {
//     try {
//         return axios.get(`${RouteCommentaires}/unite/${1}`).then((response) => response.data.data)
//     } catch (error) {
//         console.error(error);
//     }       
// }

export const postCommentaire = async (body) =>{
    const response = (await axios.post(`${RouteCommentaires}`, body))
    return response
}