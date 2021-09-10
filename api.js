import axios from "axios";

const apiSheets = axios.create({
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // baseURL: "https://viacep.com.br/ws/01001000/json/",
     baseURL: "http://vps23593.publiccloud.com.br:3009/",
  //     baseURL: "http://localhost:3009/",

});

export default apiSheets;