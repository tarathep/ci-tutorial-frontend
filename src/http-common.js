import axios from "axios"



export default axios.create({
    // http://localhost:8089/api
    baseURL: process.env.VUE_APP_ENDPOINT_API_BACKEND,
    headers: {
        "Content-type": "application/json",
    }
    
});