import axios from 'axios';
console.log(process.env.NEXT_PUBLIC_MODE);

export const axiosInstanceAuthService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MODE == "development" ? "http://localhost:8020/api/v1" : "/api/v1",
    withCredentials: true,
})

export const axiosInstanceProblemService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MODE === "development" ? "http://localhost:4010/api/v1" : "/api/v1",
    withCredentials: true,
})

export const axiosInstanceSubbmissionService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MODE === "development" ? "http://localhost:4030/api/v1" : "/api/v1",
    withCredentials:true,
})  
export const axiosInstanceContestService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MODE === "development" ? "http://localhost:400/api/v1" : "/api/v1",
    withCredentials:true,
}) 
export const axiosInstanceNotificationService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MODE === "development" ? "http://localhost:4040/api/v1" : "/api/v1",
    withCredentials:true,
})