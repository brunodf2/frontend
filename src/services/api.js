import axios from "axios";

const api = axios.create({
  baseURL: "https://boxbruno-backend.herokuapp.com", 
});

export default api;