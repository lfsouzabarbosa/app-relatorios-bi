import axios from "axios";

const apiSheetsSuhai7 = axios.create({
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     baseURL: "http://vps23593.publiccloud.com.br:3091/",
});

export default apiSheetsSuhai7;