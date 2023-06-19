import axios from "axios";


const baseURL = "http://localhost:3001/api";


const api = axios.create({ baseURL });

export const login = async (userData) => {
    try{
        const response = await api.post("/login", userData);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return { error: "An error occurred" };
    }
}

export const register = async (userData) => {
    try{
        const response = await api.post("/register", userData);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return { error: "An error occurred" };
    }
}


export const logout = async () => {
    try{
        const response = await api.post("/logout");
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return { error: "An error occurred" };
    }
}