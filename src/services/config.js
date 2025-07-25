import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_URL || "api";


export const serviceAxiosInstance = axios.create({
    baseURL : baseUrl,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "*"
    },

});

 serviceAxiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = (`Bearer ${token}`);
    }
    return config;
})

