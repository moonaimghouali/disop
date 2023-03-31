import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// require("dotenv").config();

const serverUrl = "http://localhost:5000"

const userRoute = `${serverUrl}/api/utilisateurs`


export const loginUser = async (body) =>{
    const response = (await axios.post(`${userRoute}/login`, body))
    return response
}

export const initUser = async () =>{
    const token = localStorage.getItem("jwt")

    if(!token) return { userInfo : {}, isSignedIn : false }

    else {
        const response = (await axios.post(`${userRoute}/init`, {AccessToken : token}))
        //check response if token still valid authenticate the user else send him to login page
    }
}

export const getSystemInfo = async (utilisateur) =>{

    let response
    if (utilisateur.affectation === "Unite"){
        try {
            response = (await axios.get(`${serverUrl}/api/unites/${utilisateur.affectation_id}`))
            const data = response.data.data
            return {code : data.codeUnite, nom : data.nomUnite, id : data.id }

         } catch (error) {
            console.log(error)
         }
    }else{
        if(utilisateur.affectation === "Region"){
            try {
                response = (await axios.get(`${serverUrl}/api/regions/${utilisateur.affectation_id}`))
                const data = response.data.data
                return {code : data.codeRegion, nom : data.nomRegion, id : data.id }

             } catch (error) {
                console.log(error)
             }
        }else{
            return {code : "", nom : "", id : -1 }
        }
    }

    
        
}

