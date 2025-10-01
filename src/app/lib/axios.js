import axios from 'axios';

export const axiosInstanceAuthService = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:8020/api/v1" : "/api/v1",
    withCredentials: true,
})

export const axiosInstanceProblemService = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1",
    withCredentials: true,
})

export const axiosInstanceSubbmissionService = axios.create({
    baseURL:import.meta.env.MODE === "development" ? "http://localhost:8080/api/v1" : "/api/v1",
    withCredentials:true,
})