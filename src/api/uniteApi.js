import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require("dotenv").config();

const serverUrl = "http://localhost:5000"

const RouteUnite= `${serverUrl}/api/unites`
const RouteMouvements = `${serverUrl}/api/bacOperations`
const RouteBacs = `${serverUrl}/api/bacs`
const RouteTableBaremages= `${serverUrl}/api/tableBaremage`
const RouteCommentaires = `${serverUrl}/api/commentaires/`

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Mouvements
export const fetchMouvements = createAsyncThunk("mouvements/fetchMouvements", ({operation , bac, UniteId}) =>  {
    try {
        return axios.get(`${RouteUnite}/${UniteId}/bacsOperations?type_operation=${operation}&bac=${bac}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
})

export const postMouvement = async (body) =>{
    try {
        const response = (await axios.post(RouteMouvements, body))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const fetchLastStockFinalMouvement = async ({ BacId }) =>  {
    try {
        const response = (await axios.get(`${RouteMouvements}/StockFinal?BacId=${BacId}`))
        return response
    } catch (error) {
        console.log(error.message);   
    }  
}


// /////////////////////////////////////////////////////////////////////////////////////////////////
//Production
export const fetchUniteProduction = createAsyncThunk("production/fetchUniteProduction", (UniteId) =>  {
    try {
        return axios.get(`${RouteUnite}/${UniteId}/productionData`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const postUniteProduction = async (body) =>{
    try {
        const response = (await axios.post(`${RouteUnite}/${body.UniteId}/productionData`, body))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const fetchUniteProductionJournaliere = async (UniteId) =>{
    try {
        const response = (await axios.get(`${RouteMouvements}/aujourdhui?UniteId=${UniteId}`))
        return response
    } catch (error) {
        console.log(error);
    }
}



// /////////////////////////////////////////////////////////////////////////////////////////////////
//bacs
export const  fetchBacs =  createAsyncThunk("bacs/fetchBacs", (UniteId) =>  {
    try {
        return axios.get(`${RouteUnite}/${UniteId}/getbacs`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const postBacBareme = async (body) =>{
    try {
        const response = (await axios.post(`${RouteBacs}/bareme`, body))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const updateBacStorage = async ({ BacId, stockage_actuel}) =>{
    try {
        const response = (await axios.put(`${RouteBacs}/${BacId}`, {stockage_actuel : stockage_actuel}))
        return response
    } catch (error) {
        console.log(error);
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////
// TableBaremage 
export const  fetchTableBaremage =  async (id) =>{
    try {
        const response = (await axios.get(`${RouteBacs}/${id}/tableBaremage`))
        return response  
    } catch (error) {
        console.log(error);
    }
}

export const  fetchBareme =  async (id) =>{
    try {
        const response = (await axios.get(`${RouteBacs}/${id}/bareme`))
        return response
    } catch (error) {
        console.log(error);
    }
    
}

export const postTableBaremage = async (body) =>{
    try {
        const response = (await axios.post(`${RouteTableBaremages}`, body))
        return response
    } catch (error) {
        console.log(error);
    }   
}

export const  fetchVolumeApparent =  async (body) =>{
    try {
        console.log(body);
        const response = (await axios.post(`${RouteTableBaremages}/volume`, body))
        return response
    } catch (error) {
        console.log(error);
    }
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
//Commentaires

export const  fetchCommentaires =  createAsyncThunk("commentaires/fetchCommentaires", (UniteId) =>  {
    try {
        return axios.get(`${RouteUnite}/${UniteId}/commentaires`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const postCommentaire = async (body) =>{
    try {
        const response = (await axios.post(`${RouteCommentaires}`, body))
        return response
    } catch (error) {
        console.log(error);
    } 
}