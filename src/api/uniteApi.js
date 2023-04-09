import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require("dotenv").config();

const serverUrl = "http://localhost:5000"

const RouteUnite= `${serverUrl}/api/unites/${1}`
const RouteMouvements = `${serverUrl}/api/bacOperations/`
const RouteUniteProduction = `${serverUrl}/api/unites/${1}/productionData/`
const RouteBacs = `${serverUrl}/api/bacs`
const RouteTableBaremages= `${serverUrl}/api/tableBaremage`
const RouteCommentaires = `${serverUrl}/api/commentaires/`

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Mouvements
export const fetchMouvements = createAsyncThunk("mouvements/fetchMouvements", ({operation , bac}) =>  {
    return axios.get(`${RouteUnite}/bacsOperations?type_operation=${operation}&bac=${bac}`).then((response) => response.data.data)
})

export const postMouvement = async (body) =>{
    const response = (await axios.post(RouteMouvements, body))
    return response
}

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Production
export const fetchUniteProduction = createAsyncThunk("production/fetchUniteProduction", () =>  {
    return axios.get(`${RouteUnite}/productionData`).then((response) => response.data.data)
})

export const postUniteProduction = async (body) =>{
    const response = (await axios.post(`${RouteUniteProduction}`, body))
    return response
}



// /////////////////////////////////////////////////////////////////////////////////////////////////
//bacs
export const  fetchBacs =  createAsyncThunk("bacs/fetchBacs", () =>  {
    return axios.get(`${RouteUnite}/getbacs`).then((response) => response.data.data)
})

export const postBacBareme = async (body) =>{
    const response = (await axios.post(`${RouteBacs}/bareme`, body))
    return response
}


// /////////////////////////////////////////////////////////////////////////////////////////////////
// TableBaremage 
export const  fetchTableBaremage =  async () =>{
    const response = (await axios.get(`${RouteBacs}/${8}/tableBaremage`))
    return response
}

export const postTableBaremage = async (body) =>{
    const response = (await axios.post(`${RouteTableBaremages}`, body))
    return response
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
//Commentaires

export const  fetchCommentaires =  createAsyncThunk("commentaires/fetchCommentaires", () =>  {
    return axios.get(`${RouteUnite}/commentaires`).then((response) => response.data.data)
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