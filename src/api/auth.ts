import axios from 'axios';
import { LoginCredential } from '../types/authTypes';
;


export const login = async (credential:LoginCredential)=>{
    try{
        const res = await axios.post('https://localhost:7277/api/Auth/admin/login',credential);
        return res.data
    }
    catch(err:any){
        return Promise.reject(err.response.data);
    }
}


