import {createSlice} from '@reduxjs/toolkit'
import { currentLoggedInUser, loginEmployee } from './authAction'

const authSlice = createSlice({
    name:"auth",
    initialState:{
        employee:null,
        isLoading:false,

    },
    reducers:{
        addEmployee:(state,action) => {
            state.employee = action.payload,
            state.isLoading= false
        },

        removeEmployee:(state,action)=>{
            state.employee = null,
            state.isLoading= false
        },
      
    },
    extraReducers:(builder) =>{
        builder.addCase(loginEmployee.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(loginEmployee.fulfilled,(state,action)=>{
            state.employee = action.payload;
            state.isLoading = false;
        })
        .addCase(loginEmployee.rejected,(state)=>{
            state.isLoading = false
        })
        .addCase(currentLoggedInUser.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(currentLoggedInUser.fulfilled,(state,action)=>{

            state.employee = action.payload;        
            state.isLoading = false;
        })
        .addCase(currentLoggedInUser.rejected,(state)=>{
            state.isLoading = false
        })
    }

    
})

export const {addEmployee,removeEmployee} = authSlice.actions;
export default authSlice.reducer