import axios from "axios";

const APImodelMidia = axios.create({
    headers: { 'Content-Type': 'application/json'},
    baseURL: "http://localhost:3093/sistema/midias"
});

export default APImodelMidia;