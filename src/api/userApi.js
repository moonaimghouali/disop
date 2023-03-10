import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const severUrl = "http://localhost:5000"

const userRoute = `${severUrl}/api/utilisateurs`


export const loginUser = async (body) =>{
    const response = (await axios.post(`${userRoute}/login`, body))
    return response
}

export const initUser = async (body) =>{
    const token = localStorage.getItem("jwt")
    (await axios.post(`${userRoute}/login`, body))
    
}

