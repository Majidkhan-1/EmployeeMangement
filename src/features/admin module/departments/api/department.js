import { api } from "../../../../config/apiInstance"

export let createDepartmentApi = async (data)=>{
    try {
        let res = await api.post("/departments/create", data);
        return res.data.data;
    } catch (error) {
        console.error("Error in department api--->", error);
        throw error;
    }
}