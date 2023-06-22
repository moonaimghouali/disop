import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = "http://localhost:5000"
const RoutePerimetre= `${serverUrl}/api/perimetres`
const RoutePuits= `${serverUrl}/api/puits`
const RouteRegion= `${serverUrl}/api/regions`
const RouteUnite= `${serverUrl}/api/unites`
const RouteUtilisateur= `${serverUrl}/api/utilisateurs`

// //////////////////////////////////////////////////////////////////////////////
// Utilisateur
export const fetchUtilisateurs = async () =>  {
    try {
        return axios.get(`${RouteUtilisateur}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const addUtilisateur = async (utilisateur) =>  {
    try {
        return axios.post(`${RouteUtilisateur}`, utilisateur).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updateUtilisateur = async (userId, body) =>  {
    try {
        return axios.put(`${RouteUtilisateur}/${userId}`).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////
// Regions
export const fetchRegions = async () =>  {
    try {
        return axios.get(`${RouteRegion}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const addRegion = async (region) =>  {
    try {
        return axios.post(`${RouteRegion}`, region).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updateRegion = async (regionId, body) =>  {
    try {
        return axios.put(`${RouteRegion}/${regionId}`).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////
// Unites
export const fetchUnites = async () =>  {
    try {
        return axios.get(`${RouteUnite}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const addUnite = async (unite) =>  {
    try {
        return axios.post(`${RouteUnite}`, unite).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updateUnite = async (uniteId, body) =>  {
    try {
        return axios.put(`${RouteUnite}/${uniteId}`).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////
// Perimetres
export const fetchPerimetres = async () =>  {
    try {
        return axios.get(`${RoutePerimetre}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const addPerimetre = async (perimetre) =>  {
    try {
        return axios.post(`${RoutePerimetre}`, perimetre).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updatePerimetre = async (perimetreId, body) =>  {
    try {
        return axios.put(`${RoutePerimetre}/${perimetreId}`).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

// //////////////////////////////////////////////////////////////////////////////
// Puits
export const fetchPuits = async () =>  {
    try {
        return axios.get(`${RoutePuits}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const addPuits = async (puits) =>  {
    try {
        return axios.post(`${RoutePuits}`, puits).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updatePuits = async (puitsId, body) =>  {
    try {
        return axios.put(`${RoutePuits}/${puitsId}`).then((response) => response)
    } catch (error) {
        console.log(error.message);   
    }  
}