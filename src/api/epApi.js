import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = "http://localhost:5000"
const RoutePerimetre= `${serverUrl}/api/perimetres`
const RoutePuits= `${serverUrl}/api/puits`
const RouteRegion= `${serverUrl}/api/regions`
const RouteUnite= `${serverUrl}/api/unites`

// //////////////////////////////////////////////////////////////////////////////
// Puits
export const fetchPuits = createAsyncThunk("puits/fetchPuits", (perimetreId) =>  {
    try {
        return axios.get(`${RoutePuits}?perimetre=${perimetreId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const fetchPerimetrePuits =  (perimetreId) =>  {
    try {
        return axios.get(`${RoutePuits}?perimetre=${perimetreId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
}

// //////////////////////////////////////////////////////////////////////////////
// PuitsProduction

export const fetchUnitesPuitsProduction = async (RegionId, journee_production) =>  {
    try {
        return axios.get(`${RoutePuits}/prod?journee_production=${journee_production}&region=${RegionId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const fetchPuitsProduction = async (PuitId, journee_production) =>  {
    try {
        return axios.get(`${RoutePuits}/${PuitId}/production?journee_production=${journee_production}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}


export const postPuitsProductions = async (puitsProduction) =>  {
       try {
       const response = (await axios.post(`${RoutePuits}/production`, puitsProduction))
       return(response)
       } catch (error) {
           console.log(error);   
       }
}

export const updatePuitsProductions = async (prodCorrigee) =>  {

     prodCorrigee.map(async(unite)=>{

        await unite.puits.map(async (puits)=>{

        try {
        const response = (await axios.put(`${RoutePuits}/production/${puits.id_production_puits}`, {taux_contribution : puits.taux_contribution, production_corrigee : puits.production_corrigee}))
        return(response)
        } catch (error) {
            console.log(error.message);   
        }
        })
    })
    
    return true;
}

// //////////////////////////////////////////////////////////////////////////////////////////
// Puits parametres

export const fetchPuitsParametres = async (PuitId, journee_production) =>  {
    try {
        return axios.get(`${RoutePuits}/${PuitId}/parametres?journee_production=${journee_production}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}

export const updatePuitsStatut = async (PuitId, statut_puits) =>  {
    try {
        const response = (await axios.put(`${RoutePuits}/${PuitId}`, {statut_puits : statut_puits}))
        return(response)
    } catch (error) {
        console.log(error.message);   
    }
}

export const updatePuitsType = async (PuitId, type_puits) =>  {
    try {
        const response = (await axios.put(`${RoutePuits}/${PuitId}`, {type_puits : type_puits}))
        return(response)
    } catch (error) {
        console.log(error.message);   
    }
}

export const postPuitsParametres = async (PuitsParametres) =>  {
    try {
    const response = (await axios.post(`${RoutePuits}/parametres`, PuitsParametres))
    return(response)
    } catch (error) {
        console.log(error);   
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
// Perimetres 

export const postPerimetresProduction = async (prodPerimetres, perimetres, journee_production) =>  {

    const previousDay = new Date( new Date(journee_production) - 24*60*60*60).toISOString().split("T")[0]
    // console.log("previous", previousDay);
    perimetres.map( async(p)=>{
        let production = prodPerimetres.get(`p-${p.id}`)
        // console.log("prodPerim", production);

        try { 
            // production
            const response = (await axios.post(`${RoutePerimetre}/productionData`, production))
            
            // realisation
            const realBody = {
                journee_production : journee_production, PerimetreId : p.id,
                realisation_perimetre_production_tm : production.production_perimetre_tm, realisation_perimetre_production_vm : production.production_perimetre_vm,
                realisation_perimetre_expedition_tm : production.expedition_perimetre_tm , realisation_perimetre_expedition_vm : production.expedition_perimetre_vm ,
            }

            if(previousDay.split("-")[1]!== "01" || previousDay.split("-")[2] !=="01"){            
                let prevRealisation = ( await axios.get(`${RoutePerimetre}/${p.id}/realisationData?journee_production=${previousDay}`)).data.data
                console.log("prev",prevRealisation);
                if (prevRealisation.length !== 0 ) {
                    realBody.realisation_perimetre_production_tm += prevRealisation[0].realisation_perimetre_production_tm
                    realBody.realisation_perimetre_production_vm += prevRealisation[0].realisation_perimetre_production_vm
                    realBody.realisation_perimetre_expedition_tm += prevRealisation[0].realisation_perimetre_expedition_tm
                    realBody.realisation_perimetre_expedition_vm += prevRealisation[0].realisation_perimetre_expedition_vm
                }
            }

            const resRealisation = (await axios.post(`${RoutePerimetre}/realisationData`, realBody))            
            // console.log("res",response, resRealisation)
            // return(response, resRealisation)
        } catch (error) {
            console.log(error);   
        }
    })
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

// //////////////////////////////////////////////////////////////////////////////
// Config

export const fetchUnites = async (RegionId) =>  {
    try {
        return axios.get(`${RouteUnite}?region=${RegionId}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error.message);   
    }  
}
