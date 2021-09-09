import axios from "axios";

const apiSheets = axios.create({
  // baseURL: "https://viacep.com.br/ws/01001000/json/",
  baseURL: "https://vps23593.publiccloud.com.br:3009/",
});

export default apiSheets;