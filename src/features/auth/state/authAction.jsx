import {createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../../config/apiInstance'

export const loginEmployee = createAsyncThunk('/auth/login',
    async (credential,ThunApi)=>{
        try {
           
            let res = await api.post("/auth/login",credential);

            console.log(res);

            // let new_res = {...res.data,role:"admin"}

            // console.log("This is new response---->",new_res);

            
            return res.data.data;

        } catch (error) {
            console.error('Login failed:', error.response?.data?.message ?? error.message)
            return ThunApi.rejectWithValue(error)
        }
});


export let currentLoggedInUser = createAsyncThunk('auth/me',async (_,ThunApi)=>{
        try {


            let res = await api.get("/auth/me");

            console.log(res);

            return res.data.user;

        } catch (error) {
            return ThunApi.rejectWithValue(error)
        }    
})
