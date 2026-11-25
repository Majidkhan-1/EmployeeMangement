import { api } from "../../../../config/apiInstance";

export const getAllEmployee = async ({page = 1, limit = 20,role="",status = "active",department= "",search=""}) => {
    try {
        const res = await api.get(`/employee?page=${page}&limit=${limit}&search=${search}&role=${role}&status=${status}&department=${department}`);
        console.log("Get all employee data---->",res)
        return res.data.data;
    } catch (error) {
        console.error("Error in employee api:", error);
        throw error;
    }
};

export const createEmployee =async (data) =>{
    try {
        let res = await api.post('/employee/create',data)
        return (await res).data.data
    } catch (error) {
        console.log("error in create employee api--->",error)
        
    }

}

export const updateEmployee = async (employeeId, employeeData) => {
    try {
        const res = await api.patch(`/employee/update/${employeeId}`, employeeData);
        return res.data.data;
    } catch (error) {
        console.error("Error updating employee:", error);
        throw error;
    }
};