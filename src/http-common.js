import axios from "axios"

console.log('')
export default axios.create({
    // http://localhost:8089/api
    baseURL: '${process.env.ENPOINT_API_BACKEND}',
    headers: {
        "Content-type": "application/json",
    }
    
});