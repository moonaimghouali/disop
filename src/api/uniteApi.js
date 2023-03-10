import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const severUrl = "http://localhost:5000"


const RouteMouvements = `${severUrl}/api/bacOperations/`
const RouteBacs = `${severUrl}/api/unites/${5}/mybacs`

//Mouvements
export const fetchMouvements = async () => await axios.get(RouteMouvements);
export const createMouvement = async (newMouvement) => await axios.post(RouteMouvements, newMouvement);

//bacs
export const  fetchBacs =  createAsyncThunk("bacs/fetchBacs", () =>  {
    return axios.get(RouteBacs).then((response) => response.data.data)
})

export const createBac = async (newBac) => await axios.post(RouteBacs, newBac);
