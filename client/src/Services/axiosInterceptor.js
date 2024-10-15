import axios from "axios";

const instance = axios.create({
    baseURL: "https://todomernapp-nwsl.onrender.com",
    // baseURL: "http://localhost:4000/api/v1",
    timeout: 2000,
})

export default instance;
