import { api } from "../../../config/apiInstance"

export let logoutApi = async ()=>{
    try {
        let res = api.post('/auth/logout');
        return res;
    } catch (error) {
        console.log("Error in logout api:",error)
    }
}