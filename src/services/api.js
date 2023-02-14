import axios from 'axios';

//Configuração do axios
const api = axios.create({
    baseURL: "https://api.github.com" //url de base
});

export default api;