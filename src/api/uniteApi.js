import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require("dotenv").config();

const serverUrl = "http://localhost:5000"


const RouteMouvements = `${serverUrl}/api/bacOperations/`
const RouteBacs = `${serverUrl}/api/unites/${1}/getbacs`
const RouteCommentaires = `${serverUrl}/api/commentaires`

// /////////////////////////////////////////////////////////////////////////////////////////////////
//Mouvements
export const fetchMouvements = createAsyncThunk("mouvements/fetchMouvements", () =>  {
    return axios.get(RouteBacs).then((response) => response.data.data)
})



// /////////////////////////////////////////////////////////////////////////////////////////////////
//bacs
export const  fetchBacs =  createAsyncThunk("bacs/fetchBacs", () =>  {
    return axios.get(RouteBacs).then((response) => response.data.data)
})



// ////////////////////////////////////////////////////////////////////////////////////////////////
//Commentaires
export const  fetchCommentaires =  createAsyncThunk("Commentaires/fetchCommentaires", () =>  {
    return axios.get(RouteBacs).then((response) => response.data.data)
})

export const postCommentaire = async (body) =>{
    const response = (await axios.post(`${RouteCommentaires}`, body))
    return response
}