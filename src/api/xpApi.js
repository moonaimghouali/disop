import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = "http://localhost:5000"
const RouteUnite= `${serverUrl}/api/unites`
const RouteRegion= `${serverUrl}/api/regions`

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Region Production
export const fetchRegionProduction = createAsyncThunk("production/fetchRegionProduction", ({RegionId, month}) =>  {
    try {
        return axios.get(`${RouteRegion}/${RegionId}/productionData`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const postRegionProduction = async (bilanProductionRegion) =>  {
    try {
        const response = (await axios.post(`${RouteRegion}/${bilanProductionRegion.RegionId}/productionData`, bilanProductionRegion))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const postRegionRealisation = async (bilanProductionRegion) =>  {
    try {
        const hier = new Date(new Date(bilanProductionRegion.journee_production) - 24*60*60*1000).toISOString().split("T")[0]
        const resultat = (await axios.get(`${RouteRegion}/${bilanProductionRegion.RegionId}/realisationData?journee_production=${hier}`))
        
        let realHier = resultat.data.data
        let body = {}

        if(realHier.length === 0){
            
            body = { journee_production : bilanProductionRegion.journee_production, RegionId : bilanProductionRegion.RegionId,
                realisation_region_production_tm : bilanProductionRegion.production_region_tm , 
                realisation_region_production_vm : bilanProductionRegion.production_region_vm,
                realisation_region_expedition_tm : bilanProductionRegion.expedition_region_tm , 
                realisation_region_expedition_vm : bilanProductionRegion.expedition_region_vm,
            }
        }else{
            body = { journee_production : bilanProductionRegion.journee_production, RegionId : bilanProductionRegion.RegionId,
                realisation_region_production_tm : bilanProductionRegion.production_region_tm + realHier[0].realisation_region_production_tm , 
                realisation_region_production_vm : bilanProductionRegion.production_region_vm + realHier[0].realisation_region_production_vm,
                realisation_region_expedition_tm : bilanProductionRegion.expedition_region_tm + realHier[0].realisation_region_expedition_tm , 
                realisation_region_expedition_vm : bilanProductionRegion.expedition_region_vm + realHier[0].realisation_region_expedition_vm,
            }
        }
        const response = (await axios.post(`${RouteRegion}/${bilanProductionRegion.RegionId}/realisationData`, body))
        return response
    } catch (error) {
        console.log(error);
    }
}



// ////////////////////////////////////////////////////////////////////////////////////////////////
// Unites Production
export const fetchRegionUnitesProduction = createAsyncThunk("production/fetchRegionUnitesProduction", ({RegionId, journee_production}) =>  {
    try {
        return axios.get(`${RouteRegion}/${RegionId}/productionData/unites?journee_production=${journee_production}`).then((response) => response.data.data)
    } catch (error) {
        console.log(error);
    }
})

export const updateUnitesProductionValidation = async ({UniteId , UniteProductionId}) =>{
    try {
        const response = (await axios.put(`${RouteUnite}/${UniteId}/productionData/${UniteProductionId}`, {validation_xp : true}))
        return response
    } catch (error) {
        console.log(error);
    }
}

export const postUnitesRealisation = async (UniteProduction) =>{
    try {
        let p = UniteProduction.production
        // console.log(p);
        // get realisation of last day
        const hier = new Date(new Date(UniteProduction.production.journee_production) - 24*60*60*1000).toISOString().split("T")[0]
        const resultat = (await axios.get(`${RouteUnite}/${UniteProduction.id}/realisationData?journee_production=${hier}`))
        
        let realHier = resultat.data.data
        let body = {}

        if(realHier.length === 0){
            console.log("0 ");
            body = { journee_production : p.journee_production, UniteId : p.UniteId,
                realisation_unite_production_tm : p.production_unite_tm , realisation_unite_production_vm : p.production_unite_vm,
                realisation_unite_expedition_tm : p.expedition_unite_tm , realisation_unite_expedition_vm : p.expedition_unite_vm,
            }
        }else{
            console.log("1 ");
            body = { journee_production : p.journee_production, UniteId : p.UniteId,
                realisation_unite_production_tm : p.production_unite_tm + realHier[0].realisation_unite_production_tm , realisation_unite_production_vm : p.production_unite_vm + realHier[0].realisation_unite_production_vm,
                realisation_unite_expedition_tm : p.expedition_unite_tm + realHier[0].realisation_unite_expedition_tm , realisation_unite_expedition_vm : p.expedition_unite_vm + realHier[0].realisation_unite_expedition_vm,
            }
        }
        console.log(body);
        const response = (await axios.post(`${RouteUnite}/${UniteProduction.id}/realisationData`, body))
        return response
    } catch (error) {
        console.log(error);
    }
}


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Perimetres

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Previsions

export const fetchPrevisions = async (RegionId, year, perimetres)  =>{
    try {
        const response = (await axios.get(`${RouteRegion}/${RegionId}/previsionData?year=${year}&p=${perimetres}`))
        return response
    } catch (error) {
        console.log(error);
    }
}