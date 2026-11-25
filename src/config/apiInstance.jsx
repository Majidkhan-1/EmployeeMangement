import axios from "axios";

export const api =  axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//    let originalReq = error.config;
//      if (
//        error.response?.status === 401 &&
//        !originalReq.retry &&
//        !originalReq.url?.includes("/auth/get-accessToken")
//      ) {
//        originalReq.retry = true;

//        try {
//          await api.get("/auth/get-accessToken");
//           return api(originalReq);
//           } catch (error) {
//             if(window.location.pathname !== '/'){
//              window.location.href = '/';
//            }

//           return Promise.reject(error);
//                }
//              }

//      return Promise.reject(error);
//    }
//   )





//axios.create({
//   baseURL: "https://team-sync-backend-n78w.onrender.com/api",
//   withCredentials:true
// });

// api.interceptors.response.use((response)=>response,
//       async (error)=>{
//         let originalReq = error.config;
      
//         if(error.response?.status === 401 && originalReq && !originalReq._retry){
//           originalReq._retry = true;

//           try {

//             // await api.get('/auth/get-accessToken');
//             const refreshToken = localStorage.getItem("refreshToken");
            
//             const res = await axios.post("https://dummyjson.com/auth/refresh", {
//               refreshToken,
//               expiresInMins: 30,
//             });


//             localStorage.setItem("accessToken", res.data.accessToken);
         
//             localStorage.setItem("refreshToken", res.data.refreshToken);

//             originalReq.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
//             return api(originalReq);
            
         

//           } catch (error) {
            
//            if(window.location.pathname !== '/'){
//              window.location.href = '/';
//            }
//             return Promise.reject(error);
//           }
//         }

//         return Promise.reject(error);
//       }
// )