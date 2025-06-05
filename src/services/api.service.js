import axios from 'axios';

export const BASE_URL = 'http://localhost:8000';
export const BASE_URL_API = `${BASE_URL}/api`;

export default function Api(){

    const token = localStorage.getItem("access_token");

    const api = axios.create({
        baseURL : BASE_URL_API,
        headers : {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    });

    // interceptores
    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // interceptor --- error de auth (401)
            if(error.response?.status === 401){
                localStorage.removeItem("access_token")
                location.href = "/auth/login"
            }

            // error de auth (403) permisos denegados

            // error de auth (500)
        }
    )

    return api;
}